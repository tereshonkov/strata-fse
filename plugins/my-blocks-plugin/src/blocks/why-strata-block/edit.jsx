import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { kicker, title, lead } = attributes;
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
        <div className="why-strata-block__container">
          <div className="why-strata-block__head">
            <div className="why-strata-block__kicker">
              <span className="kicker">{kicker}</span>
            </div>
            <div className="why-strata-block__head-text">
              <RichText
                tagName="h2"
                className="why-strata-block__title"
                value={title}
                onChange={(val) => setAttributes({ title: val })}
                placeholder="Title..."
              />
              <RichText
                tagName="p"
                className="why-strata-block__lead"
                value={lead}
                onChange={(val) => setAttributes({ lead: val })}
                placeholder="Lead..."
              />
            </div>
          </div>
          {/* Превью карточок — статичне в редакторі */}
          <div className="why-strata-block__grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="why-strata-card" key={i}>
                <div className="why-strata-card__top">
                  <div className="why-strata-card__glyph" />
                </div>
                <h3>Commitment { i }</h3>
                <p>Why Strata description will be pulled from CPT on frontend.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
