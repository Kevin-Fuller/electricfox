import React from 'react';
import { Link } from 'react-router-dom';
import './ElectricFoxNav.css';

const ElectricFoxNav = () => {
  return (
    <nav className="electric-fox-nav">
        <ul>
            <li><Link to="/" className='efLogoNav'>Electric Fox</Link></li>
            <li><Link to="/biking/">Sundance MTB</Link></li>
            <li><Link to="/salon/">Electric Fox Salon</Link></li>
        </ul>
    </nav>
  )
}

export default ElectricFoxNav