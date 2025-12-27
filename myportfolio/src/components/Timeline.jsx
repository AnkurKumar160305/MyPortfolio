"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "./Timeline.css";

const timelineData = [
  {
    year: "2024 - Present",
    role: "Frontend Developer",
    company: "Aceternity Pvt. Ltd.",
    description:
      "Built and maintained UI components, implemented responsive designs, and improved web performance across multiple high-traffic platforms.",
    skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    year: "2022 - 2024",
    role: "UI/UX Designer",
    company: "Creative Minds Studio",
    description:
      "Designed web and mobile interfaces, created wireframes, and collaborated with developers to implement interactive UI components.",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Design Systems"],
  },
  {
    year: "2018 - 2022",
    role: "Bachelor of Technology (B.Tech)",
    company: "XYZ University",
    description:
      "Major: Computer Science & Engineering. Achievements: Dean's List, Hackathons Winner, College Projects Excellence Award.",
    skills: ["Data Structures", "Algorithms", "Web Development", "Machine Learning", "DBMS", "Python"],
  },
  {
    year: "2016 - 2018",
    role: "Higher Secondary Education",
    company: "ABC Senior Secondary School",
    description:
      "Stream: Science with Computer Science. Achievements: Top 5% of Class, Science Olympiad Gold Medal, Mathematics Excellence.",
    skills: ["Physics", "Chemistry", "Mathematics", "Computer Science", "Problem Solving"],
  },
];

const TimelineDemo = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const updateLineHeight = () => {
      if (cardsRef.current) {
        setLineHeight(cardsRef.current.scrollHeight);
      }
    };
    
    updateLineHeight();
    window.addEventListener('resize', updateLineHeight);
    
    return () => window.removeEventListener('resize', updateLineHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const iconPosition = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);

  return (
    <div ref={containerRef} className="timeline-container">
      <div className="timeline-header">
        <motion.h2
          className="timeline-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Journey
        </motion.h2>
        <motion.p
          className="timeline-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          A professional timeline of my education and work experience.
        </motion.p>
      </div>

      <div className="timeline-content" ref={contentRef}>
        {/* Timeline Line */}
        <div className="timeline-line-wrapper">
          <div className="timeline-line">
            <motion.div
              style={{ height: progressHeight }}
              className="timeline-progress"
            />
          </div>
          <motion.div
            style={{ y: iconPosition }}
            className="timeline-icon-wrapper"
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <div className="timeline-icon-outer"></div>
            <div className="timeline-icon-inner"></div>
          </motion.div>
        </div>

        {/* Timeline Cards */}
        <div className="timeline-cards" ref={cardsRef}>
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`timeline-item ${isLeft ? "left" : "right"}`}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="timeline-card">
                  <div className="timeline-card-inner">
                    <div
                      className={`timeline-year-box ${
                        isLeft ? "left-box" : "right-box"
                      }`}
                    >
                      <span className="year-icon">📅</span>
                      {item.year}
                    </div>
                    
                    <div className="card-header">
                      <h4 className="timeline-role">{item.role}</h4>
                      <p className="timeline-company">
                        <span className="company-icon">🏢</span>
                        {item.company}
                      </p>
                    </div>
                    
                    <p className="timeline-desc">{item.description}</p>

                    {/* Skills Section */}
                    <div className="skills-section">
                      <div className="skills-header">
                        <span className="skills-icon">💡</span>
                        <span className="skills-title">Key Skills</span>
                      </div>
                      <div className="skills-container">
                        {item.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="skill-tag"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: skillIndex * 0.08,
                              duration: 0.4,
                              ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.1, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="card-corner top-left"></div>
                  <div className="card-corner bottom-right"></div>
                  <div className="card-shine"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineDemo;