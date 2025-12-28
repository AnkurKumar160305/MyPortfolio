import React from "react";
import ElectricBorder from "./ElectricBorder";
import CometCard from "./CometCard";
import "./Project.css";


const Project = () => {
  return (
    <section className="projects-section" id="projects">
      
      {/* ===== Section Header ===== */}
      <ElectricBorder
        color="#7df9ff"
        speed={1.2}
        chaos={0.6}
        thickness={2}
        style={{ borderRadius: 20 }}
      >
        <div className="projects-header">
          <h2>🚀 My Projects</h2>
          <p>
            A showcase of my work combining <span>design</span>,{" "}
            <span>logic</span>, and <span>performance</span>.
          </p>
        </div>
      </ElectricBorder>

      {/* ===== Featured Projects ===== */}
      <div className="projects-grid">
        <CometCard
          title="Portfolio Website"
          description="Personal portfolio built with React, animations, and modern UI."
          tech={["React", "CSS", "Animations"]}
        />

        <CometCard
          title="DSA Visualizer"
          description="Interactive platform to visualize data structures & algorithms."
          tech={["JavaScript", "Algorithms", "UI"]}
        />

        <CometCard
          title="Competitive Tracker"
          description="Tracks Codeforces, LeetCode & Coding Ninjas progress."
          tech={["React", "APIs", "Charts"]}
        />
      </div>

    </section>
  );
};

export default Project;
