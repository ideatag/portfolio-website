import React from "react";
import "./projects.css";
import Project1 from "../../assets/project-1.png";
import Project2 from "../../assets/project-2.png";
import Project3 from "../../assets/project-3.png";
import Project4 from "../../assets/project-4.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-img-container">
        <img src={Project1} alt="" className="projects-img" />
        <img src={Project2} alt="" className="projects-img" />
        <img src={Project3} alt="" className="projects-img" />
        <img src={Project4} alt="" className="projects-img" />
      </div>
    </section>
  );
};

export default Projects;
