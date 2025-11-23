import React from 'react';
import ProjectCard from './ProjectCard';
import useScrollAnimation from '../hooks/useScrollAnimation.js';
import '../styles/components.css';
import foodDeliveryImg from '../images/foodDeliveryImg.png';
import cloudResumeImg from '../images/cloudResumeImg.png';
import interactiveResumeImg from '../images/interactiveResumeImg.png';
import sitecoreImg from '../images/sitecoreImg.jpeg';


export const projects = [
  {
    id: 'fp-0',
    title: 'Online Food Delivery Web App',
    description: 'Full-stack food ordering platform with user/admin modules.',
    link: 'https://github.com/saketg0210/Chats-webpage',
    demoImg: foodDeliveryImg,
  },
  {
    id: 'fp-1',
    title: 'Cloud Resume Challenge (React + AWS)',
    description: 'Responsive React resume website with visitor counter.',
    link: 'https://github.com/saketg0210/cloud-resume-free',
    demoImg: cloudResumeImg,
  },
  {
    id: 'fp-2',
    title: 'Live Interactive Resume',
    description: 'Dark/light mode interactive resume with PDF download.',
    link: 'https://github.com/saketg0210/resume',
    demoImg: interactiveResumeImg,
  },
  {
    id: 'fp-3',
    title: 'Sitecore CMS Web Projects',
    description: 'Client-facing projects using Sitecore CMS and React.js.',
    link: 'https://github.com/saketg0210/Pharmancy/tree/main/Pharma',
    demoImg: sitecoreImg,
  },
];




const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section id="project" className={`projects-section ${isVisible ? 'animate-fadeIn' : ''}`} ref={ref}>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            // open full projects page in a new tab at the specific section
            link={`/#fullprojects#${project.id}`}
            newTab
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;