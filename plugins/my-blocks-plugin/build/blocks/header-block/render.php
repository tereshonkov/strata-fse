<?php
$phone   = $attributes['phone'] ?? '+1 (415) 555-0148';
$cta     = $attributes['ctaText'] ?? 'Get an Estimate';
?>

<header class="header alignfull" id="header">
    <nav class="nav">

        <div class="brand">
            <span class="brand__mark"></span>
            <span>STRATA<small>Construction &amp; Interiors</small></span>
        </div>

        <?php
        wp_nav_menu([
            'theme_location' => 'primary',
            'container'      => false,
            'menu_class'     => 'nav__menu',
            'fallback_cb'    => false,
        ]);
        ?>

        <div class="nav__cta">
            <span class="nav__phone"><?php echo esc_html( $phone ); ?></span>
            <button class="btn btn--gold">
                <?php echo esc_html( $cta ); ?>
            </button>
        </div>

    </nav>
</header>