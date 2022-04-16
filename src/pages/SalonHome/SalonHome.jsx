import React from 'react'
import SalonNavbar from '../../components/navbar/salonNav/SalonNavbar';
import {Images} from '../../constants'
import Biking_parallax from '../../components/biking_parallax/Biking_parallax';
import './SalonHome.css';
import SwiperPage from '../../components/SwiperPage/SwiperPage'
import Small_About from '../MTBHome/Small_About/Small_About'
import HomePageGallery from '../../components/HomePageGallery/HomePageGallery';
import images from '../../constants/images';


const SalonHome = () => {
  return (
    <div id='salon__home'>
        <SalonNavbar></SalonNavbar>
        {Biking_parallax(Images.bg, Images.bg6, Images.bg5, Images.bg4, Images.bg3, Images.bg2, Images.bg1, Images.mainLogoMTB, Images.bgMain)}
        <div className='salonAboutWrapperRel'>
        <div className='salon__about__wrapper'>
          <section className='salon__about__intro'>
            <h1>Welcome to Electric Fox Salon.</h1>
            <p>Sundance SalonSpa is an AVEDA Concept salon and spa offering complete, professional services through the pursuit of environmental sustainability. We are located downtown at the heart of the charming small-town, Zionsville.</p>
            <p>We believe in creating a peaceful environment and restoring the balance of our guests by nurturing the mind and body. We want to inspire and educate all guests to integrate wellness and beauty in their lives. We believe in treating ourselves, each other and the planet with care and respect.</p>
            <a href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=3142" target="_blank" className='orderProduct'>order product</a>
          </section>
        </div>
        

        <section className='salon__about__break1'>
          <h2>
              "I loved my session with coach Sally! I've been mountain biking for about 6-7 years now and I was still nervous going in especially considering the laundry list of things I wanted to work on. Sally's instruction was great, she broke things down very well and helped me visualize what I need to do with my body position - she helped me do my first wheelie ever!"</h2>
              <h3>Janet Sherman</h3>
          
        </section>
        <img className='salonBGAbout' src={images.salonaboutbg} />
      </div>
        <div className='salon__homepage'>
                  <div className='salon__about__wrapper'>
                    <h2>Meet Sally!</h2>

                    <div className='salon__about__continued'>
              
                      <div className='leftPictureAboutContinued'>
                        <img src={images.sally} />
                        <p>Sally Collins, CEO</p>
                      </div>


                      <div className='rightTextAboutContinued'>
                        <p className='rightTextAboutContinuedRegular'>Voted Best Hair Stylist by Indianapolis Monthly</p>

                        <p className='rightTextAboutContinuedRegular'>Sally Marchand Collins has been a passionate award-winning hairstylist since 1986 and is owner and artistic director of Sundance SalonSpa in Zionsville, Indiana since 1997.</p>

                        <p className='rightTextAboutContinuedSmall'>Sshe is owner of Electric Fox, offering professional mountain bike fitting service, customized training programs, race events, mobile assistance to mountain bikers along with bike rentals, and public speaking engagements.</p>

                        <p className='rightTextAboutContinuedSmall'>Sally enjoys fundraising, having raised $40,000 for trails in multiple state parks throughout the Midwest and $150,000 for the Leukemia and Lymphoma Society (LLS) and has been coaching the LLS Team In Training cycling team since 2002. She lost her husband in 2001 to leukemia and finds working with others during their tough times and providing comfort when life becomes minus one to be at the heart of what she does.</p>

                      </div>
                    </div>
                  </div>
                  </div>


                     <section className='salon__about__intro__2'>
         
          <div className='mtb__about__wrapper'>
     

          

          <div className='mtb__about__intro__left__right__container'>
          <div className='mtb__about__intro__left'>
          <h2>Let's talk numbers</h2>
            <p>Sally Marchand Collins and Sundance MTB Skills Clinic have a commitment to giving back with mountain
bike skills clinics to support neighboring trails throughout the Midwest.
She and a team of volunteers and coaches have raised $40,000 for trails in Brown County State Park,
Versailles State Park, Griffin Bike Park, Baker’s Creek Trail System in Knoxville, TN (AMBC), Fay
Pickering Memorial Mountain Bike Trails Marshall, IL, Crawford County Nature Preserve in Robinson, IL.
</p></div>

          <div className='mtb__about__intro__right'>
            <span className='salon__about__intro__right__highlight'>$40,000+</span>
            <p>Raised for trails and parks</p>
          </div>
          </div>
          <div className='salon__about__line'></div>

          <div className='mtb__about__intro__left__right__container'>
          <div className='mtb__about__intro__left'>
          <h2>Commitment to our craft</h2>
            <p>Sundance MTB Skills Clinic, along with IMBA-ICP and PMBIA Certified Level 1 and 2 coaches throughout the Midwest hosted THE Brown County EPIC’s first mountain bike skills clinic on October 8, 2016. Sally’s vision was to conduct a clinic as a trail fundraiser. This clinic was designed for the beginner to the advanced mountain biker.  Participants learned the fundamental skills takes to take  mountain bikers to a more advanced level.
</p></div>

          <div className='mtb__about__intro__right'>
            <span className='salon__about__intro__right__highlight'>900+</span>
            <p>Unique Bikers</p>
          </div>
          </div>

          <div className='salon__about__line'></div>

          <div className='mtb__about__intro__left__right__container'>
          <div className='mtb__about__intro__left'>
          <h2>We are dedicated to our community</h2>
            <p>Sally has reached the Silver Status of $10,000 with Griffin Bike Park, is a consistent supporter for Freewheelin’ Communtiy Bikes, has raised over $150,000 for the Leukemia and Lymphoma Society.</p><p>She has joined Jackson Township Fire Department (Vounteer Fire Fighter #520) August 19, 2020 Nashville, IN and created 911 Bike Ride/Walk/Run to support JTFD and America’s 911 Memorial Foundation.</p>
            <p>She continues to participant in Earth Day clean-up in the Nashville area and Zionsville Indiana. She serves on Brown County State Park’s trail maintenance crew with chainsaw work and fixing trails.
</p></div>

          <div className='mtb__about__intro__right'>
            <span className='salon__about__intro__right__highlight'>900+</span>
            <p>Unique Bikers</p>
          </div>
          </div>




  
</div>
        </section>
        
        </div>
  )
}

export default SalonHome