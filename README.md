# Progress Bar

Make your website interactive with a stunning progress bar block for the WordPress block editor.

Part of the [Essential Blocks](https://essential-blocks.com) family by [WPDeveloper](https://wpdeveloper.com).

## Features

- Seven layouts: Line, Line Rainbow, Circle, Circle Fill, Half Circle, Half Circle Fill and Box
- Responsive controls for width, height, size, stroke and box dimensions
- Advanced and responsive typography options
- Scroll-triggered animation on the frontend
- Stripe animation, gradient fills and custom colours
- Show Inline layout for line-style bars

## Requirements

| | |
|---|---|
| WordPress | 6.0 – 7.0 |
| PHP | 7.4 – 8.5 |

## Development

This repository uses git submodules for the shared `controls` package and the `style-handler` library. **Clone with submodules, or the build will be incomplete:**

```bash
git clone --recurse-submodules git@github.com:EssentialBlocks/progress-bars.git
cd progress-bars
```

Already cloned without them:

```bash
git submodule update --init --recursive
```

> `lib/style-handler` writes the per-post CSS that the frontend depends on. If it is missing from a build, the editor still renders correctly while the frontend silently loses every generated style.

Install dependencies and build:

```bash
yarn install        # or: npm install
npm run build       # production build into dist/
npm start           # watch mode
```

### Packaging a release

Built with [WP-CLI's dist-archive command](https://github.com/wp-cli/dist-archive-command), which respects `.distignore`:

```bash
wp package install wp-cli/dist-archive-command
wp dist-archive . ../progress-bars.zip
```

Note that `.distignore` entries must be written **without** a leading slash — `dist-archive` prefixes each entry with `*/`, so `/controls/` becomes `*//controls/*` and silently matches nothing.

## Branches

| Branch | Purpose |
|---|---|
| `master` | Stable, released code |
| `latest` | Integration branch; feature work merges here before `master` |
| `dev` | Active development |
| `trunk` | wordpress.org SVN mirror |

## Contributors

- [@RahatSheikhLeon](https://github.com/RahatSheikhLeon)
- [WPDeveloper](https://github.com/EssentialBlocks) team

## Support

- [Documentation](https://essential-blocks.com/docs/)
- [Issue tracker](https://github.com/EssentialBlocks/progress-bars/issues)
- [Support forum](https://wordpress.org/support/plugin/progress-bars/)

## License

GPL-3.0-or-later. See [the licence text](https://www.gnu.org/licenses/gpl-3.0.html).
