import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Navbar Title */}
      <p className='navTitle'>Ankur</p>

      {/* Navigation Links */}
      <div className='navList'>
        <ul className='navLinks'>
          <li className='navItem home'><a href="#home" className='navLink'>HOME</a></li>
          <li className='navItem about'><a href="#about" className='navLink'>ABOUT</a></li>
          <li className='navItem skills'><a href="#skills" className='navLink'>SKILLS</a></li>
          <li className='navItem projects'><a href="#projects" className='navLink'>PROJECTS</a></li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className='socialIcons'>
        <a href="https://github.com/AnkurKumar160305" target="_blank" rel="noopener noreferrer">
          <img className='socialIcon' src="./src/assets/social (1).png" alt="GitHub"/>
        </a>
        <a href="https://www.linkedin.com/in/ankur-kumar-833026284/" target="_blank" rel="noopener noreferrer">
          <img className='socialIcon' src="./src/assets/social (2).png" alt="LinkedIn"/>
        </a>
        <a href="https://leetcode.com/u/qDCkfvJavE/" target="_blank" rel="noopener noreferrer">
          <img className='socialIcon' src="./src/assets/leetcode.svg" alt="LeetCode"/>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
