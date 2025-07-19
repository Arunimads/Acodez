// src/components/Hero.jsx
import React from "react";
import "./Home.css";

const Home = () => {
  const features = [
    {
      title: "Tailored Solutions With Excellence",
      description:
        "From energy trading system reliability to renewable integration, Skedara transforms IT operations into engines of growth with sustainable and solutions.",
      icon: "./src/assets/images/bulb-icon.png",
    },
    {
      title: "Leading IT Toward A Greener Future",
      description:
        "Committed to net zero by 2025, Skedara integrates green IT to help businesses meet ESG goals and sustainability mandates.",
      icon: "./src/assets/images/forward-arrow.png",
    },
    {
      title: "Global Talent Partnerships",
      description:
        "Rooted in India’s thriving tech ecosystem and powered by global talent, Skedara connects expertise to deliver measurable results.",
      icon: "./src/assets/images/globe-icon.png",
    },
  ];
  return (
    // head section start
    <>
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

        {/* head section head */}
      </div>
      <div className="feature-main">
        <section className="features-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="card-content">
                <h3>{feature.title}</h3>
                <img src={feature.icon} alt="icon" className="card-icon" />
                <p>
                  From energy trading system reliability to renewable
                  integration, <strong>Skedara</strong> transforms IT operations
                  into engines of growth with sustainable and solutions.
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* our services */}

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
                    {" "}
                    24/7 monitoring, incident management, trading reliability,
                    SRE, and compliance.
                  </p>
                  <p>
                    <strong>➕ Value Proposition:</strong>{" "}
                  </p>
                  <p></p>
                </div>
                <div className="service-card">
                  <h4>
                    Beyond Energy:
                    <br />
                    Tailored Industry Solutions
                  </h4>
                  <p>
                    <strong>➕ Capabilities:</strong> Offering business
                    consulting, IT strategy and custom development for
                    compliance workflows.
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

      {/* case study */}

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
              Delivered end-to-end migration support for improved reliability
              and compliance readiness.
            </p>
            <button className="discover-btn">Discover More</button>
          </div>
        </div>
      </section>

      {/* certificate section */}
      <div>
        <section class="certifications-section">
          <div class="cert-container">
            <div class="cert-left">
              <p class="cert-subtitle">CERTIFICATIONS</p>
              <h2 class="cert-title">
                Building Trust With Industry Standards.
              </h2>

              <div class="cert-box">
                <div class="cert-icon">
                  <img
                    src="./src/assets/images/certificate-symbol.png"
                    alt="ISO 14001"
                  />
                </div>
                <div class="cert-text">
                  <h4>ISO 14001:</h4>
                  <p>
                    Committed To Net Zero Emissions By 2025, Reflecting Our
                    Dedication To Sustainable Practices.
                  </p>
                </div>
              </div>

              <div class="cert-box cert-box-bottom">
                <div class="cert-icon">
                  <img
                    src="./src/assets/images/certificate-symbol.png"
                    alt="ISO 27001"
                  />
                </div>
                <div class="cert-text">
                  <h4>ISO 27001:</h4>
                  <p>
                    Strengthening Secure IT Operations For Energy And Finance
                    Clients.
                  </p>
                </div>
              </div>

              <button class="cert-btn">Learn Certificates</button>
            </div>

            <div class="cert-right">
              <div class="triangle-pattern">
                <img
                  src="./src/assets/images/certificate-triangles.png"
                  alt="Design Accent"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* blog */}

      <section class="blog-section">
        <div class="blog-container">
          <div class="blog-header">
            <p class="blog-subtitle">BLOG</p>
            <h2 class="blog-title">
              Insights That Matter: Thought Leadership From Skedara.
            </h2>
          </div>

          <div class="blog-grid">
            <article class="blog-card">
              <div class="blog-card-image">
                <img
                  src="./src/assets/images/blog-solar-panel.png"
                  alt="Solar Panel Energy"
                />
              </div>
              <div class="blog-card-content">
                <h3 class="blog-card-title">
                  The Silent Power Behind Energy Stability: Why IT Operations
                  are the Real MVPs
                </h3>
                <p class="blog-card-description">
                  Explore how IT operations quietly underpin energy stability,
                  blending domain expertise technology...
                </p>
                <a href="#" class="blog-card-link">
                  Read more
                </a>
              </div>
            </article>

            <article class="blog-card">
              <div class="blog-card-image">
                <img
                  src="./src/assets/images/blog-windmill.png"
                  alt="Wind Energy"
                />
              </div>
              <div class="blog-card-content">
                <h3 class="blog-card-title">
                  Green IT: How Sustainable Practices are Reshaping Energy
                  Operations
                </h3>
                <p class="blog-card-description">
                  Discover how IT can lead the charge in ESG alignment and
                  sustainability while optimizing energy operations...
                </p>
                <a href="#" class="blog-card-link">
                  Read more
                </a>
              </div>
            </article>

            <article class="blog-card">
              <div class="blog-card-image">
                <img
                  src="./src/assets/images/blog-team.png"
                  alt="Team Success"
                />
              </div>
              <div class="blog-card-content">
                <h3 class="blog-card-title">
                  The Secret to Success: Why People Matter More Than Ever in IT
                  Outsourcing
                </h3>
                <p class="blog-card-description">
                  Learn how a people-first approach transforms organizational
                  success and client relationships...
                </p>
                <a href="#" class="blog-card-link">
                  Read more
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* susutainablity section */}

      <section class="sustainability-section">
        <div class="sustainability-container">
          <div class="sustainability-left">
            <div class="brand-element">
              <div class="brand-circle">S</div>
              <div class="brand-text">SYSTEM</div>
            </div>
            <div class="brand-element">
              <div class="brand-circle">K</div>
              <div class="brand-text">KNOWLEDGE</div>
            </div>
            <div class="brand-element">
              <div class="brand-circle">E</div>
              <div class="brand-text">EXCELLENCE</div>
            </div>
            <div class="brand-element">
              <div class="brand-word">DARA</div>
            </div>
          </div>

          <div class="sustainability-right">
            <div class="sustainability-content">
              <p class="sustainability-subtitle">SUSTAINABILITY</p>
              <h2 class="sustainability-title">
                Shaping A Sustainable Future Together.
              </h2>
              <p class="sustainability-description">
                At Skedara, sustainability is at the core of every service we
                deliver. Our green IT practices and ESG-aligned solutions
                empower clients to operate responsibly while building
                future-ready systems.
              </p>
              <button class="sustainability-btn">
                Explore Sustainability Goals
              </button>
            </div>

            <div class="tree-bulb-container">
              <img
                src="./src/assets/images/tree-bulb.png"
                alt="Sustainable Innovation"
                class="tree-bulb-image"
              />
            </div>

            <div class="curly-line-container">
              <img
                src="./src/assets/images/curle-line.png"
                alt="Design Element"
                class="curly-line-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
    </>
  );
};

export default Home;
