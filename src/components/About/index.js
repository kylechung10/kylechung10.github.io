import React, { useState } from "react";
import "./About.scss";
import * as SiIcons from "react-icons/si";

function About() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  const expressIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className="express-icon"
    >
      <g id="express-icon" data-name="express-icon">
        <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM5.23,10.44a2.16,2.16,0,0,0,2-1.29l.47.28A2.73,2.73,0,0,1,5.19,11,2.73,2.73,0,0,1,2.4,8,2.75,2.75,0,0,1,5.15,5a2.75,2.75,0,0,1,2.67,3H3A2.26,2.26,0,0,0,5.23,10.44Zm7.69.37-2-2.6-2,2.6H8.28l2.28-3L8.47,5.16h.68l1.79,2.33L12.7,5.16h.67l-2,2.69,2.28,3Z" />
        <path d="M5.15,5.56A2.16,2.16,0,0,0,3,7.53H7.24A2.13,2.13,0,0,0,5.15,5.56Z" />
      </g>
    </svg>
  );

  return (
    <section id="about" className="view-height">
      <div className="content">
        <div className="content-wrapper">
          <h1>About Me</h1>
          <h4>
            I am an Orlando based front-end web developer. I graduated UCF with
            a bachelor's degree in Web Design, and I specialize on developing a
            functional front-end experience for websites.
          </h4>
          <button
            className="btn-main"
            onClick={() => setIsSkillsOpen(true)}
            disabled={isSkillsOpen}
          >
            view my skills
          </button>
        </div>
        <div className="content-wrapper profile-container">
          <div className="icon-row" style={{ marginBottom: "15px" }}>
            <div className={isSkillsOpen ? "icon" : "icon hide"}>
              <SiIcons.SiHtml5 />
              <span>HTML</span>
            </div>
            <div className={isSkillsOpen ? "icon" : "icon hide"}>
              <SiIcons.SiCss3 />
              <span>CSS</span>
            </div>
            <div className={isSkillsOpen ? "icon" : "icon hide"}>
              <SiIcons.SiJavascript />
              <span>JavaScript</span>
            </div>
            <div className={isSkillsOpen ? "icon" : "icon hide"}>
              <SiIcons.SiReact />
              <span>React</span>
            </div>
            <div className={isSkillsOpen ? "icon" : "icon hide"}>
              <SiIcons.SiGithub />
              <span>GitHub</span>
            </div>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/img/portrait.jpg`}
            alt="Portrait Kyle Chung"
            id="portrait"
          />
          <div className="icon-row bottom" style={{ marginTop: "15px" }}>
            <div className={isSkillsOpen ? "icon" : "icon hide"}>
              <SiIcons.SiNodeDotJs />
              <span>Node.js</span>
            </div>
            <div className={isSkillsOpen ? "icon" : "icon hide"}>
              <SiIcons.SiMongodb />
              <span>MongoDB</span>
            </div>
            <div className={isSkillsOpen ? "icon" : "icon hide"}>
              {expressIcon}
              <span>Express.js</span>
            </div>
            <div className={isSkillsOpen ? "icon" : "icon hide"}>
              <SiIcons.SiPhp />
              <span>PHP</span>
            </div>
            <div className={isSkillsOpen ? "icon" : "icon hide"}>
              <SiIcons.SiAdobecreativecloud />
              <span>
                Adobe
                <br />
                Suite
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
