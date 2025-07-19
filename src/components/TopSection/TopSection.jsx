// src/components/Hero.jsx
import React from "react";

const TopSection = () => {
  return (
    <div className="hero-container">
      <img
        src="./src/assets/images/Vector-17.png"
        alt="Background"
        className="bg-image"
      />
      <img
        src="./src/assets/images/Group-7.png"
        alt="Overlay"
        className="overlay-image"
      />
      <div className="overlay">
        <h1>
          Global Experts in <span className="highlight">Energy IT</span>{" "}
          Operations | Driving Stability, Scalability, and{" "}
          <span className="highlight">Sustainability</span>.
        </h1>
        <p>
          From energy trading system reliability to renewable integration,
          Skedara transforms IT operations into engines of growth with
          sustainable and innovative solutions.
        </p>
        <div className="head-buttons">
          <button className="primary-btn">Discover Our Services</button>
          <button className="secondary-btn">Explore Case Studies</button>
        </div>
        <div>
          <img
            src="./src/assets/images/head-triangles.png"
            className="head-triangles"
            alt="triangles"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
