import React from 'react'
import './MTBMediaGrid.css'
import ImagePopup from '../ImagePopup/ImagePopup'
import images from '../../constants/images';
const MTBMediaGrid = () => {
  return (
    <div className='mtb__media__grid'>


      <div className='one-wide'>{ImagePopup(images.mtbimage05, 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage03, 'A great ')}</div>

      <div className='one-wide one-wide-quote'><h3>"Sally's hope is to help you find “YOU” again after life has thrown a wrench in your spokes."</h3></div>

      <div className='one-wide'>{ImagePopup(images.electricFoxStyalized, 'For Fox Sake, Get Out And Ride!')}</div>
      <div className='one-wide'>{ImagePopup(images.news, 'A few of our many newspaper features')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage01, 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage02, 'A great ')}</div>
      <div className='two-wide'>{ImagePopup(images.trey, 'A great ')}</div>

      <div className='one-wide'>{ImagePopup(images.mtbimage04, 'A great ')}</div>

      <div className='one-wide one-wide-quote'><h3>"Sally really knows what she is doing and how to encourage people"</h3><p>John Johnson</p></div>
      <div className='one-wide'>{ImagePopup(images.mtbimage06, 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage07, 'A great ')}</div>


      <div className='two-wide'>{ImagePopup(images.mtbimage10, 'A great ')}</div>

      <div className='one-wide'>{ImagePopup(images.mtbimage08, 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage09, 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage11, 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage12, 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage13, 'A great ')}</div>

      

      </div>
  )
}

export default MTBMediaGrid