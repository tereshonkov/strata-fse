const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
    ...defaultConfig,
    entry: {
        ...defaultConfig.entry(),
        'calculator-frontend': './src/blocks/calculator-block/frontend.jsx',
        'testimonials-frontend': './src/blocks/testimonials-block/frontend.js',
        'cta-frontend': './src/blocks/cta-block/frontend.js',
    },
};