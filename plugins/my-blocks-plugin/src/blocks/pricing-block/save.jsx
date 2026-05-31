import { useBlockProps, RichText } from "@wordpress/block-editor";
import Button from "../../components/Button";

export default function Save({ attributes }) {
  const { kicker, title, lead, price_items } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div className="pricing-block__container" id="pricing">
        <div className="pricing-block__head">
          <div className="pricing-block__kicker">
            <span className="kicker">{kicker}</span>
          </div>
          <div className="pricing-block__head-text">
            <RichText.Content
              tagName="h2"
              className="pricing-block__title"
              value={title}
            />
            <RichText.Content
              tagName="p"
              className="pricing-block__lead"
              value={lead}
            />
          </div>
        </div>
        <div className="pricing-block__grid">
          {price_items.map((item, index) => (
            <div className="pricing-block__item" key={index}>
              <div className="pricing-block__item-head">
                <div className="pricing-block__item-category">
                  <RichText.Content
                    tagName="h3"
                    className="pricing-block__item-category-title"
                    value={item.category}
                  />
                </div>
                <div className="pricing-block__item-price">
                  <RichText.Content
                    tagName="span"
                    className="pricing-block__item-price-value"
                    value={item.price}
                  />
                  <span className="pricing-block__item-price-suffix">
                    {" "}
                    / {item.suffix}
                  </span>
                </div>
                <div className="pricing-block__item-description">
                  <RichText.Content
                    tagName="p"
                    className="pricing-block__item-description-text"
                    value={item.description}
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
                <Button text={item.button_text} variant={item.button_variant} url={item.button_url} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}