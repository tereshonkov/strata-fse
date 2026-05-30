<?php
$kicker = $attributes['kicker'] ?? '06 — Why Strata';
$title  = $attributes['title'] ?? 'Built on guarantees, not promises';
$lead   = $attributes['lead'] ?? '';

if (! function_exists('strata_get_why_strata_icon')) {
    function strata_get_why_strata_icon($type)
    {
        $icons = [
            'diamond'  => '<polygon points="11,2 20,11 11,20 2,11"/>',
            'circle'   => '<circle cx="11" cy="11" r="8.5"/>',
            'square'   => '<rect x="3" y="3" width="16" height="16"/>',
            'triangle' => '<polygon points="11,3 20,19 2,19"/>',
            'document' => '<rect x="4" y="3" width="14" height="16"/><line x1="7" y1="8" x2="15" y2="8"/><line x1="7" y1="12" x2="13" y2="12"/>',
            'target'   => '<circle cx="11" cy="11" r="8.5"/><circle cx="11" cy="11" r="3.5"/>',
        ];
        $shape = $icons[$type] ?? $icons['diamond'];
        return '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.4">' . $shape . '</svg>';
    }
}

$why_strata = new WP_Query([
    'post_type'      => 'why-strata',
    'posts_per_page' => -1,
    'orderby'        => 'menu_order',
    'order'          => 'ASC',
    'post_status'    => 'publish',
]);
?>

<section class="why-strata-block">
    <div class="why-strata-block__container">

        <div class="why-strata-block__head">
            <div class="why-strata-block__kicker">
                <span class="kicker"><?php echo esc_html($kicker); ?></span>
            </div>
            <div class="why-strata-block__head-text">
                <h2 class="why-strata-block__title"><?php echo esc_html($title); ?></h2>
                <p class="why-strata-block__lead"><?php echo esc_html($lead); ?></p>
            </div>
        </div>

        <div class="why-strata-block__grid">
            <?php
            while ( $why_strata->have_posts() ) : 
            $why_strata->the_post();
            $icon_type = get_post_meta( get_the_ID(), 'icon_type', true ) ?: 'diamond';
            ?>
            <article class="why-strata-card">
                <div class="why-strata-card__top">
                    <div class="why-strata-card__glyph">
                        <?php echo strata_get_why_strata_icon( $icon_type ); ?>
                    </div>
                </div>
                <h3><?php the_title(); ?></h3>
                <p><?php the_excerpt(); ?></p>
            </article>
            <?php
            endwhile;
            wp_reset_postdata();
            ?>
        </div>
    </div>
</section>