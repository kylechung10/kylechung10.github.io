import React from "react";
import "./Projects.scss";
import * as SiIcons from "react-icons/si";

function Projects() {
  const expressIcon = <i className="express-icon">ex</i>;

  const projectArray = [
    {
      title: "Golf With Friends",
      description: "the multiplayer golf scorecard app",
      backgroundColor: "green",
      textColor: "#fff",
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
      ],
      thumbnail: "picture",
    },
    {
      title: "Movie Finder",
      description: "an application for searching the database of movies",
      backgroundColor: "blue",
      textColor: "#fff",
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
      ],
      thumbnail: "picture",
    },
  ];

  const projectInfo = (project) => {
    return (
      <div className="project-info">
        <h2>{project.title}</h2>
        <h4>{project.description}</h4>
        <span>Created with</span>
        {project.icons.map((icon, index) => {
          return (
            <div className="icon" key={index}>
              {icon.svg}
              <span className="icon-name">{icon.name}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="projects">
      <div className="content projects">
        <h1 className="project-header">My Projects</h1>
        {projectArray.map((project, index) => (
          <div className="project-container" key={index}>
            {index % 2 === 0 ? (
              <>
                {projectInfo(project)}
                <img src={project.thumbnail} alt={project.title} />
              </>
            ) : (
              <>
                <img src={project.thumbnail} alt={project.title} />
                {projectInfo(project)}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
