import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { kicker, title, lead } = attributes;
  const blockProps = useBlockProps({ className: "services-block" });

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
        <div className="services-block__container">
          <div className="services-block__head">
            <div>
              <span className="kicker">{kicker}</span>
            </div>
            <div className="services-block__head-text">
              <RichText
                tagName="h2"
                className="services-block__title"
                value={title}
                onChange={(val) => setAttributes({ title: val })}
                placeholder="Section title..."
              />
              <RichText
                tagName="p"
                className="services-block__lead"
                value={lead}
                onChange={(val) => setAttributes({ lead: val })}
                placeholder="Lead text..."
              />
            </div>
          </div>

          {/* Превью карточок — статичне в редакторі */}
          <div className="services-block__grid">
            {[1, 2, 3, 4].map((i) => (
              <div className="service-card" key={i}>
                <div className="service-card__top">
                  <div className="service-card__glyph" />
                  <span className="service-card__no">0{i}</span>
                </div>
                <h3>Service {i}</h3>
                <p>Service description will be pulled from CPT on frontend.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
