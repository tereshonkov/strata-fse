<?php

/**
 * Plugin Name: My Blocks Plugin
 * Description: Custom Gutenberg blocks for construction landing
 * Version: 1.0.0
 * Author: Your Name
 */

if (! defined('ABSPATH')) {
    exit;
}

//Реєстрація блоків
function my_blocks_register_blocks()
{
    register_block_type(__DIR__ . '/src/blocks/hero-block');
    register_block_type(__DIR__ . '/src/blocks/header-block');
    register_block_type(__DIR__ . '/src/blocks/stats-block');
    register_block_type(__DIR__ . '/src/blocks/service-block');
    register_block_type(__DIR__ . '/src/blocks/process-block');
    register_block_type(__DIR__ . '/src/blocks/portfolio-block');
    register_block_type(__DIR__ . '/src/blocks/pricing-block');
    register_block_type(__DIR__ . '/src/blocks/calculator-block');
    register_block_type(__DIR__ . '/src/blocks/why-strata-block');
    register_block_type(__DIR__ . '/src/blocks/testimonials-block');
}
add_action('init', 'my_blocks_register_blocks');

//Реєстрація шрифтів
function my_blocks_enqueue_fonts()
{
    wp_enqueue_style(
        'strata-fonts',
        'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
        array(),
        null
    );
}
add_action('enqueue_block_assets', 'my_blocks_enqueue_fonts');

//Реєстрація меню
function my_blocks_register_menus()
{
    register_nav_menus([
        'primary' => 'Primary Navigation',
    ]);
}
add_action('after_setup_theme', 'my_blocks_register_menus');


//Реєстрація типа постов Services
function my_blocks_register_post_types()
{
    register_post_type('service', [
        'labels' => [
            'name'          => 'Services',
            'singular_name' => 'Service',
            'add_new_item'  => 'Add New Service',
        ],
        'public'       => true,
        'show_in_rest' => true,
        'supports'     => ['title', 'excerpt', 'custom-fields'],
        'menu_icon'    => 'dashicons-hammer',
    ]);

    // Мета поле для іконки
    register_post_meta('service', 'icon_type', [
        'show_in_rest' => true,
        'single'       => true,
        'type'         => 'string',
        'default'      => 'diamond',
    ]);

    //Реєстрація типа постов Projects
    register_post_type('project', [
        'labels' => [
            'name'          => 'Projects',
            'singular_name' => 'Project',
            'add_new_item'  => 'Add New Project',
        ],
        'public'       => true,
        'show_in_rest' => true,
        'supports'     => ['title', 'excerpt', 'thumbnail'],
        'menu_icon'    => 'dashicons-portfolio',
    ]);

    //Реєстрація категорій проектів
    register_taxonomy('project_category', 'project', [
        'labels' => [
            'name'          => 'Project Categories',
            'singular_name' => 'Project Category',
        ],
        'public'       => true,
        'show_in_rest' => true,
        'hierarchical' => true,
    ]);

    //Реєстрація типа постов Why Strata
    register_post_type('why-strata', [
        'labels' => [
            'name'          => 'Why Strata',
            'singular_name' => 'Why Strata',
            'add_new_item'  => 'Add New Why Strata',
        ],
        'public'       => true,
        'show_in_rest' => true,
        'supports'     => ['title', 'excerpt', 'custom-fields'],
        'menu_icon'    => 'dashicons-shield-alt',
    ]);

    // Мета поле для іконки
    register_post_meta('why-strata', 'icon_type', [
        'show_in_rest' => true,
        'single'       => true,
        'type'         => 'string',
        'default'      => 'diamond',
    ]);

    //Реєстрація типа постов Testimonials
    register_post_type( 'testimonial', [
        'labels' => [
            'name'          => 'Testimonials',
            'singular_name' => 'Testimonial',
            'add_new_item'  => 'Add New Testimonial',
        ],
        'public'       => true,
        'show_in_rest' => true,
        'supports'     => [ 'title', 'editor', 'thumbnail', 'custom-fields' ],
        'menu_icon'    => 'dashicons-format-quote',
    ]);

    register_post_meta( 'testimonial', 'project_type', [
        'show_in_rest' => true,
        'single'       => true,
        'type'         => 'string',
        'default'      => '',
    ]);
}
add_action('init', 'my_blocks_register_post_types');
