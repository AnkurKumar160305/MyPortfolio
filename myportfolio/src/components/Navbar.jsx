import React from 'react'   
import './Navbar.css' 

const Navbar = () => {
  return (
    <div class='navbar'>
        <p className='navTitle'>Ankur</p>
        <div className='navList'>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </div>
        <div className='navButtton'>
            <a href="#contact" className='contact'>
                <button className='contactBtn'>Contact</button>
                <img className='contact-icon' src="./src/assets/add-user.png" alt="" />
            </a>
        </div>
    </div>
  )
}

export default Navbar
