import React from "react";

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <p className="blog-subtitle">BLOG</p>
          <h2 className="blog-title">
            Insights That Matter: Thought Leadership From Skedara.
          </h2>
        </div>

        <div className="blog-grid">
          <article className="blog-card">
            <div className="blog-card-image">
              <img
                src="./src/assets/images/blog-solar-panel.png"
                alt="Solar Panel Energy"
              />
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">
                The Silent Power Behind Energy Stability: Why IT Operations are
                the Real MVPs
              </h3>
              <p className="blog-card-description">
                Explore how IT operations quietly underpin energy stability,
                blending domain expertise technology...
              </p>
              <a href="#" className="blog-card-link">
                Read more
              </a>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-card-image">
              <img
                src="./src/assets/images/blog-windmill.png"
                alt="Wind Energy"
              />
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">
                Green IT: How Sustainable Practices are Reshaping Energy
                Operations
              </h3>
              <p className="blog-card-description">
                Discover how IT can lead the charge in ESG alignment and
                sustainability while optimizing energy operations...
              </p>
              <a href="#" className="blog-card-link">
                Read more
              </a>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-card-image">
              <img src="./src/assets/images/blog-team.png" alt="Team Success" />
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">
                The Secret to Success: Why People Matter More Than Ever in IT
                Outsourcing
              </h3>
              <p className="blog-card-description">
                Learn how a people-first approach transforms organizational
                success and client relationships...
              </p>
              <a href="#" className="blog-card-link">
                Read more
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;
