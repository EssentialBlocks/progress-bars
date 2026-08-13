# Progress Bar — PHP / WordPress Compatibility Report

**Plugin:** Progress Bar (`progress-bars`)
**Version:** 1.2.7 → 1.5.0
**Branch:** `progress-bars-dev` (cut from `latest`, see note below)
**Date of audit:** 10 August 2026

---

## 1. Detected original baseline

| | Detected | Evidence |
|---|---|---|
| **PHP** | **5.6** | `Progressbar_Font_Loader::get_instance( ...$args )` — variadics are 5.6+. Short arrays `[]` throughout (5.4+). No `??`, no typed properties, no arrow functions, no `match`, no constructor promotion anywhere in the codebase. |
| **WordPress** | **5.6** (with a 5.8 code path) | `readme.txt` declared `Requires at least: 5.6`. `Progress_Bar_Helper::get_block_register_path()` explicitly branches on `< 5.8` to switch between name-form and path-form `register_block_type()` — the path form landed in WP 5.8. `site-editor.php` / `gutenberg-edit-site` handling implies 5.9+ in practice. |

**Declared values found before this pass:**

- Main plugin header: `Requires PHP` — **absent**. `Requires at least` — **absent**. `Tested up to` — **absent**.
- `readme.txt`: `Requires at least: 5.6`, `Tested up to: 6.5`, `Requires PHP` — **absent**, `Stable tag: 1.2.7`.

**Do they disagree?** Yes, materially. The header declared nothing at all, so WordPress had no way to gate installation on either PHP or core version. Meanwhile the code contains `str_contains()` (a PHP 8.0 function that only works below 8.0 because WordPress 5.9+ polyfills it) — so the effective real-world floor was already higher than the `5.6` that `readme.txt` advertised.

---

## 2. Chosen floor

```
declared PHP floor = max( detected 5.6, policy minimum 7.4 ) = 7.4
declared WP  floor = max( detected 5.6, policy minimum 6.0 ) = 6.0
```

The **policy minimum won on both axes**. The user did not request a lower floor for this plugin, so the standard 7.4 / 6.0 default was applied.

This also resolves the `str_contains()` fragility noted above: at a WP 6.0 floor the core polyfill in `wp-includes/compat.php` is guaranteed present, so the call is safe across the whole declared range.

---

## 3. Target range

| | Floor | Latest stable | Source |
|---|---|---|---|
| PHP | 7.4 | **8.5.9** (released 30 Jul 2026) | `php.net/releases` JSON API, checked 10 Aug 2026. Actively supported branches: 8.2, 8.3, 8.4, 8.5. |
| WordPress | 6.0 | **7.0.3** | `api.wordpress.org/core/version-check/1.7/`, checked 10 Aug 2026. |

**Per-version checklist covered:** PHP 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5 · WordPress 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 7.0.

> WordPress reaching 7.0 is directly relevant to this plugin: it had **two** float-cast version comparisons, a pattern that silently misreads any `x.10` release.

---

## 4. Issues found

| # | File:line | Issue | Breaks on | Severity |
|---|---|---|---|---|
| 1 | `progress-bars.php:27` | `require_once 'lib/style-handler/style-handler.php'` is unconditional, but `lib/style-handler` is an **uninitialised git submodule** (`git submodule status` reports `-34fb2c6…`). Directory is empty → `Fatal error: Failed opening required`. | All PHP / all WP | **Critical** |
| 2 | `includes/helpers.php:86` | `(float) get_bloginfo('version') < 5.8` — casts the WP version string to float. `"6.10"` → `6.1`, which compares as *older* than `6.8`. Wrong registration path returned. | Any `x.10` WP release | **Critical** |
| 3 | `progress-bars.php:1` | No `if ( ! defined( 'ABSPATH' ) ) exit;` guard — the file executes if requested directly. | All | High |
| 4 | `progress-bars.php` header | `Requires PHP`, `Requires at least`, `Tested up to` all missing. WordPress cannot block installation on an unsupported stack. | All | High |
| 5 | `progress-bars.php:85` | `$frontend_js_path = include_once …/index.asset.php;` — `include_once` returns bool `true` if the file was already pulled in, making `$frontend_js_path['dependencies']` an array-offset-on-bool. | 7.4 notice → 8.0+ warning | High |
| 6 | `includes/helpers.php:50` | Same `include_once` bug on `dist/modules.asset.php`. | 7.4 notice → 8.0+ warning | High |
| 7 | `progress-bars.php:82` | `filemtime()` called with no `file_exists()` guard → `filemtime(): stat failed` warning and a `false` version string when `dist/style.css` is absent. | All; louder on 8.x | High |
| 8 | `includes/helpers.php:61` | `'eb_wp_version' => (float) get_bloginfo('version')` — same float-cast defect as #2, but the value crosses into JavaScript. | Any `x.10` WP release | High — **flagged, not fixed** |
| 9 | `progress-bars.php:38` | `throw new Error(...)` fires on the `init` hook → uncaught fatal / white screen rather than an admin notice. | All | High — **flagged, not fixed** |
| 10 | `progress-bars.php:29` | Global function `create_block_progress_bar_block_init()` declared with no `function_exists()` guard → fatal redeclare risk (it is the WP block scaffold's default name, shared by sibling Essential Blocks plugins). | All | Medium |
| 11 | `includes/helpers.php:48` | `$_SERVER['QUERY_STRING']` read without `isset()`, `wp_unslash()` or sanitisation. | All (WPCS) | Medium |
| 12 | `includes/helpers.php:56,79` | `$controls_dependencies['version']` / `['dependencies']` read with no existence check. | 8.0+ | Medium |
| 13 | `includes/helpers.php:48` | `str_contains()` is PHP 8.0+; works below that only via the WP 5.9+ core polyfill. | PHP 7.4 + WP < 5.9 | Medium |
| 14 | `block.json` | No `apiVersion` key → defaults to **API v1**. WP 6.3+ runs the iframed editor and v1 blocks take a compatibility path. | WP 6.3+ | Medium — **flagged, not fixed** |
| 15 | `progress-bars.php:32-34` | Three `define()` calls with no `defined()` guard. | All | Low |
| 16 | `includes/post-meta.php:11` | `add_filter('init', …)` used to attach an action. Functionally an alias, but semantically wrong. | All | Low |
| 17 | `includes/font-loader.php:22` | `self::$instances == null` — loose comparison also matches `0`, `''`, `[]`. | PHP 8 comparison semantics | Low |
| 18 | `includes/font-loader.php:16` | `private static $block_name = []` declared as an array but only ever assigned a string. | All | Low |
| 19 | `readme.txt:4-6` | `Requires at least: 5.6` / `Tested up to: 6.5` — both stale; no `Requires PHP` at all. | — | High |

**Clean results:** no `create_function()`, `each()`, `ereg*`, `split()`, `money_format()`, `strftime()`, `utf8_encode/decode`, `FILTER_SANITIZE_STRING`, `mysql_*`, or `${var}` interpolation anywhere. No curly-brace offsets. No dynamic property creation (PHP 8.2). No implicit nullable parameters (PHP 8.4). No `$wpdb` usage at all, so no `prepare()` exposure. No REST route registration, so no missing `permission_callback`. No `load_plugin_textdomain()` call, so the WP 6.7 early-textdomain notice does not apply. No deprecated jQuery patterns in `assets/` or `src/`.

---

## 5. Dead version-check branches (awaiting your decision)

Raising the declared WP floor to 6.0 strands the following branch. **Nothing has been removed.**

| File | Line | Condition | What the branch does | Single remaining reachable path if removed |
|---|---|---|---|---|
| `includes/helpers.php` | 86 | `version_compare( get_bloginfo('version'), '5.8', '<' )` | Returns the block **name** string (`'progress-bars/progress-bar-block'`) so `register_block_type()` uses the pre-5.8 name form. | `get_block_register_path()` collapses to `return $blockPath;` — a one-line method. At that point the whole method could be dropped and `register_block_type()` in `progress-bars.php:96` could take `PROGRESS_BARS_BLOCKS_ADMIN_PATH` directly. |

The condition was corrected from a float cast to `version_compare()` (issue #2) so it is *correct* while it remains, but at a WP 6.0 floor it can never evaluate true again.

**Decision needed:** remove, keep, or keep-with-comment. Currently it is **keep-with-comment** — an explanatory note was added in place, and nothing was deleted. Note that `Progress_Bar_Helper::get_block_register_path()` is a public static method shared by pattern across sibling Essential Blocks plugins, so removing it here may desynchronise this plugin from its siblings.

---

## 6. Fixes applied

| Issue | Fix |
|---|---|
| #1 | Wrapped the `style-handler` require in `file_exists()`. The plugin now loads with the submodule uninitialised instead of fatalling. |
| #2 | Replaced `(float) get_bloginfo('version') < 5.8` with `version_compare( get_bloginfo('version'), '5.8', '<' )`. |
| #3 | Added the `ABSPATH` guard to `progress-bars.php`. |
| #4 | Added `Requires PHP: 7.4`, `Requires at least: 6.0`, `Tested up to: 7.0` to the plugin header. |
| #5 | `include_once` → `require`, behind a `file_exists()` guard, with `isset()` fallbacks on `['dependencies']` and `['version']`. |
| #6 | Same treatment for `dist/modules.asset.php`; the method returns early if the asset file is absent. |
| #7 | `filemtime()` now guarded by `file_exists()`, falling back to `PROGRESS_BARS_BLOCKS_VERSION`. |
| #10 | Wrapped the init function in `if ( ! function_exists( … ) ) : … endif;`. |
| #11 | `$_SERVER['QUERY_STRING']` now read via `isset()` + `wp_unslash()` + `sanitize_text_field()` into a local `$query_string`. |
| #12 | Dependency and version reads now use `isset()` with sensible fallbacks. |
| #13 | No code change needed — the WP 6.0 floor guarantees the core polyfill. Recorded here for traceability. |
| #15 | Each `define()` now guarded with `! defined()`. |
| #16 | `add_filter('init', …)` → `add_action('init', …)`. |
| #17 | `==` → `===` (Yoda form: `null === self::$instances`). |
| #18 | `private static $block_name = []` → `= ''`. |
| #19 | `readme.txt` updated: `Requires at least: 6.0`, `Tested up to: 7.0`, `Requires PHP: 7.4`, `Stable tag: 1.5.0`, plus a 1.5.0 changelog entry. |

Version bumped **1.2.7 → 1.5.0** (minor, at the user's explicit request) and kept in sync across the plugin header, `PROGRESS_BARS_BLOCKS_VERSION`, `readme.txt` `Stable tag`, and `package.json`.

**No feature, option name, hook name, block markup, saved attribute, or public API changed.**

---

## 7. Flagged, not auto-fixed — your call

### 7.1 `eb_wp_version` is a float handed to JavaScript (issue #8)

`includes/helpers.php:61` localises `(float) get_bloginfo('version')` into `EssentialBlocksLocalize.eb_wp_version`. This carries the identical `x.10` defect as issue #2, but the consumer is JavaScript in the `controls` submodule, which is not checked out here — so the comparison style used on the JS side is unknown.

Under WP 7.0.3 it currently yields `7`, which is harmless. Under a hypothetical WP 6.10 or 7.10 it would yield `6.1` / `7.1` and silently misbehave.

Changing it to a string is **behaviour-visible**: any JS doing `eb_wp_version >= 6.5` would change meaning, since `"7.0.3" >= 6.5` does not evaluate the way a numeric comparison does.

**Recommendation:** keep `eb_wp_version` as-is for backwards compatibility, and add a *second* key alongside it — `eb_wp_version_string => get_bloginfo('version')` — then migrate the `controls` JS to the string key and compare with a proper semver helper. That is a coordinated change across two repositories, which is why it was not made unilaterally.

### 7.2 `throw new Error` on the `init` hook (issue #9)

`progress-bars.php:38` throws when `dist/index.asset.php` is missing. Thrown from `init`, this is an uncaught fatal — the whole site white-screens, front end included, not just the admin.

**Recommendation:** replace with an `admin_notice` plus an early `return`, so a broken or partial build degrades to "block unavailable" rather than "site down". This changes user-facing behaviour on the error path, so it is left untouched pending your approval.

### 7.3 `block.json` has no `apiVersion` (issue #14)

The file declares only `name`, `title`, `category`, `keywords`, `description`, `textdomain` — no `apiVersion`, so it defaults to **1**. Block API v2 arrived in WP 5.6 and v3 (the iframed editor) in WP 6.3. Across the whole 6.0 → 7.0 target range this plugin is running the oldest supported block API.

It still works — core keeps a compatibility path for v1 blocks — but the block renders outside the iframe in the site editor, which can produce styling differences.

**Recommendation:** move to `apiVersion: 3`, but only alongside a real editor test pass. It changes editor DOM structure and how styles resolve, so it is emphatically not a silent compatibility fix. Left alone.

### 7.4 Uninitialised submodules

Both `controls` and `lib/style-handler` are uninitialised in this checkout:

```
-807ed39e93f37d307829541dd69d038a7cb48a96 controls
-34fb2c61af9277abd64cef54d0eba5ec638d268a lib/style-handler
```

Issue #1's guard means this no longer fatals, but the plugin cannot be fully exercised until you run `git submodule update --init --recursive`. The audit therefore covers the plugin's own PHP only; the two submodules' contents were not reviewed.

---

## 8. Old-vs-new conflicts

None. Nothing in the 7.4 → 8.5 or 6.0 → 7.0 range required a construct that breaks the other end. No new compatibility shims were added; every fix uses plain PHP 7.4-safe syntax.

---

## 9. Final declared compatibility range

| Field | Location | Value |
|---|---|---|
| `Requires PHP` | plugin header + `readme.txt` | **7.4** |
| `Requires at least` | plugin header + `readme.txt` | **6.0** |
| `Tested up to` | plugin header + `readme.txt` | **7.0** |
| `Stable tag` / `Version` | header, `readme.txt`, `package.json`, `PROGRESS_BARS_BLOCKS_VERSION` | **1.5.0** |

---

## 10. Verification performed

- `php -l` on every modified file individually — clean.
- Full sweep: `find . -name '*.php' -not -path './node_modules/*' -print0 | xargs -0 -n1 php -l` — **8/8 files, no syntax errors**, under PHP **8.5.8** (CLI). Includes all four generated `dist/*.asset.php` files.
- `phpcs` is **not installed** on this machine (`phpcs -i` fails). WordPress Coding Standards checks were therefore not run; no global tooling was installed. The escaping/sanitisation items above were found by manual review.
- Runtime verification was **not** performed — the two submodules are uninitialised, so the plugin cannot be fully loaded in this checkout.

### Branch note

The skill's default is to branch from `master`. That was **not** done here: `master` is stale relative to `latest`.

- `master` carries only `e2ab45c` (merge of PR #13), an older merge.
- `latest` carries `63b5d89` "fixed: compatibility support with wordpress 6.5 version".
- Diffing the two shows `latest` additionally holds `dist/modules.*`, `dist/style-modules.css`, `src/style.js`, and substantially rewritten `src/edit.js` and `src/inspector.js`.

Branching from `master` would have discarded that work, so `progress-bars-dev` was cut from **`latest`** instead.

Nothing has been committed or pushed. The whole change set is sitting in the working tree on `progress-bars-dev` for review.
