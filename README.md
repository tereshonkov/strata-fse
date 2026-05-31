# STRATA — Custom Gutenberg Blocks Plugin

A production-ready WordPress plugin built for a construction & interiors landing page. Demonstrates custom FSE block development with React, dynamic PHP rendering, CPT integration, and interactive frontend components.

---

## Live Demo

> Coming soon — deploying to production host

---

## Blocks Overview

### Static Blocks
| Block | Description |
|-------|-------------|
| `hero-block` | Full-screen hero with background image, overlay, RichText title and CTA buttons |
| `stats-block` | Animated counters grid with editable values and suffixes |
| `process-block` | 4-step horizontal timeline with numbered dots |
| `pricing-block` | 3-tier pricing cards with feature lists, "Most Popular" badge and CTA buttons |
| `footer-block` | Multi-column footer with navigation links, social icons and copyright |

### Dynamic Blocks (PHP rendered)
| Block | Description |
|-------|-------------|
| `header-block` | Fixed navigation with logo, `wp_nav_menu()` integration and phone CTA |
| `services-block` | Service cards pulled from `service` CPT with SVG icons via post meta |
| `portfolio-block` | Project grid with category filter powered by `project_category` taxonomy |
| `why-strata-block` | Feature cards pulled from `why-strata` CPT with custom SVG glyphs |
| `testimonials-block` | Carousel pulled from `testimonial` CPT with vanilla JS navigation |
| `cta-block` | Contact form with WordPress AJAX, nonce verification and `wp_mail()` delivery |

### Interactive Blocks (React on frontend)
| Block | Description |
|-------|-------------|
| `calculator-block` | Price estimator with area slider, scope tabs and material grade multipliers — React state via `viewScript` |

---

## Custom Post Types

| CPT | Fields | Used in |
|-----|--------|---------|
| `service` | title, excerpt, `icon_type` meta | Services block |
| `project` | title, excerpt, thumbnail, `project_category` taxonomy | Portfolio block |
| `why-strata` | title, excerpt, `icon_type` meta | Why STRATA block |
| `testimonial` | title, content, thumbnail, `project_type` meta | Testimonials block |

---

## Tech Stack

- **WordPress FSE** — custom block theme with `theme.json` design tokens
- **Gutenberg / React** — `@wordpress/scripts`, `@wordpress/element`, `@wordpress/block-editor`
- **PHP** — dynamic blocks, `WP_Query`, CPT registration, AJAX handlers
- **SCSS / BEM** — component-scoped styles, CSS custom properties, responsive grid
- **Vanilla JS** — testimonials carousel, portfolio filter
- **Webpack** — custom entry points for frontend React and JS bundles

---

## Architecture
my-blocks-plugin/
├── src/
│   ├── blocks/
│   │   ├── hero-block/          # edit.jsx · save.jsx · style.scss · block.json
│   │   ├── header-block/        # edit.jsx · render.php · style.scss
│   │   ├── calculator-block/    # edit.jsx · render.php · frontend.jsx
│   │   └── ...
│   └── styles/
│       └── variables.scss
├── webpack.config.js
└── my-blocks-plugin.php
strata-theme/
├── style.css                    # Global design tokens + button styles
├── theme.json                   # FSE layout settings
├── functions.php                # Editor styles + theme setup
└── templates/
└── front-page.html

---

## Design System

All design tokens are defined in `strata-theme/style.css` and available globally:

```css
--gold: #C9A24B
--bg-0: #0E1012   /* Deepest background */
--bg-1: #16181C   /* Section background */
--white: #F3F2EE
--mono: "JetBrains Mono"
--sans: "Archivo"
```

---

## Getting Started

### Requirements
- WordPress 6.4+
- Node.js 18+
- PHP 8.0+

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/tereshonkov/strata-fse.git

# 2. Copy plugin to WordPress
cp -r plugin/ /wp-content/plugins/my-blocks-plugin

# 3. Copy theme to WordPress
cp -r theme/ /wp-content/themes/strata-theme

# 4. Install dependencies and build
cd /wp-content/plugins/my-blocks-plugin
npm install
npm run build

# 5. Activate theme and plugin in WordPress admin
```

### Development

```bash
npm run start   # Watch mode — rebuilds on save
npm run build   # Production build
```

---

## Key Patterns Demonstrated

- **Static vs Dynamic blocks** — `save.jsx` for static content, `render.php` for data from DB
- **Custom Post Types** — registering CPTs and taxonomies in PHP, querying with `WP_Query`
- **React on frontend** — `viewScript` entry point, reading `data-*` attributes from PHP
- **WordPress AJAX** — form submission with `wp_ajax_*` hooks, nonce verification, `wp_mail()`
- **FSE Theme** — minimal block theme with `theme.json`, `functions.php`, `add_editor_style()`
- **Design tokens** — CSS custom properties defined in theme, consumed across all blocks

---

## Author

Built by [Dmytro Tereshonkov](https://github.com/tereshonkov) as a portfolio project demonstrating WordPress FSE and Gutenberg block development.