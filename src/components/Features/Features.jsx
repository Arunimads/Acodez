import "./Features.css";

const Features = () => {
  const features = [
    {
      title: "Tailored Solutions With Excellence",
      description: "From energy trading system reliability to renewable integration, Skedara transforms IT operations into engines of growth with sustainable and solutions.",
      icon: "./src/assets/images/bulb-icon.png",
    },
    {
      title: "Leading IT Toward A Greener Future",
      description: "Committed to net zero by 2025, Skedara integrates green IT to help businesses meet ESG goals and sustainability mandates.",
      icon: "./src/assets/images/forward-arrow.png",
    },
    {
      title: "Global Talent Partnerships",
      description: "Rooted in India’s thriving tech ecosystem and powered by global talent, Skedara connects expertise to deliver measurable results.",
      icon: "./src/assets/images/globe-icon.png",
    },
  ];

  return (
    <div className="feature-main">
      <div>
        <img src="./src/assets/images/head-triangles.png" className="head-triangles" />
      </div>
      <section className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="card-content">
              <h3>{feature.title}</h3>
              <img src={feature.icon} className="card-icon" />
              <p
                dangerouslySetInnerHTML={{
                  __html: feature.description.replace(/Skedara/g, "<strong>Skedara</strong>"),
                }}
              />
            </div>
          </div>
        ))}
      </section>
      <div>
        <img src="./src/assets/images/features-bottom-triangle.png" className="bottom-triangles" />
      </div>
    </div>
  );
};

export default Features;
