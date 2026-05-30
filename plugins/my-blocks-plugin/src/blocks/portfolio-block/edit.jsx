import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { kicker, title } = attributes;
  const blockProps = useBlockProps({ className: "portfolio-block" });

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
        <div className="portfolio-block__container">
          <div className="portfolio-block__head">
            <div className="portfolio-block__kicker">
              <span className="kicker">{kicker}</span>
            </div>
            <div className="portfolio-block__head-bottom">
              <RichText
                tagName="h2"
                value={title}
                onChange={(val) => setAttributes({ title: val })}
                placeholder="Title..."
              />
              {/* Превью фільтра — статичний в редакторі */}
              <div className="portfolio-block__filters">
                <button className="filter-btn filter-btn--active">All</button>
                <button className="filter-btn">Apartments</button>
                <button className="filter-btn">Houses</button>
                <button className="filter-btn">Commercial</button>
              </div>
            </div>
          </div>

          {/* Превью сітки */}
          <div className="portfolio-block__grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="project-card project-card--placeholder" key={i}>
                <span>Project {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
