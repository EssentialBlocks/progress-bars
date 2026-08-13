# Contributing

Developer setup for Progress Bar. `README.md` is generated from `readme.txt` for
WordPress.org, so developer documentation lives here instead.

## Clone

This repository depends on two git submodules:

| Submodule | Path | Needed for |
| --- | --- | --- |
| `style-handler` | `lib/style-handler` | **Runtime.** Ships in the plugin and generates the per-post CSS the frontend depends on. |
| `controls` | `controls` | Build time only. Shared Essential Blocks editor controls. |

Clone with submodules:

```bash
git clone --recurse-submodules git@github.com:EssentialBlocks/progress-bars.git
cd progress-bars
```

Both submodules are private repositories, so this needs an SSH key with access to
the `EssentialBlocks` organisation.

### Already cloned without submodules

```bash
git submodule update --init --recursive
```

Or equivalently, from the plugin directory:

```bash
npm run ensure-submodules
```

## Install and build

```bash
npm install         # also runs `prepare`, which checks the submodules
npm run build       # production build into dist/
npm start           # watch mode
```

### Known install snag

`package.json` still declares `node-sass@^4.14.1`. The build does not use it —
`@wordpress/scripts` supplies dart-sass — but npm still tries to compile it, and
it has no prebuilt binary for current Node versions, so a plain `npm install`
fails while building it. Until it is removed, install with:

```bash
npm install --ignore-scripts
```

Note that `--ignore-scripts` also skips `prepare`, so the submodule check does
not run during install. It still runs on `npm run build`, `npm start` and
`npm run dist`, which are the steps that must not proceed without it. To check
on demand:

```bash
npm run ensure-submodules
```

## Why `lib/style-handler` matters

`lib/style-handler/style-handler.php` is loaded by `progress-bars.php` at
runtime. Because it comes from a submodule, a plain `git clone` leaves the
directory empty, and nothing downstream complains on its own:

- `npm run build` still succeeds — `dist/` does not depend on the submodule
- `wp dist-archive` still reports `Success` while shipping an empty directory

WordPress is where it surfaces. The plugin guards the load with `file_exists()`,
so a missing file produces an admin notice naming the missing path rather than a
fatal error. If you see that notice on a checkout, the submodules are not
initialised.

If the file is missing from an actual release, the editor still renders correctly
while the frontend silently loses every generated style — colours, sizes, spacing
— which is why the build and package steps refuse to run without it.

## Safety gates

`bin/ensure-submodules.js` checks the runtime files, initialises the submodules
when run from a git checkout, and reports clearly when it cannot.

| Hook | Command | Behaviour when the files are missing and cannot be restored |
| --- | --- | --- |
| `prepare` | `npm install`, `npm ci` | **Warns and continues.** Missing credentials must not block dependency installation. |
| `prebuild` | `npm run build` | **Fails.** |
| `prestart` | `npm start` | **Fails.** |
| `predist` | `npm run dist` | **Fails.** |
| `postdist` | after `npm run dist` | **Fails** if the built zip does not contain the runtime files. `bin/verify-package.js` does not count an empty directory entry as present. |

## Packaging

```bash
npm run dist        # -> ./progress-bars.zip, then verifies its contents
```

Run this from a directory named `progress-bars`: `wp dist-archive` names the
folder inside the zip after the working directory. It needs the
`wp-cli/dist-archive-command` package.

`bin/` and every `*.md` file are excluded by `.distignore`, so none of the
tooling above ships in the zip.

## Releases

`.github/workflows/deploy.yml` deploys to WordPress.org on tag push. It checks
out with `submodules: recursive` and an `EB_PAT` token, so the runtime files are
present before the build runs, and the build runs before the deploy step.

Note that the workflow still pins `node-version: '14'`, which the current
dependency tree no longer supports — `sass` and `chokidar` in the resolved tree
require Node >= 20.19.0. That is tracked separately from submodule handling.

## Branches

Branches are `dev`, `latest` and `master`. Open pull requests against `dev`.
