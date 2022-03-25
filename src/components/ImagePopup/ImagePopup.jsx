import React from 'react'
import "./ImagePopup.css"
import { useState } from 'react'

function ImagePopup(image, description){

    const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!isActive); 
   };

   const EnableActive= () => {
    setActive(true)
   };

  return (
    <div className={isActive ? "imagePopUpContainer active" : "imagePopUpContainer"}
    >
        <div onClick={() =>ToggleClass()} className='imagePopUpContainer__wrapper' >

        <img className='popUpImage noselect' src={image}></img>
        <p className='popUpImageText'>{description}</p>

        </div>
    </div>
  )
}

export default ImagePopup