import React from 'react'
import './navbar.css';
import ElectricFoxNav from './ElectricFoxNav/ElectricFoxNav';
import { useState, useEffect } from 'react';

const Navbar = () => {
  
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive); 
   };

  return (
    <>
    <ElectricFoxNav></ElectricFoxNav>
    <nav className='defaultNavbar'>
      <div className="navbar__container">
        <div className='nav__logo'>
          <a href='biking'>Sundance MTB Clinic</a>
        </div>
        <div className={isActive ? "navbar-toggle active" : "navbar-toggle"} onClick={() =>ToggleClass()}>
          <div className='navLine1 navLine'></div>
          <div className='navLine2 navLine'></div>
          <div className='navLine3 navLine'></div>
        </div>
        <ul className={isActive ? "active" : ""}>
          <li><a href='biking/about'>About</a></li>
          <li><a href='biking/programs'>Programs</a></li>
          <li><a href='biking/media/'>Media</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar