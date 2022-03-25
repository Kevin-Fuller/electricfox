import React, {useState, useEffect} from 'react';

import ElectricFoxNav from '../../components/navbar/ElectricFoxNav/ElectricFoxNav';
import ElectricFoxLoader from '../../components/ElectricFoxLoader/ElectricFoxLoader';
import {Images} from '../../constants';
import './Home.css';

const Home = () => {
  
  return (
    <div>
      <ElectricFoxLoader />
      <ElectricFoxNav />
      <img className='homePageHero' src={Images.BWBG} />
      <div className='bigButtonWrapper'>
        <a href="#" className='bigButton'>
          <div className='bigButtonLeft'></div>
          <div className='bigButtonRight'>
            <h2>Electric Fox Hair Salon</h2>
            <p>Get the look you want from an expert with 10+ years experience</p>
          </div>
        </a>
        <a href="/biking/" className='bigButton'>
          <img src={Images.bgMain} />
          <div className='bigButtonLeft'>
            
          </div>
          <div className='bigButtonRight'>
            <h2>Sundance Mountain Biking Skill Clinic</h2>
            <p>A mountain biking clinic for both beginners and experts</p>
          </div>
          </a>
      </div>
    </div>
  )
}

export default Home