import React, {useState, useEffect} from 'react';

import ElectricFoxNav from '../../components/navbar/ElectricFoxNav/ElectricFoxNav';
import ElectricFoxLoader from '../../components/ElectricFoxLoader/ElectricFoxLoader';
import {Images} from '../../constants';
import './Home.css';
import SwiperPage from '../../components/SwiperPage/SwiperPage'
import images from '../../constants/images';
import { Link } from 'react-router-dom';

const Home = () => {
  document.title = "Electric Fox at Sundance"
  return (
    <div className='homePage'>
      <ElectricFoxLoader />
      <ElectricFoxNav />
      <div className='homepagehero'>
        <div className='homepageheroleft'>
          <img src={images.BWBG1} alt='decorative vector background mountain' aria-hidden="true"></img >
          <div className='homepageheroleftcontent'>
            <h1><span className='orange'>Sally Marchand Collins</span> Invites You To Experience Her <span className='green'>Two Passions.</span></h1>
            <p>She is an award winning hairstylist and owner of one of the top 10 "Must Attend" Mountain Bike Camps in the US. </p>
            <div className='homebuttoncontainer'>
            <Link to='/biking' className='homepagebutton homepagebuttonmtb'>Sundance MTB Skill Clinic</Link>
            <Link to='/salon' className='homepagebutton homepagebuttonsalon'>Electric Fox AVEDA Concept Salon</Link>
            </div>
          </div>
        </div>
        <div className='homepageheroright'></div>
        <div className='mainLogoHome'><img src={images.logoLong2} alt='Electric Fox at Sundance Logo'></img><img src={images.mainLogoMTB} alt='Sundance MTB Skill Clinic Logo'></img></div>
      </div>
      <div className='home-page-wrapper'>
      <section className='homepage__about__intro'>
            <h1>Sally is changing the game</h1>
            <p>Her Electric Fox at Sundance AVEDA Concept Salon offers complete hair design, color techniques, and cosmetic makeovers. We are located downtown at the heart of the charming small-town Zionsville.</p>
            <p>Her Sundance MTB Skills Clinic offers stellar coaching, building better bikers one skill at a time from the beginner through the advanced mountain biker.</p>
            <div className='homebuttoncontainer'>
            <Link to='/biking' className='homepagebutton homepagebuttonmtb'>Learn to ride!</Link>
            <Link to='/salon' className='homepagebutton homepagebuttonsalon'>Get the perfect cut!</Link>
            </div>
            <div className='homepageImageContainer'>
              <img src={images.trey} className='homepageImage1' alt='boy mountain biking'></img>
              <img src={images.thumbnail} className='homepageImage2' alt='salon lounge'></img>
              <img src={images.mtbimage10} className='homepageImage3' alt='mountain biking group photo'></img>
            </div>
          </section>
          
      </div>
    </div>
  )
}

export default Home