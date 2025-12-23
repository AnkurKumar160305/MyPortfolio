import React from "react";
import { Link } from "react-router-dom";
import "./Projectcard.css";
import { projects } from "../data/projects";

const Projectcard = () => {
  return (
    <section className="cards">
      {projects.map((project) => (
        <div className="card" key={project.id}>
          {/* Image */}
          <Link to={project.liveLink} className="image-wrapper">
            <img src={project.image} alt={project.title} />
            <span className="view-overlay">View Project</span>
          </Link>

          {/* Content */}
          <div className="content">
            <p className="heading">{project.title}</p>
            <p className="text">{project.description}</p>

            {/* Tech Stack */}
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

            {/* Buttons */}
            <div className="buttons">
              <Link to={project.liveLink}>
                <button className="primary-btn">Explore</button>
              </Link>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="icon-btn github-btn"
              >
                <img className="icon github" src="./src/assets/github.png" alt="GitHub" />
              </a>

              <a
                href={project.linkedin}
                target="_blank"
                rel="noreferrer"
                className="icon-btn linkedin-btn"
              >
                <img className="icon linkedin" src="./src/assets/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projectcard;
