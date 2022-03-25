import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import './MTBMedia.css';
import MTBMediaGrid from '../../components/MTBMediaGrid/MTBMediaGrid';

const MTBMedia = () => {
  return (
    <div className='mtb__media'>
        <Navbar /> 
        <div className='mtb__media__wrapper'>
        MTBMedia
        <MTBMedia />
        </div>
    </div>
  )
}

export default MTBMedia