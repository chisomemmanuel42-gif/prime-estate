import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="h2">Contact an Agent</h2>
        <p className="p">
          Tell us what you’re looking for—location, budget, and timeline.
        </p>

        <div className="contact-grid">
          {/* Left column: form (col-4 of 6 on desktop) */}
          <form className="contact-form">
            <input className="contact-input" placeholder="Full name" />
            <input className="contact-input" placeholder="Email" />
            <input className="contact-input" placeholder="Phone" />
            <textarea className="contact-input" style={{ height: "120px" }} placeholder="Message" />
            <button className="btn contact-button" type="submit">Send Message</button>
          </form>

          {/* Right column: info (col-2 of 6 on desktop) */}
          <div className="contact-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <p>+234 800 123 4567</p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <p>info@primeestates.com</p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <p>Victoria Island, Lagos, Nigeria</p>
            </div>

            <div className="socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}