<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Progress_Bar_Helper
{

    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }

    /**
     * Responsive breakpoints shared by the editor and the frontend.
     *
     * Mirrors EbStyleHandlerParseCss::get_responsive_breakpoints() — same option,
     * same defaults — so the media queries the editor renders match the ones the
     * style handler writes into the generated CSS file.
     *
     * @return array{tablet:int,mobile:int}
     */
    public static function get_responsive_breakpoints()
    {
        $defaults = array(
            'tablet' => 1024,
            'mobile' => 767,
        );

        $settings = get_option('eb_settings', array());
        if (!is_array($settings) || !isset($settings['responsiveBreakpoints'])) {
            return $defaults;
        }

        $breakpoints = $settings['responsiveBreakpoints'];
        if (is_string($breakpoints) && strlen($breakpoints) > 0) {
            $breakpoints = json_decode(html_entity_decode(stripslashes($breakpoints)), true);
        }
        if (is_object($breakpoints)) {
            $breakpoints = (array) $breakpoints;
        }
        if (!is_array($breakpoints)) {
            return $defaults;
        }

        return array(
            'tablet' => !empty($breakpoints['tablet']) ? absint($breakpoints['tablet']) : $defaults['tablet'],
            'mobile' => !empty($breakpoints['mobile']) ? absint($breakpoints['mobile']) : $defaults['mobile'],
        );
    }

    /**
     * Load fonts.
     *
     * @access public
     */
    public function enqueues($hook)
    {
        global $pagenow;

        /**
         * Only for admin add/edit pages/posts
         */
        $query_string = isset($_SERVER['QUERY_STRING']) ? sanitize_text_field(wp_unslash($_SERVER['QUERY_STRING'])) : '';

        if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php' || ($pagenow == 'themes.php' && !empty($query_string) && str_contains($query_string, 'gutenberg-edit-site'))) {

            /**
             * `include_once` returns bool `true` when the file was already included
             * earlier in the request, which turns the array reads below into
             * offset-on-bool warnings under PHP 7.4+ / 8.x. Use `require` instead.
             */
            $controls_asset_path = PROGRESS_BARS_BLOCKS_ADMIN_PATH . '/dist/modules.asset.php';
            if (!file_exists($controls_asset_path)) {
                return;
            }
            $controls_dependencies = require $controls_asset_path;

            $controls_deps    = isset($controls_dependencies['dependencies']) ? $controls_dependencies['dependencies'] : array();
            $controls_version = isset($controls_dependencies['version']) ? $controls_dependencies['version'] : PROGRESS_BARS_BLOCKS_VERSION;

            wp_register_script(
                "progress-bars-blocks-controls-util",
                PROGRESS_BARS_BLOCKS_ADMIN_URL . 'dist/modules.js',
                array_merge($controls_deps, ['lodash']),
                $controls_version,
                true
            );

            wp_localize_script('progress-bars-blocks-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
                /**
                 * The editor's StyleComponent builds its responsive media queries from
                 * EssentialBlocksLocalize.responsiveBreakpoints. Without this key it
                 * emitted `@media all and (max-width: undefinedpx)`, which browsers
                 * discard — so tablet and mobile styles silently did nothing in the
                 * editor while the frontend (which reads the same option in PHP)
                 * applied them. Same source, same defaults, so both now agree.
                 */
                'responsiveBreakpoints' => self::get_responsive_breakpoints(),
            ));

            if ($pagenow == 'post-new.php' || $pagenow == 'post.php') {
                wp_localize_script('progress-bars-blocks-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($pagenow == 'site-editor.php' || $pagenow == 'themes.php') {
                wp_localize_script('progress-bars-blocks-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-site'
                ));
            }

            wp_enqueue_style(
                'essential-blocks-editor-css',
                PROGRESS_BARS_BLOCKS_ADMIN_URL . '/dist/modules.css',
                array(),
                $controls_version,
                'all'
            );
        }
    }
    public static function get_block_register_path($blockname, $blockPath)
    {
        /**
         * Never cast a WP version to float: "6.10" casts to 6.1 and compares as
         * older than 6.8. Use version_compare() on the raw string instead.
         *
         * NOTE: with a declared floor of WP 6.0 this branch is now unreachable.
         * Left in place pending review rather than removed silently.
         */
        if (version_compare(get_bloginfo('version'), '5.8', '<')) {
            return $blockname;
        } else {
            return $blockPath;
        }
    }
}
Progress_Bar_Helper::register();
