import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import Button from "../../components/Button";

export default function Edit( { attributes, setAttributes } ) {
    const { phone, ctaText } = attributes;
    const blockProps = useBlockProps( { className: 'header-block alignfull' } );

    return (
        <>
            <InspectorControls>
                <PanelBody title="Налаштування Header">
                    <TextControl
                        label="Телефон"
                        value={ phone }
                        onChange={ ( val ) => setAttributes( { phone: val } ) }
                    />
                    <TextControl
                        label="Текст CTA кнопки"
                        value={ ctaText }
                        onChange={ ( val ) => setAttributes( { ctaText: val } ) }
                    />
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps }>
                <nav className="nav">
                    <div className="brand">
                        <span className="brand__mark"></span>
                        <span>STRATA<small>Construction & Interiors</small></span>
                    </div>
                    <ul className="nav__menu">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="nav__cta">
                        <span className="nav__phone">{ phone }</span>
                        <Button text={ ctaText } variant="primary" />
                    </div>
                </nav>
            </div>
        </>
    );
}