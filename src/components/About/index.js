import React from "react";
import "./About.scss";

function About() {
  return (
    <section id="about" className="view-height">
      <div className="content">
        <div className="content-wrapper">
          <h1>About Me</h1>
          <h4>
            I am a UCF graduate with a bachelor's degree in Web Design. I focus
            on developing a functional experience for web applications.
          </h4>
          <button
            onClick={() => (window.location.href = "/#")}
            className="btn-main"
          >
            view my resume
          </button>
        </div>
        <div className="content-wrapper profile-picture">
          <img
            src={`${process.env.PUBLIC_URL}/img/portrait.jpg`}
            alt="Portrait Kyle Chung"
            id="portrait"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
