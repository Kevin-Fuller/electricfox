import React from 'react'
import ImagePopup from '../ImagePopup/ImagePopup'
import './HomePageGallery.css'
import images from '../../constants/images'

const HomePageGallery = () => {
  return (
    <div className='home__gallery__wrapper'>
        {ImagePopup(images.img01, 'Camp director Fred Johnson giving a demo to our participants.')}
        {ImagePopup(images.img02, 'The Elite Group')}
        {ImagePopup(images.img03, 'Olympic Coach Shaums guiding a fellow coach')}
        {ImagePopup(images.img04, 'Third-Annual Sundance Coeed MTB Camp')}
        {ImagePopup(images.img05, 'Toby showing off his skills')}
        {ImagePopup(images.img06, 'Trey gaining his wings!')}


    </div>
  )
}

export default HomePageGallery