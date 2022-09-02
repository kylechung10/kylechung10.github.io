import React from "react";
import "./Projects.scss";
import * as SiIcons from "react-icons/si";

function Projects() {
  // Custom SVG icon because no express.js from react-icons
  const expressIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className="express-icon"
      fill="#fff"
    >
      <g id="express-icon" data-name="express-icon">
        <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM5.23,10.44a2.16,2.16,0,0,0,2-1.29l.47.28A2.73,2.73,0,0,1,5.19,11,2.73,2.73,0,0,1,2.4,8,2.75,2.75,0,0,1,5.15,5a2.75,2.75,0,0,1,2.67,3H3A2.26,2.26,0,0,0,5.23,10.44Zm7.69.37-2-2.6-2,2.6H8.28l2.28-3L8.47,5.16h.68l1.79,2.33L12.7,5.16h.67l-2,2.69,2.28,3Z" />
        <path d="M5.15,5.56A2.16,2.16,0,0,0,3,7.53H7.24A2.13,2.13,0,0,0,5.15,5.56Z" />
      </g>
    </svg>
  );

  // Information for project page
  const projectArray = [
    {
      title: "Golf With Friends",
      description: "the multiplayer golf scorecard app",
      bgColor: "#038c0c",
      textColor: "#fff",
      thumbnail: "/img/gwf-thumbnail.jpg",
      liveSite: "https://golf-with-friends.herokuapp.com/",
      gitRepo: "https://github.com/kylechung10/golf-score-app",
      icons: [
        {
          svg: <SiIcons.SiMongodb />,
          name: "monogoDB",
        },
        {
          svg: expressIcon,
          name: "Express.js",
        },
        {
          svg: <SiIcons.SiReact />,
          name: "React.js",
        },
        {
          svg: <SiIcons.SiNodeDotJs />,
          name: "Node.js",
        },
        {
          svg: <SiIcons.SiSass />,
          name: "SCSS",
        },
      ],
    },
    {
      title: "Movie Finder",
      description: "searching and saving favorite movies",
      bgColor: "#012340",
      textColor: "#fff",
      thumbnail: "/img/movie-app-thumbnail.jpg",
      liveSite: "https://ucf-movie-finder.herokuapp.com/",
      gitRepo: "https://github.com/kylechung10/ucf-movie-app/tree/deploy",
      icons: [
        {
          svg: <SiIcons.SiMongodb />,
          name: "monogoDB",
        },
        {
          svg: expressIcon,
          name: "Express.js",
        },
        {
          svg: <SiIcons.SiReact />,
          name: "React.js",
        },
        {
          svg: <SiIcons.SiNodeDotJs />,
          name: "Node.js",
        },
        {
          svg: <SiIcons.SiCss3 />,
          name: "CSS",
        },
      ],
    },
    {
      title: "Humanti",
      description: "website for the fight against plastic pollution",
      bgColor: "#a3e85c",
      textColor: "#002100",
      thumbnail: "/img/humanti-thumbnail.jpg",
      liveSite: "https://kylechung.com/ucf-humanti/",
      gitRepo: "https://github.com/kylechung10/ucf-humanti",
      icons: [
        {
          svg: <SiIcons.SiHtml5 />,
          name: "HTML",
        },
        {
          svg: <SiIcons.SiJavascript />,
          name: "JavaScript",
        },
        {
          svg: <SiIcons.SiCss3 />,
          name: "CSS",
        },
      ],
    },
  ];

  // JSX for project info text and icons
  const projectInfo = (project) => {
    return (
      <div className="project-card">
        <div className="project-info">
          <div className="project-info-header">
            <h2>{project.title}</h2>
            <h4>{project.description}</h4>
          </div>
          <div className="project-info-created">
            <h4 className="created-title">Built with</h4>
            <div className="icon-container">
              {project.icons.map((icon, index) => {
                return (
                  <div className="icon" key={index}>
                    {icon.svg}
                    <span className="icon-name">{icon.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="project-link-container">
          <p>view</p>
          <a
            href={project.liveSite}
            target="_blank"
            rel="noreferrer"
            className="pro-link site"
          >
            live site
          </a>
          <p>or</p>
          <a
            href={project.gitRepo}
            target="_blank"
            rel="noreferrer"
            className="pro-link github"
          >
            GitHub repository
          </a>
        </div>
      </div>
    );
  };

  // Alternate left and right pictures and information
  return (
    <section id="projects">
      <div className="content projects">
        <h1 className="project-header">My Projects</h1>
        <h3 className="sub-title">Featured works</h3>
        {projectArray.map((project, index) => (
          <div
            className="project-container"
            key={index}
            style={{
              backgroundColor: project.bgColor,
              color: project.textColor,
            }}
          >
            {index % 2 === 0 ? (
              <>
                {projectInfo(project)}
                <img
                  src={process.env.PUBLIC_URL + project.thumbnail}
                  alt={project.title}
                />
              </>
            ) : (
              <>
                <img
                  src={process.env.PUBLIC_URL + project.thumbnail}
                  alt={project.title}
                />
                {projectInfo(project)}
              </>
            )}
          </div>
        ))}
        <h3>Additional Personal Projects</h3>
        <a
          className="personal-projects-link"
          href="https://kylechung-personal-projects.netlify.app/"
        >
          View more
        </a>
      </div>
    </section>
  );
}

export default Projects;
