import React, {useState, useEffect} from 'react';

import ElectricFoxNav from '../../components/navbar/ElectricFoxNav/ElectricFoxNav';
import ElectricFoxLoader from '../../components/ElectricFoxLoader/ElectricFoxLoader';
import {Images} from '../../constants';
import './Home.css';
import SwiperPage from '../../components/SwiperPage/SwiperPage'
import images from '../../constants/images';

const Home = () => {
  
  return (
    <div className='homePage'>
      <ElectricFoxLoader />
      <ElectricFoxNav />
      <div className='homepagehero'>
        <div className='homepageheroleft'>
          <img src={images.BWBG1}></img>
          <div className='homepageheroleftcontent'>
            <h1>Welcome to <span className='orange'>Electric Fox</span> at <span className='green'>Sundance.</span></h1>
            <p>We are a company founded by sally. We specialize in both mountainbiking services and hair.</p>
            <div className='homebuttoncontainer'>
              <a href="#" className='homepagebutton homepagebuttonmtb'>Sundance MTB Skill Clinic</a>
              <a href="#" className='homepagebutton homepagebuttonsalon'>Electric Fox Hair Salon</a>
            </div>
          </div>
        </div>
        <div className='homepageheroright'></div>
        <div className='mainLogoHome'><img src={images.circlelogo}></img></div>
      </div>
      <div className='home-page-wrapper'>
      <section className='homepage__about__intro'>
            <h1>Electric Fox is changing the game</h1>
            <p>Our SalonSpa is an AVEDA Concept salon and spa offering complete, professional services through the pursuit of environmental sustainability. We are located downtown at the heart of the charming small-town, Zionsville.</p>
            <p>Our Sundance program builds better bikers one skill at a time from the beginner through the advanced mountain biker. We offer stellar instruction by passionate, experienced and certified coaches.</p>
            <div className='homebuttoncontainer'>
              <a href="#" className='homepagebutton homepagebuttonmtb'>Learn to ride!</a>
              <a href="#" className='homepagebutton homepagebuttonsalon'>Get the perfect cut!</a>
            </div>
            <div className='homepageImageContainer'>
              <img src={images.trey} className='homepageImage1'></img>
              <img src='https://images.bizbuysell.com/shared/listings/182/1826022/b40a91f9-67af-49d0-bb74-4e824207db74-W768.jpg' className='homepageImage2'></img>
              <img src={images.mtbimage10} className='homepageImage3'></img>
            </div>
          </section>
          
      </div>
    </div>
  )
}

export default Home