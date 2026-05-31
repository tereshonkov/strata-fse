import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import './style.scss';

registerBlockType( metadata.name, {
    edit: Edit,
    save: () => null,
} );

/*
render.php     → HTML форма + nonce + data-email
plugin.php     → AJAX обробник + локалізація скрипта
block.json     → viewScript
webpack.config → нова точка входу
frontend.js    → fetch до admin-ajax.php
*/