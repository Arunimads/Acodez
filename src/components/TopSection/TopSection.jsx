import "./TopSection.css";
import { Button } from "../ui/button/Button";

const TopSection = () => {
  return (
    <>
      <div className="hero-container">
        <img src="./src/assets/images/Vector-17.png" className="bg-image" />
        <img src="./src/assets/images/Group-7.png" className="overlay-image" />
        <div className="overlay">
          <h1>
            Global Experts in <span className="highlight">Energy IT</span> Operations | Driving Stability, Scalability, and <span className="highlight">Sustainability.</span>
          </h1>
          <div className="sub-headertext">
            From energy trading system reliability to renewable integration, Skedara transforms IT operations into engines of growth with sustainable and innovative solutions.
          </div>
          <div className="head-buttons">
            <Button name="Discover Our Services" />
            <button className="explore-btn">Explore Case Studies</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
