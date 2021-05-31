import React from "react";
import Computer from "./Computer";
import "./HeroSection.scss";

function HeroSection() {
  return (
    <section id="home" className="view-height">
      <div className="bg-text">
        KYLE
        <br />
        CHUNG
      </div>
      <div className="content">
        <div className="content-wrapper">
          <h1>Kyle Chung</h1>
          <h3>Web Developer</h3>
          <h3>Front-End Designer</h3>
          <button
            onClick={() => (window.location.href = "/#projects")}
            className="btn-main"
          >
            view my work
          </button>
        </div>
        <div className="content-wrapper">
          <Computer />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
