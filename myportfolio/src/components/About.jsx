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
            Hello! I'm <span className="highlight">Ankur</span>, a passionate software developer creating efficient, scalable, and user-friendly solutions.
            <br /><br />
            I focus on writing clean, maintainable code and enjoy building applications that make a real impact. My philosophy centers on <span className="highlight">performance</span>, <span className="highlight">UX</span>, and <span className="highlight">modern technologies</span>.
          </p>

          {/* TECH BOX GRID */}
          <div className="tech-grid">
            <div className="tech-box">
              <h3>Frontend</h3>
              <p>Building interactive, responsive user interfaces</p>
            </div>
            <div className="tech-box">
              <h3>Backend</h3>
              <p>Designing robust APIs and server-side logic</p>
            </div>
            <div className="tech-box">
              <h3>DevOps</h3>
              <p>Automating deployment and cloud infrastructure</p>
            </div>
            <div className="tech-box">
              <h3>UI/UX</h3>
              <p>Crafting seamless and intuitive user experiences</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <h2 className="skills-title">My Skills</h2>
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
