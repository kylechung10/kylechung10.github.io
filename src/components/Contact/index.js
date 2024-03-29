import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import "./Contact.scss";

function Contact() {
  const linkArray = [
    {
      icon: <AiIcons.AiFillLinkedin />,
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/kyle-chung-43a017180/",
    },
    {
      icon: <AiIcons.AiFillGithub />,
      text: "GitHub",
      link: "https://github.com/kylechung10",
    },
  ];

  const connectBars = [];
  for (let i = 0; i < 8; i++) {
    connectBars.push(<div className="bar" style={{ "--z": i }} key={i}></div>);
  }

  return (
    <section id="contact" className="view-height">
      <div className="content">
        <div className="content-wrapper">
          <h1 className="connect-header">
            Connect
            <br />
            With Me
          </h1>
          <ul className="link-list">
            <li id="email-item">
              <a href="mailto: kylechung7+portfolio@gmail.com">
                <AiIcons.AiOutlineMail />
                <span>kylechung7@gmail.com</span>
              </a>
            </li>
            {linkArray.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="content-wrapper connect-wrapper">
          <FaIcons.FaUserAlt />
          <div className="animation-container">
            <div className="connect-animation">{connectBars}</div>
            <div className="connect-animation">{connectBars}</div>
          </div>
          <FaIcons.FaLaptopCode />
        </div>
      </div>
    </section>
  );
}

export default Contact;
