import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Certifications from "../components/Projects/Certification";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Certifications />
      <About />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </>
  );
}

export default Home;
