import React from 'react'
import ImagePopup from '../ImagePopup/ImagePopup'
import './HomePageGallery.css'
import images from '../../constants/images'

const HomePageGallery = () => {
  return (
    <div className='home__gallery__wrapper'>
        {ImagePopup(images.img01, 'A great bike')}
        {ImagePopup(images.img02, 'A great bike')}
        {ImagePopup(images.img03, 'A great bike')}
        {ImagePopup(images.img04, 'A great bike')}
        {ImagePopup(images.img05, 'A great bike')}
        {ImagePopup(images.img06, 'A great bike')}


    </div>
  )
}

export default HomePageGallery