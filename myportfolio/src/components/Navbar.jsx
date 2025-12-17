import React, { useState, useEffect } from 'react';
import './Navbar.css';
import StaggeredMenu from './Navmenu.jsx';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile state on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="navbar">
      <p className="navTitle">Ankur</p>

      {/* Desktop nav links */}
      <div className="navList">
        <ul className="navLinks">
          <li className="navItem home"><a href="#home" className="navLink">HOME</a></li>
          <li className="navItem about"><a href="#about" className="navLink">ABOUT</a></li>
          <li className="navItem skills"><a href="#skills" className="navLink">SKILLS</a></li>
          <li className="navItem projects"><a href="#projects" className="navLink">PROJECTS</a></li>
        </ul>
      </div>

      {/* Staggered menu for small screens */}
      <div className="staggeredMenuWrapper">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          logoUrl="/path-to-your-logo.svg"
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>

      {/* Social Icons */}
      <div className="socialIcons">
        <a href="https://github.com/AnkurKumar160305" target="_blank" rel="noopener noreferrer">
          <img className="socialIcon" src="./src/assets/social (1).png" alt="GitHub"/>
        </a>
        <a href="https://www.linkedin.com/in/ankur-kumar-833026284/" target="_blank" rel="noopener noreferrer">
          <img className="socialIcon" src="./src/assets/social (2).png" alt="LinkedIn"/>
        </a>
        <a href="https://leetcode.com/u/qDCkfvJavE/" target="_blank" rel="noopener noreferrer">
          <img className="socialIcon" src="./src/assets/leetcode.svg" alt="LeetCode"/>
        </a>
      </div>
    </div>

  );
};

export default Navbar;
