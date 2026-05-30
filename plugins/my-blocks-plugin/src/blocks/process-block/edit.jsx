import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const { kicker, title, lead, steps } = attributes;
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div className="process-block__container">
        <div className="process-block__head">
          <div className="process-block__kicker">
            <span className="kicker">{kicker}</span>
          </div>
          <div className="process-block__head-text">
            <RichText
              tagName="h2"
              className="process-block__title"
              value={title}
              onChange={(val) => setAttributes({ title: val })}
              placeholder="Title..."
            />
            <RichText
              tagName="p"
              className="process-block__lead"
              value={lead}
              onChange={(val) => setAttributes({ lead: val })}
              placeholder="Lead..."
            />
          </div>
        </div>
        <div className="process-block__timeline">
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="process-step__dot">{step.number}</div>
              <RichText
                tagName="h4"
                value={step.title}
                onChange={(val) => {
                  const newSteps = steps.map((s, i) =>
                    i === index ? { ...s, title: val } : s,
                  );
                  setAttributes({ steps: newSteps });
                }}
              />
              <RichText
                tagName="p"
                value={step.description}
                onChange={(val) => {
                  const newSteps = steps.map((s, i) =>
                    i === index ? { ...s, description: val } : s,
                  );
                  setAttributes({ steps: newSteps });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
