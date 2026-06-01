import { useBlockProps, RichText } from '@wordpress/block-editor';
import Button from "../../components/Button";

export default function Save( { attributes } ) {
    const { tagline, title, subtitle, primaryButtonText, secondaryButtonText, phone } = attributes;
    const blockProps = useBlockProps.save({ className: 'hero-block alignfull' });

    return (
        <div { ...blockProps } className="hero-block" id="hero">
            <div className="hero-block__overlay" />
            <div className="hero-block__bg" />
            <div className="hero-block__content">
                <RichText.Content
                    tagName="span"
                    className="hero-block__tagline"
                    value={ tagline }
                />
                <RichText.Content
                    tagName="h1"
                    className="hero-block__title"
                    value={ title }
                />
                <RichText.Content
                    tagName="p"
                    className="hero-block__subtitle"
                    value={ subtitle }
                />
                <div className="hero-block__buttons">
                <Button url={ "#calculator" } text={ primaryButtonText } variant="primary" />
                <Button url={ "#portfolio" } text={ secondaryButtonText } variant="ghost" />
                </div>
            </div>
        </div>
    );
}