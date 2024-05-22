
import './Project.css';
import React from 'react';
import projectsData from './Components/projectsData'

const Projects = () => {
    return (
        <div className="animate__animated animate__slideInUp projects-list projects-list" >
            {projectsData.map((project, index) => (
                <div key={index} className="project-card">
                    <h2>{project.title}</h2>
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-links">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live View</a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
