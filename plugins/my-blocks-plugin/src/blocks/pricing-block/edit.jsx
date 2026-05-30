import { useBlockProps, RichText } from "@wordpress/block-editor";
import Button from "../../components/Button";

export default function Edit({ attributes, setAttributes }) {
  const { kicker, title, lead, price_items } = attributes;
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div className="pricing-block__container">
        <div className="pricing-block__head">
          <div className="pricing-block__kicker">
            <span className="kicker">{kicker}</span>
          </div>
          <div className="pricing-block__head-text">
            <RichText
              tagName="h2"
              className="pricing-block__title"
              value={title}
              onChange={(val) => setAttributes({ title: val })}
            />
            <RichText
              tagName="p"
              className="pricing-block__lead"
              value={lead}
              onChange={(val) => setAttributes({ lead: val })}
            />
          </div>
        </div>
        <div className="pricing-block__grid">
          {price_items.map((item, index) => (
            <div className="pricing-block__item" key={index}>
              <div className="pricing-block__item-head">
                <div className="pricing-block__item-category">
                  <RichText
                    tagName="h3"
                    className="pricing-block__item-category-title"
                    value={item.category}
                    onChange={(val) => {
                      const newItems = price_items.map((item, i) =>
                        i === index ? { ...item, category: val } : item,
                      );
                      setAttributes({ price_items: newItems });
                    }}
                  />
                </div>
                <div className="pricing-block__item-price">
                  <RichText
                    tagName="span"
                    className="pricing-block__item-price-value"
                    value={item.price}
                    onChange={(val) => {
                      const newItems = price_items.map((item, i) =>
                        i === index ? { ...item, price: val } : item,
                      );
                      setAttributes({ price_items: newItems });
                    }}
                  />
                  <span className="pricing-block__item-price-suffix">
                    {" "}
                    / {item.suffix}
                  </span>
                </div>
                <div className="pricing-block__item-description">
                  <RichText
                    tagName="p"
                    className="pricing-block__item-description-text"
                    value={item.description}
                    onChange={(val) => {
                      const newItems = price_items.map((item, i) =>
                        i === index ? { ...item, description: val } : item,
                      );
                      setAttributes({ price_items: newItems });
                    }}
                  />
                </div>
                <div className="pricing-block__item-features">
                  <ul className="pricing-block__item-features-list">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <span className="pricing-block__item-feature-check">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  text={item.button_text}
                  url={item.button_url}
                  variant={item.button_variant}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
