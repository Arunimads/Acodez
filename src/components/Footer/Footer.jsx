import SectionHeader from "../ui/header/SectionHeader";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-curve">
        <svg viewBox="100 0 1240 50" fill="none" className="curve-svg">
          <path d="M0 200V80C200 20 400 0 600 40C800 80 1000 120 1200 80C1300 60 1370 40 1440 20V200H0Z" fill="#f1f5f9" />
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-container">
          <div>
            <img src="./src/assets/images/footer-triangle.png" />
          </div>
          <div className="footer-right">
            <div className="footer-logo-section">
              <div className="footer-logo">
                <div className="logo-icon">
                  <img src="./src/assets/images/footer-logo.png" />
                </div>
              </div>
              <p className="footer-description">On track to achieve ISO 27001, ISO 14001, and SOC 2 for operational excellence.</p>
            </div>

            <nav className="footer-nav">
              <div className="nav-row">
                <a href="#services">SERVICES</a>
                <a href="#case-studies">CASE STUDIES</a>
                <a href="#blog">BLOG</a>
                <a href="#about">ABOUT</a>
                <a href="#sustainability">SUSTAINABILITY</a>
                <a href="#contact">CONTACT</a>
              </div>
            </nav>

            <div className="social-links">
              <a aria-label="LinkedIn">
                <i className="bi bi-linkedin" style={{ fontSize: "24px" }}></i>
              </a>
              <a>
                <svg width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
              <a>
                <i className="bi bi-facebook" style={{ fontSize: "24px" }}></i>
              </a>
              <a>
                <i className="bi bi-instagram" style={{ fontSize: "24px" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
