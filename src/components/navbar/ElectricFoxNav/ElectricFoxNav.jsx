import React from 'react';
import './ElectricFoxNav.css';

const ElectricFoxNav = () => {
  return (
    <nav className="electric-fox-nav">
        <ul>
            <li><a href="/" className='efLogoNav'>Electric Fox</a></li>
            <li><a href="/biking/">Sundance MTB</a></li>
            <li><a href="/salon/">Electric Fox Salon</a></li>
        </ul>
    </nav>
  )
}

export default ElectricFoxNav