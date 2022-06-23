import React from 'react'
import './navbar.css';
import ElectricFoxNav from './ElectricFoxNav/ElectricFoxNav';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to='/biking'>Sundance MTB Clinic</Link>
        </div>
        <div className={isActive ? "navbar-toggle active" : "navbar-toggle"} onClick={() =>ToggleClass()}>
          <div className='navLine1 navLine'></div>
          <div className='navLine2 navLine'></div>
          <div className='navLine3 navLine'></div>
        </div>
        
        <ul className={isActive ? "active" : ""}>
          <li><Link to='/biking/about'>About</Link></li>
          <li><Link to='/biking/programs'>Programs</Link></li>
          <li><Link to='/biking/media/'>Media</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar