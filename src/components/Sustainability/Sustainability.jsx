// src/components/Sustainability.jsx
import React from "react";

const Sustainability = () => {
  return (
    <section className="sustainability-section">
      <div className="sustainability-container">
        <div className="sustainability-left">
          <div className="brand-element">
            <div className="brand-circle">S</div>
            <div className="brand-text">SYSTEM</div>
          </div>
          <div className="brand-element">
            <div className="brand-circle">K</div>
            <div className="brand-text">KNOWLEDGE</div>
          </div>
          <div className="brand-element">
            <div className="brand-circle">E</div>
            <div className="brand-text">EXCELLENCE</div>
          </div>
          <div className="brand-element">
            <div className="brand-word">DARA</div>
          </div>
        </div>

        <div className="sustainability-right">
          <div className="sustainability-content">
            <p className="sustainability-subtitle">SUSTAINABILITY</p>
            <h2 className="sustainability-title">
              Shaping A Sustainable Future Together.
            </h2>
            <p className="sustainability-description">
              At Skedara, sustainability is at the core of every service we
              deliver. Our green IT practices and ESG-aligned solutions empower
              clients to operate responsibly while building future-ready
              systems.
            </p>
            <button className="sustainability-btn">
              Explore Sustainability Goals
            </button>
          </div>

          <div className="tree-bulb-container">
            <img
              src="./src/assets/images/tree-bulb.png"
              alt="Sustainable Innovation"
              className="tree-bulb-image"
            />
          </div>

          <div className="curly-line-container">
            <img
              src="./src/assets/images/curly-arrow.png"
              alt="Design Element"
              className="curly-line-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
