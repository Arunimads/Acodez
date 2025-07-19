import React from "react";

const Certifications = () => {
  return (
    <section className="certifications-section">
      <div className="cert-container">
        <div className="cert-left">
          <p className="cert-subtitle">CERTIFICATIONS</p>
          <h2 className="cert-title">
            Building Trust With Industry Standards.
          </h2>

          <div className="cert-box">
            <div className="cert-icon">
              <img
                src="./src/assets/images/certificate-symbol.png"
                alt="ISO 14001"
              />
            </div>
            <div className="cert-text">
              <h4>ISO 14001:</h4>
              <p>
                Committed To Net Zero Emissions By 2025, Reflecting Our
                Dedication To Sustainable Practices.
              </p>
            </div>
          </div>

          <div className="cert-box cert-box-bottom">
            <div className="cert-icon">
              <img
                src="./src/assets/images/certificate-symbol.png"
                alt="ISO 27001"
              />
            </div>
            <div className="cert-text">
              <h4>ISO 27001:</h4>
              <p>
                Strengthening Secure IT Operations For Energy And Finance
                Clients.
              </p>
            </div>
          </div>

          <button className="cert-btn">Learn Certificates</button>
        </div>

        <div className="cert-right">
          <div className="triangle-pattern">
            <img
              src="./src/assets/images/certificate-triangles.png"
              alt="Design Accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
