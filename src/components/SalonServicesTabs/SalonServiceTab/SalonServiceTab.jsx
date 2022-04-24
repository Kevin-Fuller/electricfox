import React from 'react'
import { useState } from 'react'
import './SalonServiceTab.css'

function SalonServiceTab(title, information, image){
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive); 
   };
  return (
    <div className='service__tab__salon__item'>
    <div className='tab__clickable__title' onClick={()=>ToggleClass()}>{title}<span className={isActive ? "active__salon__arrow active" : "active__salon__arrow"}>➤</span></div>

    <div className='tabIndividualContent'>
      <img src={image} className={isActive ? "tab__content__hidden active" : "tab__content__hidden"}></img>
      <div className={isActive ? "tab__content__hidden active" : "tab__content__hidden"}>{information }</div>
    </div>

    </div>
  )
}

export default SalonServiceTab