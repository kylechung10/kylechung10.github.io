import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";

function Home() {
  return (
    <div id="home">
      <HeroSection />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
