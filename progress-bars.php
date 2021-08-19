<?php
/**
 * Plugin Name:     Progress Bar
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Make your website interactive with stunning progress bar
 * Version:         1.1.1
 * Author:          WPDeveloper
 * Author URI: 		https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     progress-bars
 *
 * @package         progress-bars
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_progress_bar_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "progress-bars/progress-bar-block" block first.'
		);
	}
	$index_js     = 'build/index.js';
	wp_register_script(
		'create-block-progress-bar-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-block-editor',
			'wp-editor',
		),
		filemtime("$dir/$index_js")
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-progress-bar-block-editor',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-progress-bar-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	$progress_bar_js = 'assets/js/progress-bars.js';
	wp_register_script(
		'eb-progress-bar',
		plugins_url($progress_bar_js, __FILE__ ),
		array(),
		filemtime("$dir/$progress_bar_js"),
		true
	);


	if( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/progress-bar' ) ) {
    register_block_type( 'progress-bars/progress-bar-block', array(
      'editor_script' => 'create-block-progress-bar-block-editor',
      'editor_style'  => 'create-block-progress-bar-block-editor',
      'style'         => 'create-block-progress-bar-block',
			'render_callback' => function( $attribs, $content ) {
				if( !is_admin() ) {
					wp_enqueue_script( 'eb-progress-bar' );
				}
				return $content;
			}
    ));
  }
}

add_action( 'init', 'create_block_progress_bar_block_init' );
