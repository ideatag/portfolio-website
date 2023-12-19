import React from "react";
import "./ProjectsSection.css";
import { ProjectsSectionData } from "./ProjectsSectionData";
import ProjectsSectionCard from "./ProjectsSectionCard";

const ProjectsSection = () => (
  <div id="projects">
    <h3 className="projects-section-title">My Projects</h3>
    <div className="projects-section">
      {ProjectsSectionData.map((item) => (
        <ProjectsSectionCard key={item.altText} area={item} />
      ))}
    </div>
  </div>
);

export default ProjectsSection;
