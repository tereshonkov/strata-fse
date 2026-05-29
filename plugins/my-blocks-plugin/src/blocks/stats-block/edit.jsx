import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const { stats } = attributes;
  const blockProps = useBlockProps();
  return (
    <div {...blockProps}>
      <div className="stats-block__container">
        <div className="stats-block__grid">
          {stats.map((stat, index) => (
            <div className="stats-block__item" key={index}>
              <div className="stats-block__num-container">
                <RichText
                  tagName="div"
                  className="stats-block__num"
                  value={stat.value}
                  onChange={(val) => {
                    const newStats = stats.map((s, i) =>
                      i === index ? { ...s, value: val } : s,
                    );
                    setAttributes({ stats: newStats });
                  }}
                  placeholder="Value..."
                />
                {stat.suffix && <em>{stat.suffix}</em>}
              </div>
              <RichText
                tagName="div"
                className="stats-block__label"
                value={stat.label}
                onChange={(val) => {
                  const newStats = stats.map((s, i) =>
                    i === index ? { ...s, value: val } : s,
                  );
                  setAttributes({ stats: newStats });
                }}
                placeholder="Label..."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
