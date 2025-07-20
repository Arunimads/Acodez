import "./Certifications.css";
import SectionHeader from "../ui/header/SectionHeader";
import { Button } from "../ui/button/Button";
const Certifications = () => {
  return (
    <section className="certifications-section">
      <div className="cert-container">
        <div className="cert-left">
          <SectionHeader name="CERTIFICATIONS" type="Main" />
          <SectionHeader name="Building Trust With Industry Standards." type="Sub" />

          <div className="cert-box">
            <div className="cert-icon">
              <img src="./src/assets/images/certificate-symbol.png" />
            </div>
            <div className="cert-text">
              <h4>ISO 14001:</h4>
              <p>Committed To Net Zero Emissions By 2025, Reflecting Our Dedication To Sustainable Practices.</p>
            </div>
          </div>

          <div className="cert-box cert-box-bottom">
            <div className="cert-icon">
              <img src="./src/assets/images/certificate-symbol.png" />
            </div>
            <div className="cert-text">
              <h4>ISO 27001:</h4>
              <p>Strengthening Secure IT Operations For Energy And Finance Clients.</p>
            </div>
          </div>
          <div className="learn-cert">
            <Button name="Learn Certificates" />
          </div>
        </div>

        <div className="cert-right">
          <div className="triangle-pattern">
            <img src="./src/assets/images/certificate-triangles.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
