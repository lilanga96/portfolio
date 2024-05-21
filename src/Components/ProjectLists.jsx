
import React from 'react';
import Projects from './Projects';
import projectsData from './ProjectsData';
import './ProjectsList.css';

const ProjectsList = () => {
  return (
    <section className="projects-list">
      {projectsData.map((project, index) => (
        <Projects
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </section>
  );
};

export default ProjectsList;
