import React from 'react';
import './ProjectCards.scss';
import projects from '../projects.json';

export default function ProjectCards() {
    return (
        <div className="background">
            <section className="projectContainer">
                {!projects ? null : projects.map(project => {
                    return (
                        <section className="project" key={project.title}>
                            <img src={project.images} alt={project.title} />
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-date">{project.project_date}</p>
                            <a className="project-button" href={project.website} target="_blank" rel="noreferrer">Website</a>
                            <a className="project-button" href={project.github} target="_blank" rel="noreferrer">Github</a>
                        </section>
                    );
                })}
            </section>


        </div>
    )
}