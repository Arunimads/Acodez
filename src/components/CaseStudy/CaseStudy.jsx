import React from "react";

const CaseStudy = () => {
  return (
    <section className="case-study-section">
      <div className="container">
        <div className="image-column">
          <div className="image-wrapper">
            <img
              src="./src/assets/images/case-study.png"
              alt="Case Study"
              className="case-image"
            />
          </div>
        </div>

        <div className="text-column">
          <p className="tagline">Case Study</p>
          <h2 className="title">
            Turning IT Challenges Into Growth Opportunities.
          </h2>
          <p className="description">
            Enabled 99.9% uptime for a global energy leader, reducing downtime
            by 20% through proactive monitoring and optimized workflows.
            Delivered end-to-end migration support for improved reliability and
            compliance readiness.
          </p>
          <button className="discover-btn">Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
