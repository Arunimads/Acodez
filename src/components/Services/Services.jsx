import "./Services.css";
import { Button } from "../ui/button/Button";
import SectionHeader from "../ui/header/SectionHeader";
const Services = () => {
  return (
    <section className="services-section">
      <div className="services-wrapper">
        <div className="services-text">
          <SectionHeader name="OUR SERVICES" type="Main" />
          <SectionHeader name="Transforming IT Operations Into Engines Of Growth And Innovation" type="Sub" />
          <SectionHeader name="Skedara delivers energy IT excellence and tailored solutions,ensuring resilience and measurable outcomes" type="Desc" />
          <Button name="Discover Our Services" />
        </div>
        <div className="services-image-wrapper">
          <img src="./src/assets/images/solar-panel.png" className="services-bg" />
          <div className="cards-wrapper">
            <div className="service-card">
              <h4>
                Core Services:
                <br />
                Energy IT Operations
              </h4>
              <p className="capability-label">
                <img src="./src/assets/images/star-plus.png" /> <strong>Capabilities:</strong>
              </p>
              <p className="capability-text">24/7 monitoring, incident management, trading reliability, SRE, and compliance.</p>
              <p className="value-label">
                <img src="./src/assets/images/star-plus.png" /> <strong>Value Proposition:</strong>
              </p>
              <p className="value-text">Ensuring resilience and scalability for critical energy systems, empowering business growth.</p>
            </div>
            <div className="service-card">
              <h4>
                Beyond Energy:
                <br />
                Tailored Industry Solutions
              </h4>
              <p className="capability-label">
                <img src="./src/assets/images/star-plus.png" /> <strong>Capabilities:</strong>
              </p>
              <p className="capability-text">Offering business consulting, IT strategy and custom development for compliance workflows</p>
              <p className="value-label">
                <img src="./src/assets/images/star-plus.png" /> <strong>Value Proposition:</strong>
              </p>
              <p className="value-text">Skedara delivers tailored IT solutions for finance and logistics, ensuring excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
