<?php
$kicker = $attributes['kicker'] ?? '03 — Portfolio';
$title  = $attributes['title'] ?? 'Selected projects';

// Всі категорії
$categories = get_terms([
    'taxonomy'   => 'project_category',
    'hide_empty' => false,
]);

// Всі проекти
$projects = new WP_Query([
    'post_type'      => 'project',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
]);
?>

<section class="portfolio-block">
    <div class="portfolio-block__container">

        <div class="portfolio-block__head">
            <div class="portfolio-block__kicker">
                <span class="kicker"><?php echo esc_html($kicker); ?></span>
            </div>
            <div class="portfolio-block__head-bottom">
                <h2 class="portfolio-block__title"><?php echo esc_html($title); ?></h2>

                <!-- Фільтр кнопки з таксономії -->
                <div class="portfolio-block__filters">
                    <button class="filter-btn filter-btn--active" data-filter="all">
                        All
                    </button>
                    <?php foreach ($categories as $cat) : ?>
                        <button class="filter-btn" data-filter="<?php echo esc_attr($cat->slug); ?>">
                            <?php echo esc_html($cat->name); ?>
                        </button>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

        <!-- Сітка проектів -->
        <div class="portfolio-block__grid">
            <?php while ($projects->have_posts()) : $projects->the_post();
                // Отримуємо категорії цього проекту
                $project_cats = get_the_terms(get_the_ID(), 'project_category');
                $cat_slugs = $project_cats
                    ? implode(' ', wp_list_pluck($project_cats, 'slug'))
                    : '';
            ?>
                <article class="project-card" data-category="<?php echo esc_attr($cat_slugs); ?>">
                    <div class="project-card__image">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                    <div class="project-card__veil">
                        <?php if ($project_cats) : ?>
                            <div class="project-card__cat">
                                <?php echo esc_html($project_cats[0]->name); ?>
                            </div>
                        <?php endif; ?>
                        <div class="project-card__name"><?php the_title(); ?></div>
                        <div class="project-card__meta"><?php the_excerpt(); ?></div>
                    </div>
                    <span class="project-card__tag"><?php the_excerpt(); ?></span>
                </article>
            <?php endwhile;
            wp_reset_postdata(); ?>
        </div>

    </div>
</section>

<!-- JavaScript для фільтра -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const btns = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.project-card');

        btns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;

                // Активна кнопка
                btns.forEach(b => b.classList.remove('filter-btn--active'));
                this.classList.add('filter-btn--active');

                // Показуємо/ховаємо карточки
                cards.forEach(card => {
                    if (filter === 'all' || card.dataset.category.includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    });
</script>