import React from 'react';
import Progress from './Progress.jsx';
import './About.css';

const About = () => {
  return (
    <div className="about-section flex flex-col items-center px-6 lg:px-20 py-12 text-gray-300">

      {/* TITLE */}
      <h1 className="about-title text-4xl lg:text-5xl font-extrabold mb-12 text-red-500 tracking-wide border-b-2 border-red-600 pb-2">
        About
      </h1>

      {/* MAIN CONTENT CONTAINER */}
      <div className="flex flex-col lg:flex-row justify-between w-full gap-12">

        {/* LEFT SIDE */}
        <div className="left-about w-full lg:w-2/3 space-y-10">
          <p className="left-text text-gray-400 leading-relaxed text-lg">
            Hello! I'm <span className="text-red-400 font-semibold">Ankur</span>. I'm a passionate software developer with a knack for creating efficient, scalable, and user-friendly solutions to complex problems.
            <br /><br />
            My journey into programming began with a curiosity about how things work behind the scenes. This curiosity evolved into a passion for building applications that make a difference in people's lives.
            <br /><br />
            I believe in writing clean, maintainable code and constantly learning new technologies. My development philosophy centers around <span className="text-red-400">user experience</span>, performance, and creating solutions that stand the test of time.
            <br /><br />
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>

          {/* BOX GRID */}
          <div className="left-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
            <div className="box1 p-6 border border-gray-700 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
              <img src="" alt="" className="mx-auto mb-4" />
              <h2 className="box1-title text-xl font-semibold text-red-500 mb-2">Frontend</h2>
              <p className="box1-text text-gray-400 text-sm">Building responsive, interactive UIs with modern frameworks</p>
            </div>

            <div className="box2 p-6 border border-gray-700 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
              <img src="" alt="" className="mx-auto mb-4" />
              <h2 className="box2-title text-xl font-semibold text-red-500 mb-2">Backend</h2>
              <p className="box2-text text-gray-400 text-sm">Designing robust APIs and server-side logic</p>
            </div>

            <div className="box3 p-6 border border-gray-700 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
              <img src="" alt="" className="mx-auto mb-4" />
              <h2 className="box3-title text-xl font-semibold text-red-500 mb-2">DevOps</h2>
              <p className="box3-text text-gray-400 text-sm">Automating deployment and cloud infrastructure</p>
            </div>

            <div className="box4 p-6 border border-gray-700 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
              <img src="" alt="" className="mx-auto mb-4" />
              <h2 className="box4-title text-xl font-semibold text-red-500 mb-2">UI/UX</h2>
              <p className="box4-text text-gray-400 text-sm">Crafting seamless and intuitive user experiences</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-about w-full lg:w-1/3 mt-10 lg:mt-0">
          <div className="p-6 border border-gray-700 rounded-xl shadow-lg">
            <Progress />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
