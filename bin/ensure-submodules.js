#!/usr/bin/env node
/**
 * Guarantees that the runtime files which ship inside the plugin but live in a
 * git submodule are present before anything builds or packages the plugin.
 *
 * `lib/style-handler` is a submodule, so a plain `git clone` leaves it empty.
 * Nothing downstream notices: `npm run build` still succeeds (dist/ does not
 * depend on it) and `wp dist-archive` still reports "Success", but the zip
 * ships an empty lib/style-handler/ and every install shows the missing-files
 * admin notice. This script turns that silent failure into either a self-heal
 * or a loud error.
 *
 * Pass --soft to warn instead of failing. That mode exists for the `prepare`
 * lifecycle hook: a developer without credentials for the private submodule
 * repositories should still be able to finish `npm install`. The build and
 * package hooks call this without --soft and stay strict, so an incomplete tree
 * can never reach a build or a zip.
 *
 * Kept to CommonJS and ES2015-era APIs on purpose: the deploy workflow still
 * runs this on an old Node, so nothing here may depend on a modern runtime.
 */

const { existsSync } = require("fs");
const { execFileSync } = require("child_process");
const { join, dirname } = require("path");

const root = dirname(__dirname);

/**
 * Runtime files that ship in the distribution but are not tracked directly by
 * this repository. Paths are relative to the plugin root.
 */
const REQUIRED_FILES = [
	"lib/style-handler/style-handler.php",
	"lib/style-handler/includes/class-parse-css.php",
];

const missingFiles = () =>
	REQUIRED_FILES.filter((file) => !existsSync(join(root, file)));

function ensureSubmodules() {
	let missing = missingFiles();

	if (missing.length === 0) {
		return;
	}

	// Without a .git entry this is an exported or downloaded tree rather than a
	// checkout, so there is no submodule to initialise and nothing to repair.
	if (!existsSync(join(root, ".git"))) {
		throw new Error(
			"Missing required runtime files and this is not a git checkout, so they cannot be restored:\n" +
				missing.map((file) => `  - ${file}`).join("\n") +
				"\nBuild or package from a git clone of the repository instead."
		);
	}

	console.log(
		"Initialising git submodules (lib/style-handler is required at runtime)..."
	);

	try {
		execFileSync("git", ["submodule", "update", "--init", "--recursive"], {
			cwd: root,
			stdio: "inherit",
		});
	} catch (error) {
		throw new Error(
			"`git submodule update --init --recursive` failed.\n" +
				"lib/style-handler is a private repository, so this needs credentials with access to it."
		);
	}

	missing = missingFiles();

	if (missing.length > 0) {
		throw new Error(
			"Submodules were initialised but these required runtime files are still missing:\n" +
				missing.map((file) => `  - ${file}`).join("\n")
		);
	}

	console.log("Submodule runtime files are present.");
}

module.exports = { REQUIRED_FILES, root, ensureSubmodules };

if (require.main === module) {
	const soft = process.argv.indexOf("--soft") !== -1;

	try {
		ensureSubmodules();
	} catch (error) {
		if (soft) {
			console.warn(
				`\nWarning: ${error.message}\n\n` +
					"Required git submodules are not initialised. Run:\n\n" +
					"  git submodule update --init --recursive\n\n" +
					"Continuing anyway. Editing and installing dependencies still work, but\n" +
					"`npm run build` and `npm run dist` will refuse to run until this is resolved,\n" +
					"and WordPress will show a missing-files notice for this checkout.\n" +
					"See CONTRIBUTING.md.\n"
			);
			process.exit(0);
		}
		console.error(`\n${error.message}\n`);
		process.exit(1);
	}
}
