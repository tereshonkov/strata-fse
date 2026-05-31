import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
  const {
    lead,
    logo,
    copyright,
    companyLinks,
    servicesLinks,
    contactLinks,
    socialLinks,
  } = attributes;
  const blockProps = useBlockProps.save({ className: "footer-block" });

  return (
    <div {...blockProps}>
      <div className="footer-block__container" id="footer">
        <div className="footer-block__head">
          <div className="footer-block__lead-container">
            <div className="brand">
              <span className="brand__mark"></span>
              <span>
                STRATA<small>Construction & Interiors</small>
              </span>
            </div>
            <RichText.Content
              tagName="p"
              className="footer-block__lead"
              value={lead}
            />
          </div>
          <div className="footer-block__links-container">
            <h5 className="footer-block__col-title">Company</h5>
            <ul className="footer-block__links-list">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="footer-block__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-block__services-container">
            <h5 className="footer-block__col-title">Services</h5>
            <ul className="footer-block__services-list">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="footer-block__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-block__contact-container">
            <h5 className="footer-block__col-title">Contact</h5>
            <ul className="footer-block__contact-list">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="footer-block__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-block__bottom">
          <p className="footer-block__copyright">{copyright}</p>
          <ul className="footer-block__social-list">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="footer-block__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
