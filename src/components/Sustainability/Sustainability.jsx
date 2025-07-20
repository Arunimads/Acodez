import "./Sustainability.css";
import SectionHeader from "../ui/header/SectionHeader";
import { Button } from "../ui/button/Button";
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
            <div className="brand-circle">
              <span className="brand-circle-dara">DARA</span>
            </div>
            <div className="brand-text">STREAM</div>
          </div>
        </div>

        <div className="sustainability-right">
          <div className="sustainability-content">
            <SectionHeader name="SUSTAINABILITY" type="Main" />
            <SectionHeader
              name="Shaping A Sustainable Future Together."
              type="Sub"
            />
            <SectionHeader
              name="At Skedara, sustainability is at the core of every service we deliver. Our green IT practices and ESG-aligned solutions empower clients to operate responsibly while
              building future-ready systems."
              type="Desc"
            />
            <Button name="Explore Sustainability Goals" />
          </div>

          <div className="tree-bulb-container">
            <img
              src="./src/assets/images/tree-bulb.png"
              className="tree-bulb-image"
            />
          </div>

          <div className="curly-line-container">
            <img
              src="./src/assets/images/curly-arrow.png"
              className="curly-line-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
