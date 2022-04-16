import React, {useState, useEffect} from 'react';

import ElectricFoxNav from '../../components/navbar/ElectricFoxNav/ElectricFoxNav';
import ElectricFoxLoader from '../../components/ElectricFoxLoader/ElectricFoxLoader';
import {Images} from '../../constants';
import './Home.css';
import SwiperPage from '../../components/SwiperPage/SwiperPage'

const Home = () => {
  
  return (
    <div className='homePage'>
      <ElectricFoxLoader />
      <ElectricFoxNav />
      <div className='home-page-wrapper'>
        <div className='home-page-wrapper-content'>
      <div className='home-landing-hero'>
        <div className='home-landing-content'>
          <p>Your one stop shop for bla bla</p>
          <h1>Electric <span className="fox">Fox</span><br></br>at Sundance</h1>
          <h2>Content is goin ghere we will put it here is where the content goes.</h2>
          <div className='landing-content-button-wrapper'>
            <a href="" className='landing-content-button mtb-button'>MTB</a>
            <a href="" className='landing-content-button salon-button'>Salon</a>
          </div>
        </div>
        <div className='home-landing-graphic'></div>
      </div>
      <section className='homeLatestNews'>
        {/* <img className='homePageHero' src={Images.BWBG} /> */}
        <div className='homeHeroContent'>
          <h1>Latest News</h1>
          <SwiperPage />
        </div>
      </section>
      <section className='aboutUsHome'>
        <div className='aboutUsHomeContent'>
          <h2>About us</h2>
          <p>Sally Marchand Collins regularly transforms herself from a diminutive uptown hairdresser to a single track-shredding she-beast ripping through local mountain-bike trails all in the same day.</p>
          <p>Sally Marchand Collins regularly transforms herself from a diminutive uptown hairdresser to a single track-shredding she-beast ripping through local mountain-bike trails all in the same day.</p>
          <p>Sally Marchand Collins regularly transforms herself from a diminutive uptown hairdresser to a single track-shredding she-beast ripping through local mountain-bike trails all in the same day.</p>
          <p>Sally Marchand Collins regularly transforms herself from a diminutive uptown hairdresser to a single track-shredding she-beast ripping through local mountain-bike trails all in the same day.</p>
        </div>
        <div className='aboutUsHomeGraphic'>

          
        </div>


      </section>
      </div>
      <div className='home-shape1'></div>
      <div className='home-shape2'></div>
      <div className='home-shape3'></div>
      <div className='home-shape4'></div>
      </div>
    </div>
  )
}

export default Home