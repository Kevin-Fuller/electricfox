import React from 'react'
import './MTBMediaGrid.css'
import ImagePopup from '../ImagePopup/ImagePopup'
import images from '../../constants/images';
const MTBMediaGrid = () => {
  return (
    <div className='mtb__media__grid'>


      <div className='one-wide'>{ImagePopup(images.mtbimage05, 'Sponsored Pivot Cycles 24 Hour Solo Racer (2008)')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage03, 'Sally Coaching The Nebo Ridge Cycling Team')}</div>

      <div className='one-wide one-wide-quote'><h3>"Sally's hope is to help you find “YOU” again after life has thrown a wrench in your spokes."</h3></div>

      <div className='one-wide'>{ImagePopup(images.electricFoxStyalized, 'For Fox Sake, Get Out And Ride!')}</div>
      <div className='one-wide'>{ImagePopup(images.news, 'A few of our many newspaper features')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage01, 'Teammate Trey Getting Some Air')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage02, "Bump Jump Skit")}</div>
      <div className='two-wide'>{ImagePopup(images.trey, 'Trey Learning to Drop!')}</div>

      <div className='one-wide'>{ImagePopup(images.mtbimage04, 'Sally Created the Buffalo Soldiers Ride at Griffin Bike Parks')}</div>

      <div className='one-wide one-wide-quote'><h3>"Live your life that your energy inspires others to soar in a positive direction!"</h3><p></p></div>
      <div className='one-wide'>{ImagePopup(images.mtbimage06, 'Steve and His Son (Trevor) Enjoying Their Camp!')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage07, 'Sally Featured in Dirt Rag')}</div>


      <div className='two-wide'>{ImagePopup(images.mtbimage10, 'Sundance MTB Coed Camp')}</div>

      <div className='one-wide'>{ImagePopup(images.mtbimage08, 'Sally Featured in Mountain Bike Action Magazine')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage09, 'Coaching the Importance of the Wedge')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage11, 'Sally Coaching Her Leukemia & Lymphoma Society TNT Team in Tahoe!')}</div>
      <div className='one-wide'>{ImagePopup(images.mtbimage12, 'Coach Charles in a Fun Demo!')}</div>
      <div className='one-wide'>{ImagePopup(images.graphicFox, "Electric Fox 16th Annual Sundance Women's Mountain Bike and Outdoor Retreat")}</div>

      

      </div>
  )
}

export default MTBMediaGrid