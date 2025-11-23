import React from 'react';
import '../styles/components.css';

const ProjectCard = ({ title, description, link, newTab }) => {
  return (
    <a
      href={link}
      className="project-card-link"
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-cta">View</div>
      </div>
    </a>
  );
};

export default ProjectCard;
