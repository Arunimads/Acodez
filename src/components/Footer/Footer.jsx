// Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Curved top section */}
      <div className="footer-curve">
        <svg
          viewBox="100 0 1240 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="curve-svg"
        >
          <path
            d="M0 200V80C200 20 400 0 600 40C800 80 1000 120 1200 80C1300 60 1370 40 1440 20V200H0Z"
            fill="#f1f5f9"
          />
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-container">
          {/* left side */}
          <div>
            <img src="./src/assets/images/footer-triangle.png" />
          </div>
          {/* Right side - Company info and navigation */}
          <div className="footer-right">
            <div className="footer-logo-section">
              <div className="footer-logo">
                <div className="logo-icon">
                  <img src="./src/assets/images/footer-logo.png" />
                </div>
              </div>

              <p className="footer-description">
                On track to achieve ISO 27001, ISO 14001,
                <br />
                and SOC 2 for operational excellence.
              </p>
            </div>

            <nav className="footer-nav">
              <div className="nav-row">
                <a href="#services">SERVICES</a>
                <a href="#case-studies">CASE STUDIES</a>
                <a href="#blog">BLOG</a>
                <a href="#about">ABOUT</a>
              </div>
              <div className="nav-row">
                <a href="#sustainability">SUSTAINABILITY</a>
                <a href="#contact">CONTACT</a>
              </div>
            </nav>

            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin" style={{ fontSize: "24px" }}></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter-x" style={{ fontSize: "24px" }}></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook" style={{ fontSize: "24px" }}></i>
              </a>
              <a href="#" aria-label="Instagram">
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
