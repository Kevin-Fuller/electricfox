import React from 'react'
import './MTBMediaGrid.css'
import ImagePopup from '../ImagePopup/ImagePopup'
const MTBMediaGrid = () => {
  return (
    <div className='mtb__media__grid'>


      <div className='one-wide'>{ImagePopup('https://media.istockphoto.com/photos/funny-downhill-on-small-kids-balance-bike-picture-id1297032346?b=1&k=20&m=1297032346&s=170667a&w=0&h=fBPRzNWxypMwvemKfhOiEd15q78XZ0qnkiC8tc0EoHw=', 'A great ')}</div>
      <div className='one-wide'>{ImagePopup('https://media.istockphoto.com/photos/funny-downhill-on-small-kids-balance-bike-picture-id1297032346?b=1&k=20&m=1297032346&s=170667a&w=0&h=fBPRzNWxypMwvemKfhOiEd15q78XZ0qnkiC8tc0EoHw=', 'A great ')}</div>

      <div className='one-wide one-wide-quote'><h3>"The Best Experience I've ever had mountainbiking"</h3><p>Ben Benson</p></div>

      <div className='one-wide'>{ImagePopup('https://media.istockphoto.com/photos/funny-downhill-on-small-kids-balance-bike-picture-id1297032346?b=1&k=20&m=1297032346&s=170667a&w=0&h=fBPRzNWxypMwvemKfhOiEd15q78XZ0qnkiC8tc0EoHw=', 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(' ', 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(' ', 'A great ')}</div>
      <div className='one-wide'>{ImagePopup('https://media.istockphoto.com/photos/funny-downhill-on-small-kids-balance-bike-picture-id1297032346?b=1&k=20&m=1297032346&s=170667a&w=0&h=fBPRzNWxypMwvemKfhOiEd15q78XZ0qnkiC8tc0EoHw=', 'A great ')}</div>
      <div className='two-wide'>{ImagePopup('https://media.istockphoto.com/photos/funny-downhill-on-small-kids-balance-bike-picture-id1297032346?b=1&k=20&m=1297032346&s=170667a&w=0&h=fBPRzNWxypMwvemKfhOiEd15q78XZ0qnkiC8tc0EoHw=', 'A great ')}</div>

      <div className='one-wide'>{ImagePopup(' ', 'A great ')}</div>

      <div className='one-wide one-wide-quote'><h3>"Sally really knows what she is doing and how to encourage people"</h3><p>John Johnson</p></div>
      <div className='one-wide'>{ImagePopup(' ', 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(' ', 'A great ')}</div>


      <div className='two-wide'>{ImagePopup(' ', 'A great ')}</div>

      <div className='one-wide'>{ImagePopup(' ', 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(' ', 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(' ', 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(' ', 'A great ')}</div>
      <div className='one-wide'>{ImagePopup(' ', 'A great ')}</div>

      

      </div>
  )
}

export default MTBMediaGrid