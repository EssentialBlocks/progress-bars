#!/usr/bin/env node
/**
 * Asserts that a built distribution zip actually contains the runtime files
 * that live in git submodules.
 *
 * `wp dist-archive` reports "Success" even when lib/style-handler/ is empty, so
 * the zip is the only place this can be checked with certainty. Run after
 * packaging; exits non-zero if the archive would install a broken plugin.
 *
 * Usage: node bin/verify-package.js <path-to-zip>
 */

const { existsSync } = require("fs");
const { execFileSync } = require("child_process");

const { REQUIRED_FILES } = require("./ensure-submodules");

const zipPath = process.argv[2];

if (!zipPath) {
	console.error("\nUsage: node bin/verify-package.js <path-to-zip>\n");
	process.exit(1);
}

if (!existsSync(zipPath)) {
	console.error(`\nArchive not found: ${zipPath}\n`);
	process.exit(1);
}

let entries;

try {
	entries = execFileSync("unzip", ["-Z1", zipPath], { encoding: "utf8" })
		.split("\n")
		.filter(Boolean);
} catch (error) {
	console.error(`\nCould not read the archive: ${zipPath}\n`);
	process.exit(1);
}

// Entries are prefixed with the plugin directory inside the archive, and a
// zero-byte directory entry must not count as the file being present.
const missing = REQUIRED_FILES.filter(
	(file) => !entries.some((entry) => entry.endsWith(`/${file}`) || entry === file)
);

if (missing.length > 0) {
	console.error(
		`\n${zipPath} is missing required runtime files:\n` +
			missing.map((file) => `  - ${file}`).join("\n") +
			"\nThe submodules were most likely not initialised before packaging.\n"
	);
	process.exit(1);
}

console.log(
	`${zipPath} contains all ${REQUIRED_FILES.length} required submodule runtime files.`
);
