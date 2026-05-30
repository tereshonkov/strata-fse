<?php
// Реєстрація стилів редактора
function strata_theme_setup() {
    add_editor_style( 'style.css' );
}
add_action( 'after_setup_theme', 'strata_theme_setup' );

// Реєстрація стилів
function strata_theme_enqueue_styles() {
    wp_enqueue_style(
        'strata-theme-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'strata_theme_enqueue_styles' );