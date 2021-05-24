import React from "react";
import Computer from "./Computer";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <section id="hero-section">
      <div className="bg-text">
        KYLE
        <br />
        CHUNG
      </div>
      <div className="page-container">
        <div className="content-wrapper">
          <div className="content-text">
            <h1>Kyle Chung</h1>
            <p>
              Web Developer <br />
              Front-End Designer
            </p>
            <button>view my work</button>
          </div>
        </div>
        <div className="content-wrapper">
          <Computer />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
