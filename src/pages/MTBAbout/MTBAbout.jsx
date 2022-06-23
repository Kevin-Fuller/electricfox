import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Two_Column_About from '../MTBHome/Small_About/Two_Column_About/Two_Column_About'
import './MTBAbout.css';
import images from '../../constants/images';

const MTBAbout = () => {
  document.title = "About"
  return (
    <div className='mtb__about'>
      <Navbar />
      <div className='mtbaboutbgwrapper'>
      <div className='mtb__about__wrapper'>
        <section className='mtb__about__intro'>
          <h1>Sundance MTB SKills Clinic.</h1>
          <p>Sundance MTB Skills Clinic builds better bikers one skill at a time from the beginner through the advanced mountain biker.  We offer stellar instruction by passionate, experienced and certified coaches.</p>
          <p>We teach the fundamental skills from the ground up in a safe progressive building block manner in a fun energetic environment. Each fundamental skill is a progression to the next maneuver you wish to master on your bike. Our program will take your riding skills— literally, up in the air!</p>
        </section>
        <section className='mtb__about__break1'>
          <h2>
              "I loved my session with coach Sally! I've been mountain biking for about 6-7 years now and I was still nervous going in especially considering the laundry list of things I wanted to work on. Sally's instruction was great, she broke things down very well and helped me visualize what I need to do with my body position - she helped me do my first wheelie ever!"</h2>
              <h3>Janet Sherman</h3>
          
        </section>
        </div>
        <img className='mtb__bg__Test' src={images.mtbbgabouttest}></img>
        </div>

        <section className='mtb__about__continued'>
          <div className='mtb__about__wrapper'>
          <h2>Meet Sally!</h2>
            <div className='mtb__about__continued'>
              
          <div className='leftPictureAboutContinued'>
            <img src={images.sally} />
            <p>Sally Marchand Collins</p>
          </div>
          <div className='rightTextAboutContinued'>
            <p className='rightTextAboutContinuedRegular'>Sally Marchand Collins has been a mountain bike instructor since 2003 and is the owner and chief enthusiasm officer of Sundance MTB Skills
Clinic and Adventure, LLC, offering elite mountain bike skills instruction, bike retreats, team building bike
camps, racing tactics on-trail clinics, mountain biking trail guide, professional mountain bike fitting
service, and public speaking engagements.</p>

            <p className='rightTextAboutContinuedRegular'>Recently, she started Sundance MTB Powered by Electric Fox, a mountain bike race team and club to
build youth and adult’s confidence, leadership skills, and fitness through mountain biking.</p>

            <p className='rightTextAboutContinuedSmall'>Sally enjoys fundraising, having raised $40,000 for trails in multiple state parks throughout the Midwest
and $150,000 for the Leukemia and Lymphoma Society (LLS) and has been coaching the LLS Team In
Training cycling team since 2002. She lost her husband in 2001 to leukemia and finds working with others
during their tough times and providing comfort when life becomes minus one to be at the heart of what
she does.</p>

          </div>
          </div>
          </div>
        </section>


        <section className='mtb__about__intro__2'>
          <div className='mtb__about__wrapper'>
     

          

          <div className='mtb__about__intro__left__right__container'>
          <div className='mtb__about__intro__left'>
          <h2>Giving Back</h2>
            <p>Sally Marchand Collins and Sundance MTB Skills Clinic have a commitment to giving back with mountain
bike skills clinics to support neighboring trails throughout the Midwest.
She and a team of volunteers and coaches have raised $40,000 for trails in Brown County State Park, Hassmer Fest
(Versailles State Park), Griffin Bike Park, Baker’s Creek Trail System in Knoxville, TN (AMBC), Fay
Pickering Memorial Mountain Bike Trails Marshall, IL, and Crawford County Nature Preserve in Robinson, IL.
</p></div>

          <div className='mtb__about__intro__right'>
            <span className='mtb__about__intro__right__highlight'>$40,000+</span>
            <p>Raised for trails in the Midwest</p>
          </div>
          </div>
          <div className='about__line'></div>

          <div className='mtb__about__intro__left__right__container'>
          <div className='mtb__about__intro__left'>
          <h2>Commitment to our trails</h2>
            <p>Sundance MTB Skills Clinic, along with PMBIA and B-ICP Certified coaches created the first Skills Clinic at the Brown County EPIC in 2016. Sally’s vision was to conduct a skills clinic fundraiser to produce signage throughout the trail system in Brown County State Park, Nashville, IN.</p>
            
            <p>This clinic was designed for the beginner to the advanced mountain biker.  Participants learned the foundational mountain bike skills which quickly transitioned them to bunny-hops, jumps, and drops.
</p></div>

          <div className='mtb__about__intro__right'>
            <img className='rightImageLogoIntoAbout' src={images.brownepic}></img>
            <p></p>
          </div>
          </div>

          <div className='about__line'></div>

          <div className='mtb__about__intro__left__right__container'>
          <div className='mtb__about__intro__left'>
          <h2>dedicated to our community</h2>
            <p>Sally has reached the Silver Status of $10,000 with Griffin Bike Park, is a consistent supporter for Freewheelin’ Communtiy Bikes, has raised over $150,000 for the Leukemia and Lymphoma Society.</p><p>Sally is a volunteer fire fighter for Fruitdale Volunteer Fire Department August 19, 2020 Nashville, IN and created 911 Bike Ride/Walk/Run to support JTFD and America’s 911 Memorial Foundation.</p>
            <p>She continues to participant in Earth Day clean-up in the Nashville area and Zionsville Indiana. She serves on Brown County State Park’s trail maintenance crew with chainsaw work and fixing trails.
</p></div>

          <div className='mtb__about__intro__right'>
          <img className='rightImageLogoIntoAbout' src={images.fire}></img>
            <p></p>
          </div>
          </div>




  
</div>
        </section>
      </div>
    
  )
}

export default MTBAbout