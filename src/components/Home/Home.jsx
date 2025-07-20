import TopSection from "../TopSection/TopSection";
import Features from "../Features/Features";
import Services from "../Services/Services";
import CaseStudy from "../CaseStudy/CaseStudy";
import Certifications from "../Certifications/Certifications";
import Blog from "../Blog/Blog";
import Sustainability from "../Sustainability/Sustainability";

const Home = () => {
  return (
    <>
      <section id="home">
        <TopSection />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="case-study">
        <CaseStudy />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="sustainability">
        <Sustainability />
      </section>
    </>
  );
};

export default Home;
