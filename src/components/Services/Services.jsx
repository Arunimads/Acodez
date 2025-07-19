// src/components/Services.jsx
import React from "react";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-wrapper">
        <div className="services-text">
          <p className="label">OUR SERVICES</p>
          <h2>
            Transforming IT Operations
            <br /> Into Engines Of Growth And Innovation
          </h2>
          <p className="desc">
            Skedara delivers energy IT excellence and tailored solutions,
            ensuring resilience and measurable outcomes
          </p>
          <button className="cta">Discover Our Services</button>
        </div>

        <div className="services-image-wrapper">
          <img
            src="./src/assets/images/solar-panel.png"
            alt="Solar Panel"
            className="services-bg"
          />
          <div className="cards-wrapper">
            <div className="cards">
              <div className="service-card">
                <h4>
                  Core Services:
                  <br />
                  Energy IT Operations
                </h4>
                <p>
                  <strong>➕ Capabilities:</strong>
                </p>
                <p>
                  24/7 monitoring, incident management, trading reliability,
                  SRE, and compliance.
                </p>
              </div>
              <div className="service-card">
                <h4>
                  Beyond Energy:
                  <br />
                  Tailored Industry Solutions
                </h4>
                <p>
                  <strong>➕ Capabilities:</strong> Offering business
                  consulting, IT strategy and custom development for compliance
                  workflows.
                </p>
                <p>
                  <strong>➕ Value Proposition:</strong> Skedara delivers
                  tailored IT solutions for finance and logistics, ensuring
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
