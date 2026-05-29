<?php
/**
 * Plugin Name: My Blocks Plugin
 * Description: Custom Gutenberg blocks for construction landing
 * Version: 1.0.0
 * Author: Your Name
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function my_blocks_register_blocks() {
    register_block_type( __DIR__ . '/src/blocks/hero-block' );
    register_block_type( __DIR__ . '/src/blocks/header-block' );
    register_block_type( __DIR__ . '/src/blocks/stats-block' );
}
add_action( 'init', 'my_blocks_register_blocks' );

function my_blocks_enqueue_fonts() {
    wp_enqueue_style(
        'strata-fonts',
        'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
        array(),
        null
    );
}
add_action( 'enqueue_block_assets', 'my_blocks_enqueue_fonts' );

function my_blocks_register_menus() {
    register_nav_menus([
        'primary' => 'Primary Navigation',
    ]);
}
add_action( 'after_setup_theme', 'my_blocks_register_menus' );