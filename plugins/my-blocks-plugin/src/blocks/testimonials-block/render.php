<?php
$kicker = $attributes['kicker'] ?? '07 — Testimonials';
$title  = $attributes['title'] ?? 'What our clients say';

$testimonials = new WP_Query([
    'post_type'      => 'testimonial',
    'posts_per_page' => -1,
    'orderby'        => 'menu_order',
    'order'          => 'ASC',
    'post_status'    => 'publish',
]);
?>

<section class="testimonials-block" id="testimonials">
    <div class="testimonials-block__container">

        <div class="testimonials-block__head">
            <div class="testimonials-block__kicker">
                <span class="kicker"><?php echo esc_html( $kicker ); ?></span>
            </div>
            <div class="testimonials-block__head-text">
                <h2 class="testimonials-block__title"><?php echo esc_html( $title ); ?></h2>
            </div>
        </div>

        <div class="testi__stage" id="testi-stage">
            <?php
            $index = 0;
            while ( $testimonials->have_posts() ) :
                $testimonials->the_post();
                $active = $index === 0 ? ' is-active' : '';
            ?>
                <div class="testi__slide<?php echo $active; ?>" data-index="<?php echo $index; ?>">
                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="testi__avatar">
                            <?php the_post_thumbnail( 'thumbnail' ); ?>
                        </div>
                    <?php else : ?>
                        <div class="testi__avatar testi__avatar--placeholder"></div>
                    <?php endif; ?>
                    <div>
                        <div class="testi__quote"><?php the_content(); ?></div>
                        <div class="testi__who">
                            <b><?php the_title(); ?></b>
                            <span class="testi__sep"></span>
                            <span><?php echo esc_html( get_post_meta( get_the_ID(), 'project_type', true ) ); ?></span>
                        </div>
                    </div>
                </div>
            <?php
                $index++;
            endwhile;
            wp_reset_postdata();
            ?>
        </div>

        <div class="testi__nav">
            <button class="testi__arrow" id="testi-prev">←</button>
            <div class="testi__dots" id="testi-dots"></div>
            <button class="testi__arrow" id="testi-next">→</button>
        </div>

    </div>
</section>