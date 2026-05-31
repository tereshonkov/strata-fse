import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import Button from "../../components/Button";

export default function Edit({ attributes, setAttributes }) {
  const { kicker, title, lead, buttonText, recipientEmail } = attributes;
  const blockProps = useBlockProps({ className: "cta-block" });

  return (
    <>
      <InspectorControls>
        <PanelBody title="Settings">
          <TextControl
            label="Kicker"
            value={kicker}
            onChange={(val) => setAttributes({ kicker: val })}
          />
          <TextControl
            label="Button Text"
            value={buttonText}
            onChange={(val) => setAttributes({ buttonText: val })}
          />
          <TextControl
            label="Recipient Email"
            value={recipientEmail}
            onChange={(val) => setAttributes({ recipientEmail: val })}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <div className="cta-block__container">
          <div className="cta-block__head">
            <div className="cta-block__kicker">
              <span className="kicker">{kicker}</span>
            </div>
            <div className="cta-block__head-text">
              <RichText
                tagName="h2"
                className="cta-block__title"
                value={title}
                onChange={(val) => setAttributes({ title: val })}
              />
              <RichText
                tagName="p"
                className="cta-block__lead"
                value={lead}
                onChange={(val) => setAttributes({ lead: val })}
              />
            </div>
          </div>
          <div className="cta-block__form">
            <form 
            className="cta-block__form-wrap" 
            id="strata-contact-form"
            onSubmit={(e) => e.preventDefault()}
            >
              <div className="cta-block__form-fields">
                <input
                  className="cta-block__form-field"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <input
                  className="cta-block__form-field"
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  required
                />
              </div>
              <Button
                text={buttonText}
                variant="primary"
              />
              <p className="cta-block__form-note">
                By submitting you agree to our{" "}
                <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
