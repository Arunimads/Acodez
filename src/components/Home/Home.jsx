import React from "react";

import "./Home.css";
import TopSection from "../TopSection/TopSection";
import Features from "../Features/Features";
import Services from "../Services/Services";
import CaseStudy from "../CaseStudy/CaseStudy";
import Certifications from "../Certifications/Certifications";
import Blog from "../Blog/Blog";
import Sustainability from "../Sustainability/Sustainability";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <TopSection />
      <Features />
      <Services />
      <CaseStudy />
      <Certifications />
      <Blog />
      <Sustainability />
      <Footer />
    </>
  );
};

export default Home;
