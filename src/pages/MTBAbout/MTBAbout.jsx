import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Two_Column_About from '../MTBHome/Small_About/Two_Column_About/Two_Column_About'
import './MTBAbout.css';

const MTBAbout = () => {
  return (
    <div className='mtb__about'>
      <Navbar />
      <div className='mtb__about__wrapper'>
        <section className='mtb__about__intro'>
          <h1>We are Sundance MTB SKill Clinic.</h1>
          <p>Our Sundance program builds better bikers one skill at a time from the beginner through the advanced mountain bike rider.  We offer stellar instruction by passionate, experienced and certified coaches.</p>
          <p>We teach the fundamental skills from the ground up in a safe progressive building block manner in a fun energetic environment. Each fundamental skill is a progression to the next maneuver you wish to master on your bike. Our program will take your riding skills— literally, up in the air!</p>
        </section>
        <section className='mtb__about__break1'>
          <h2>
              "I loved my session with coach Sally! I've been mountain biking for about 6-7 years now and I was still nervous going in especially considering the laundry list of things I wanted to work on. Sally's instruction was great, she broke things down very well and helped me visualize what I need to do with my body position - she helped me do my first wheelie ever!"</h2>
              <h3>Janet Sherman</h3>
          
        </section>
        <section className='mtb__about__continued'>
          <div className='leftPictureAboutContinued'></div>
          <div className='rightTextAboutContinued'>
            <p className='rightTextAboutContinuedRegular'>We were founded by Sally Collins. Sally regularly transforms herself from a diminutive uptown hairdresser to a single track-shredding she-beast ripping through local mountain-bike trails all in the same day.</p>

            <p className='rightTextAboutContinuedRegular'>She spends her free time with her two Aussie rescue dogs, Charley Cheyenne and Sadie Cheyanne. They brighten her life, especially when they run the trails with her!</p>

            <p className='rightTextAboutContinuedSmall'>Sally is the owner and artistic director of Sundance SalonSpa, an award-winning Aveda Concept Salon, in the quaint village of Zionsville, Indiana. Her love for making people feel beautiful from the inside out started more than 30 years ago, when she first became a hairdresser. In 1994, she married Pete Collins, and in 1997, they opened Sundance SalonSpa. Four short years later in 2001, Sally lost Pete to Leukemia. It was her reconnection with the bicycle that kept her moving forward.</p>

          </div>
        </section>
      </div>
    </div>
  )
}

export default MTBAbout