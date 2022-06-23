import React from 'react'
import './SalonNavbar.css';
import ElectricFoxNav from '../ElectricFoxNav/ElectricFoxNav';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SalonNavbar = () => {
  
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
          <Link to='/salon'>Electric Fox at Sundance</Link>
        </div>
        <div className={isActive ? "navbar-toggle active" : "navbar-toggle"} onClick={() =>ToggleClass()}>
          <div className='navLine1 navLine'></div>
          <div className='navLine2 navLine'></div>
          <div className='navLine3 navLine'></div>
        </div>
        <ul className={isActive ? "active" : ""}>
          <li><a href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=3142" target="_blank">Order Product</a></li>
          <li><Link to='/salon/services'>Services</Link></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default SalonNavbar