import React from 'react'
import './MTBPrograms.css'
import Navbar from '../../components/navbar/Navbar'
import ProgramCards from '../../components/ProgramCards/ProgramCards'

const MTBPrograms = () => {
  return (
    <div className='mtb__programs__page'>
        <Navbar />
        <div className='mtb__programs__page__wrapper'>
            <section className='mtb__programs__intro'>
            <h1>Our Programs.</h1>
            <p>Sundance teaches energizing and empowering custom clinics and camps for women, men, youth, teens, couples, families, senior citizens, cancer survivors, TNT friends, Para Riders, military and first responders.</p>
            <p>We dial in the fundamental mountain bikes skills while advancing each person to ride technical trails, bunny-hops, drops, wheelies, pedal lifts, jumps, high speed turns, carving corners, railing berms, plus so much more!</p>
            </section>
            <ProgramCards />    
        </div>
        </div>
  )
}

export default MTBPrograms