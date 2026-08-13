<?php

/**
 * Plugin Name:     Progress Bar
 * Plugin URI:         https://essential-blocks.com
 * Description:     Make your website interactive with stunning progress bar
 * Version:         1.3.0
 * Author:          WPDeveloper
 * Author URI:         https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     progress-bars
 * Requires PHP:    7.4
 * Requires at least: 6.0
 * Tested up to:    7.0
 *
 * @package         progress-bars
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';

/**
 * `lib/style-handler` ships as a git submodule. In a checkout — or a release zip —
 * built without `git submodule update --init`, the directory is empty and an
 * unconditional require is a fatal error.
 *
 * The guard keeps the plugin loading, but this component is what writes the
 * per-post CSS the frontend depends on. Without it the editor still looks
 * correct (it renders its own <style> tag) while the frontend loses every
 * generated style: colours, sizes, spacing and the Show Inline layout. That
 * silent, frontend-only breakage is very hard to diagnose, so surface it.
 */
if ( file_exists( __DIR__ . '/lib/style-handler/style-handler.php' ) ) {
    require_once __DIR__ . '/lib/style-handler/style-handler.php';
} else {
    add_action( 'admin_notices', 'progress_bars_missing_style_handler_notice' );
}

if ( ! function_exists( 'progress_bars_missing_style_handler_notice' ) ) :
/**
 * Admin notice shown when the style-handler runtime file is absent.
 *
 * The cause differs by context and so does the remedy, so name both rather than
 * guessing. A git checkout is missing an uninitialised submodule and is repaired
 * with git; an installed copy was packaged incomplete and can only be replaced.
 * Neither is fixed by rebuilding assets, so the notice must not suggest it.
 */
function progress_bars_missing_style_handler_notice() {
    if ( ! current_user_can( 'activate_plugins' ) ) {
        return;
    }

    echo '<div class="notice notice-error"><p><strong>' .
        esc_html__( 'Progress Bar', 'progress-bars' ) . ':</strong> ' .
        sprintf(
            /* translators: %s: path of the missing file, relative to the plugin directory. */
            esc_html__( 'the required file %s is missing, so block styles will not be applied on the frontend.', 'progress-bars' ),
            '<code>lib/style-handler/style-handler.php</code>'
        ) .
        '</p><p>' .
        esc_html__( 'It ships from a git submodule. In a development checkout, run this in the plugin directory:', 'progress-bars' ) .
        ' <code>git submodule update --init --recursive</code></p><p>' .
        esc_html__( 'If this is an installed copy of the plugin rather than a checkout, the package itself is incomplete — reinstall the official complete package.', 'progress-bars' ) .
        '</p></div>';
}
endif;

if ( ! function_exists( 'create_block_progress_bar_block_init' ) ) :
function create_block_progress_bar_block_init() {
    $dir = dirname( __FILE__ );

    if ( ! defined( 'PROGRESS_BARS_BLOCKS_VERSION' ) ) {
        define( 'PROGRESS_BARS_BLOCKS_VERSION', "1.3.0" );
    }
    if ( ! defined( 'PROGRESS_BARS_BLOCKS_ADMIN_URL' ) ) {
        define( 'PROGRESS_BARS_BLOCKS_ADMIN_URL', plugin_dir_url( __FILE__ ) );
    }
    if ( ! defined( 'PROGRESS_BARS_BLOCKS_ADMIN_PATH' ) ) {
        define( 'PROGRESS_BARS_BLOCKS_ADMIN_PATH', dirname( __FILE__ ) );
    }

    $script_asset_path = PROGRESS_BARS_BLOCKS_ADMIN_PATH . "/dist/index.asset.php";
    if ( ! file_exists( $script_asset_path ) ) {
        throw new Error(
            'You need to run `npm start` or `npm run build` for the "progress-bars/progress-bar-block" block first.'
        );
    }
    $index_js         = PROGRESS_BARS_BLOCKS_ADMIN_URL . 'dist/index.js';
    $script_asset     = require $script_asset_path;
    $all_dependencies = array_merge( $script_asset['dependencies'], [
        'wp-blocks',
        'wp-i18n',
        'wp-element',
        'wp-block-editor',
        'progress-bars-blocks-controls-util',
        'essential-blocks-eb-animation'
    ] );

    wp_register_script(
        'progress-bars-block-editor-js',
        $index_js,
        $all_dependencies,
        $script_asset['version']
    );

    $load_animation_js = PROGRESS_BARS_BLOCKS_ADMIN_URL . 'assets/js/eb-animation-load.js';
    wp_register_script(
        'essential-blocks-eb-animation',
        $load_animation_js,
        [],
        PROGRESS_BARS_BLOCKS_VERSION,
        true
    );

    $animate_css = PROGRESS_BARS_BLOCKS_ADMIN_URL . 'assets/css/animate.min.css';
    wp_register_style(
        'essential-blocks-animation',
        $animate_css,
        [],
        PROGRESS_BARS_BLOCKS_VERSION
    );

    $style_css      = PROGRESS_BARS_BLOCKS_ADMIN_URL . 'dist/style.css';
    $style_css_path = PROGRESS_BARS_BLOCKS_ADMIN_PATH . '/dist/style.css';
    // filemtime() emits a warning and returns false when the file is absent.
    $style_css_ver = file_exists( $style_css_path ) ? filemtime( $style_css_path ) : PROGRESS_BARS_BLOCKS_VERSION;
    wp_register_style(
        'progress-bars-block-frontend-style',
        $style_css,
        [ 'essential-blocks-animation' ],
        $style_css_ver
    );

    /**
     * `include_once` returns bool `true` if the file was already included earlier in
     * the request, which would make the array accesses below an offset-on-bool
     * warning under PHP 7.4+ / 8.x. Use `require` so the array is always returned.
     */
    $frontend_asset_path = PROGRESS_BARS_BLOCKS_ADMIN_PATH . '/dist/frontend/index.asset.php';
    if ( file_exists( $frontend_asset_path ) ) {
        $frontend_js_path = require $frontend_asset_path;
        $frontend_js      = "dist/frontend/index.js";
        wp_register_script(
            'eb-progress-bar-frontend',
            plugins_url( $frontend_js, __FILE__ ),
            isset( $frontend_js_path['dependencies'] ) ? $frontend_js_path['dependencies'] : [],
            isset( $frontend_js_path['version'] ) ? $frontend_js_path['version'] : PROGRESS_BARS_BLOCKS_VERSION,
            true
        );
    }

    if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/progress-bar' ) ) {
        register_block_type(
            Progress_Bar_Helper::get_block_register_path( 'progress-bars/progress-bar-block', PROGRESS_BARS_BLOCKS_ADMIN_PATH ),
            [
                'editor_script'   => 'progress-bars-block-editor-js',
                'editor_style'    => 'progress-bars-block-frontend-style',
                'style'           => 'progress-bars-block-frontend-style',
                'render_callback' => function ( $attribs, $content ) {
                    if ( ! is_admin() ) {
                        wp_enqueue_script( 'eb-progress-bar-frontend' );
                        wp_enqueue_script( 'essential-blocks-eb-animation' );
                    }
                    return $content;
                }
            ]
        );
    }
}
endif;

add_action( 'init', 'create_block_progress_bar_block_init', 99 );
