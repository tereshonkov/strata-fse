import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const { stats } = attributes;
  const blockProps = useBlockProps.save();
  return (
    <div {...blockProps} className="stats-block">
      <div className="stats-block__container">
        <div className="stats-block__grid">
          {stats.map((stat, index) => (
            <div className="stats-block__item" key={index}>
              <div className="stats-block__num-container">
                <RichText.Content
                  tagName="div"
                  className="stats-block__num"
                  value={stat.value}
                />
                {stat.suffix && <em>{stat.suffix}</em>}
              </div>
              <RichText.Content
                tagName="div"
                className="stats-block__label"
                value={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
