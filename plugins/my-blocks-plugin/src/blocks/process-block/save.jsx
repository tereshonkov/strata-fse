import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { kicker, title, lead, steps } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div className="process-block__container">
        <div className="process-block__head">
          <div className="process-block__kicker">
            <span className="kicker">{kicker}</span>
          </div>
          <div className="process-block__head-text">
            <RichText.Content
              tagName="h2"
              className="process-block__title"
              value={title}
            />
            <RichText.Content
              tagName="p"
              className="process-block__lead"
              value={lead}
            />
          </div>
        </div>
        <div className="process-block__timeline">
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="process-step__dot">{step.number}</div>
              <RichText.Content tagName="h4" value={step.title} />
              <RichText.Content tagName="p" value={step.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
