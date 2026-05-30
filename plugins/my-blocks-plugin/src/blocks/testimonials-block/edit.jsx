import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { kicker, title } = attributes;
  const blockProps = useBlockProps();

  return (
    <>
      <InspectorControls>
        <PanelBody title="Settings">
          <TextControl
            label="Kicker"
            value={kicker}
            onChange={(val) => setAttributes({ kicker: val })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <div className="testimonials-block__container">
          <div className="testimonials-block__head">
            <div className="testimonials-block__kicker">
              <span className="kicker">{kicker}</span>
            </div>

            <div className="testimonials-block__head-text">
              <RichText
                tagName="h2"
                className="testimonials-block__title"
                value={title}
                onChange={(val) => setAttributes({ title: val })}
              />
            </div>
          </div>
          {/* Превью карусель в редакторі */}
          <div className="testimonials-block__preview">
            <div className="testi__slide testi__slide--preview">
              <div className="testi__avatar testi__avatar--placeholder" />
              <div>
                <p className="testi__quote">
                  Client testimonial will appear here
                </p>
                <div className="testi__who">
                  <b>Client Name</b>
                  <span className="testi__sep" />
                  <span>Project Type</span>
                </div>
              </div>
            </div>
            <div className="testi__nav">
              <button className="testi__arrow">←</button>
              <button className="testi__arrow">→</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
