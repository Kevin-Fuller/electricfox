import React from 'react'
import SalonNavbar from '../../components/navbar/salonNav/SalonNavbar'
import './SalonServices.css';

const SalonServices = () => {
  return (
    <div id='salonServices'>
        <SalonNavbar />
        <div className='salon__programs__page__wrapper'>
            <section className='salon__programs__intro'>
            <h1>Our Services.</h1>
            <p>Sundance teaches energizing and empowering custom clinics and camps for women, men, youth, teens, couples, families, senior citizens, cancer survivors, TNT friends, Para Riders, military and first responders.</p>
            <p>We dial in the fundamental mountain bikes skills while advancing each person to ride technical trails, bunny-hops, drops, wheelies, pedal lifts, jumps, high speed turns, carving corners, railing berms, plus so much more!</p>
            </section>  
        </div>
    </div>
  )
}

export default SalonServices