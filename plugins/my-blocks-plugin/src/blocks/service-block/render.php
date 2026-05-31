<?php
$kicker = $attributes['kicker'] ?? '01 — Services';
$title  = $attributes['title'] ?? 'What we deliver';
$lead   = $attributes['lead'] ?? '';

// SVG іконки по типу
if ( ! function_exists( 'strata_get_service_icon' ) ) {
    function strata_get_service_icon( $type ) {
        $icons = [
            'diamond'  => '<polygon points="11,2 20,11 11,20 2,11"/>',
            'square'   => '<rect x="3" y="3" width="16" height="16"/>',
            'circle'   => '<circle cx="11" cy="11" r="8.5"/>',
            'triangle' => '<polygon points="11,3 20,19 2,19"/>',
        ];
        $shape = $icons[ $type ] ?? $icons['diamond'];
        return '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.4">' . $shape . '</svg>';
    }
}

// Тягнемо сервіси з CPT
/*
WP_Query — це WordPress клас для запитів до БД. Передаємо параметри — він повертає пости. posts_per_page: -1 означає всі записи.
 */
$services = new WP_Query([
    'post_type'      => 'service',
    'posts_per_page' => -1,
    'orderby'        => 'menu_order',
    'order'          => 'ASC',
    'post_status'    => 'publish',
]);
?>

<section class="services-block" id="services">
    <div class="services-block__container">

        <div class="services-block__head">
            <div>
            <span class="kicker"><?php echo esc_html( $kicker ); ?></span>
            </div>
            <div class="services-block__head-text">
                <h2 class="services-block__title"><?php echo esc_html( $title ); ?></h2>
                <p class="services-block__lead"><?php echo esc_html( $lead ); ?></p>
            </div>
        </div>

        <div class="services-block__grid">
            <?php
            $counter = 1;
            /*
            while ( $services->have_posts() ) : $services->the_post(); — стандартний WordPress loop. have_posts() перевіряє чи є ще записи, the_post() підготовлює поточний.
            */
            while ( $services->have_posts() ) :
                $services->the_post();
                $icon_type = get_post_meta( get_the_ID(), 'icon_type', true ) ?: 'diamond';
            ?>
                <article class="service-card">
                    <div class="service-card__top">
                        <div class="service-card__glyph">
                            <?php echo strata_get_service_icon( $icon_type ); ?>
                        </div>
                        <span class="service-card__no">
                            <?php echo str_pad( $counter, 2, '0', STR_PAD_LEFT ); ?>
                        </span>
                    </div>
                    <h3><?php the_title(); ?></h3>
                    <p><?php the_excerpt(); ?></p>
                    <a class="tlink" href="<?php the_permalink(); ?>">
                        Learn more
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                            <line x1="2" y1="8" x2="13" y2="8"/>
                            <polyline points="8.5,3.5 13.5,8 8.5,12.5"/>
                        </svg>
                    </a>
                </article>
            <?php
                $counter++;
            endwhile;
            /*
            wp_reset_postdata() — обов'язково після кастомного WP_Query. Скидає глобальний $post назад до поточної сторінки, інакше інші блоки можуть отримати неправильні дані.
            */
            wp_reset_postdata();
            ?>
        </div>

    </div>
</section>