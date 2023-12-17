import React from "react";

const ProjectsSectionCard = ({ area: { link, title, image, altText } }) => (
  <div>
    <a href={link}>
      <h5 className="project-title">{title}</h5>
      <img className="project-img" src={image} alt={altText} />
    </a>
  </div>
);

export default ProjectsSectionCard;
