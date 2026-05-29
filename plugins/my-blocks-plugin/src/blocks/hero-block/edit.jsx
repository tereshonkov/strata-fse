import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import Button from "../../components/Button";

export default function Edit({ attributes, setAttributes }) {
  const {
    tagline,
    title,
    subtitle,
    primaryButtonText,
    secondaryButtonText,
    phone,
  } = attributes;
  const blockProps = useBlockProps({ className: 'hero-block alignfull' });

  return (
    <>
      <InspectorControls>
        <PanelBody title="Settings Hero">
          <TextControl
            label="Phone"
            value={phone}
            onChange={(val) => setAttributes({ phone: val })}
          />
          <TextControl
            label="Primary Button Text"
            value={primaryButtonText}
            onChange={(val) => setAttributes({ primaryButtonText: val })}
          />
          <TextControl
            label="Secondary Button Text"
            value={secondaryButtonText}
            onChange={(val) => setAttributes({ secondaryButtonText: val })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps} className="hero-block">
        <div className="hero-block__bg" /> 
        <div className="hero-block__overlay" /> 
        <div className="hero-block__content">
          <RichText
            tagName="span"
            className="hero-block__tagline"
            value={tagline}
            onChange={(val) => setAttributes({ tagline: val })}
            placeholder="Tagline..."
          />
          <RichText
            tagName="h1"
            className="hero-block__title"
            value={title}
            onChange={(val) => setAttributes({ title: val })}
            placeholder="Title..."
          />
          <RichText
            tagName="p"
            className="hero-block__subtitle"
            value={subtitle}
            onChange={(val) => setAttributes({ subtitle: val })}
            placeholder="Subtitle..."
          />
          <div className="hero-block__buttons">
          <Button text={ primaryButtonText } variant="primary" />
          <Button text={ secondaryButtonText } variant="ghost" />
          </div>
        </div>
      </div>
    </>
  );
}
