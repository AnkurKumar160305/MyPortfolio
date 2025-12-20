import React from 'react';
import './About.css';

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "Node.js", level: 85 },
  { name: "HTML & CSS", level: 95 },
  { name: "TypeScript", level: 80 },
  { name: "Python", level: 75 },
  { name: "Git & GitHub", level: 90 },
  { name: "UI/UX Design", level: 70 }
];

const About = () => {
  return (
    <div className="about-section">

      {/* TITLE */}
      <h1 className="about-title">About Me</h1>

      {/* MAIN CONTENT */}
      <div className="about-content">

        {/* LEFT SIDE */}
        <div className="about-left">
          <p className="about-text">
            Hi! I'm <span className="highlight">Ankur</span>, a passionate software developer focused on building <span className="highlight">efficient</span> and <span className="highlight">user-friendly</span> applications.  
            <br /><br />
            I specialize in crafting modern interfaces and scalable backend systems with <span className="highlight">clean code</span> and <span className="highlight">high performance</span>.  
            <br /><br />
            I enjoy exploring <span className="highlight">emerging technologies</span>, cloud platforms, and AI-driven solutions to create innovative and impactful projects.  
            <br /><br />
            I also love improving <span className="highlight">UI/UX design</span>, collaborating with teams, and contributing to open-source communities.
          </p>

          <div className="tech-grid">
            <div className="tech-box">
              <h3>Frontend</h3>
              <p>Responsive and interactive UI using React, HTML5 & CSS3.</p>
            </div>
            <div className="tech-box">
              <h3>Backend</h3>
              <p>Robust APIs, server-side logic, and database management with Node.js.</p>
            </div>
            <div className="tech-box">
              <h3>DevOps</h3>
              <p>Deployment automation, CI/CD pipelines, and cloud infrastructure.</p>
            </div>
            <div className="tech-box">
              <h3>UI/UX</h3>
              <p>Designing intuitive, modern, and seamless user experiences.</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-desc">Continuously improving my skills with modern technologies to deliver high-quality solutions.</p>
          <div className="skills-list">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill">
                <div className="skill-name">
                  {skill.name} <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
