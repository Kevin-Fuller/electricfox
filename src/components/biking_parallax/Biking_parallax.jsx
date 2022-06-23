import React from 'react'
import './Biking_parallax.css';
import {Images} from '../../constants/';
import { useState, useEffect } from 'react';

function Biking_parallax(imgbg, img1, img2, img3, img4, img5, img6, logo, solidBg){
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('scroll', processScroll);
  });

  let winScrollAmount = 0;
  function processScroll() {
    if(scrollPosition > 1000) {
      winScrollAmount = 1000;
    } else {
      winScrollAmount = scrollPosition;
    }
  }

  return (
    <div className='parallaxWrapper'>
      <img className="parallaxMobile" src={solidBg}></img>
      <div className='parallax'>
            <img className="bg" src={imgbg} alt='decorative background parallax'/>
            <img className="bg6" src={img1} style={{transform: `translateY(${scrollPosition / 13}%)`}} alt='decorative background parallax'/>
            <img className="bg5" src={img2} style={{transform: `translateY(${scrollPosition / 15}%)`}} alt='decorative background parallax'/>
            <img className="parallaxText" src={logo} style={{transform: `translate(-50%,  ${-60 + (scrollPosition / 8)}%)`}} alt='logo' />
            <img className="bg4" src={img3} style={{transform: `translateY(${scrollPosition / 20}%)`}} alt='decorative background parallax'/>
            <img className="bg3" src={img4} style={{transform: `translateY(${scrollPosition / 28}%)`}} alt='decorative background parallax'/>
            <img className="bg2" src={img5} style={{transform: `translateY(${scrollPosition / 30}%)`}} alt='decorative background parallax'/>
            <img className="bg1" src={img6}  alt='decorative background parallax'/>
      </div>
    </div>
  )
}

export default Biking_parallax