import "./CaseStude.css";
import { Button } from "../ui/button/Button";
import SectionHeader from "../ui/header/SectionHeader";
const CaseStudy = () => {
  return (
    <section className="case-study-section">
      <div className="container">
        <div className="column1">
          <div className="image-wrapper">
            <img src="./src/assets/images/case-study.png" className="case-image" />
          </div>
        </div>
        <div className="column2">
          <SectionHeader name="CASE STUDY" type="Main" />
          <SectionHeader name="Turning IT Challenges Into Growth Opportunities." type="Sub" />
          <SectionHeader
            name="Enabled 99.9% uptime for a global energy leader, reducing downtime by 20% through proactive monitoring and optimized workflows. Delivered end-to-end migration support for improved reliability and compliance readiness."
            type="Desc"
          />
          <Button name="Discover More" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
