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
  document.title = "Electric Fox Salon"
  function calculateAge() { // birthday is a date
    var ageDifMs = Date.now();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1997);
  }
  return (
    <div id='salon__home'>
        <SalonNavbar></SalonNavbar>
        <div className='parallaxSalonWrapper'>
        {Biking_parallax(Images.bg, Images.bg6, Images.bg5, Images.bg4, Images.bg3, Images.bg2, Images.bg1, Images.logoLong2, Images.salonMountainPhone)}
        </div>
        <div className='salonAboutWrapperRel'>
        <div className='salon__about__wrapper'>
          <section className='salon__about__intro'>
            <h1>Welcome to Electric Fox at Sundance <br></br><span className='aveda-title-small'>an AVEDA Concept Salon</span>.</h1>
            <p>Electric Fox at Sundance (formally Sundance SalonSpa) is an AVEDA Concept Salon offering complete, professional services through the pursuit of environmental sustainability. We are located downtown at the heart of the charming small-town, Zionsville, IN.</p>
            <p>Sally Marchand Collins believes in creating a peaceful environment and restoring the balance of our guests by nurturing the mind and body. She inspires and educates all guests to integrate wellness and beauty in their lives. She believes in treating ourselves, each other, and the planet with care and respect.</p>
            <a href="https://www.aveda.com/locator/get_the_facts.tmpl?vanity=1&SalonID=3142" target="_blank" className='orderProduct'>order product</a>
          </section>
        </div>
        

        <section className='salon__about__break1'>
          <h2>
              "My husband, Pete, and I dreamed of having our own salon – a place that we could be proud of."</h2>
              <h3>Sally Marchand Collins</h3>
          
        </section>
        <img className='salonBGAbout' src={images.salonaboutbg} />
      </div>
        <div className='salon__homepage'>
                  <div className='salon__about__wrapper'>
                    <h2>Meet Sally!</h2>

                    <div className='salon__about__continued'>
              
                      <div className='leftPictureAboutContinued'>
                        <img src={images.sally} />
                        <p>Sally Marchand Collins</p>
                      </div>


                      <div className='rightTextAboutContinued'>
                        <p className='rightTextAboutContinuedRegular'>Voted Best Hair Stylist by Indianapolis Weekly</p>

                        <p className='rightTextAboutContinuedRegular'>Sally Marchand Collins has been a passionate award-winning hairstylist since 1986 and is owner and artistic director of Electric Fox at Sundance (Formally Sundance SalonSpa) in Zionsville, Indiana since 1997. She has been inspiring her salon’s guests to love themselves and develop their beauty from inside and challenge them to get outside, live life to the fullest, and conquer their fears.</p>
                        <p className='rightTextAboutContinuedRegular'>,Additionally, Sally has been a mountain bike instructor since 2003 and is owner and Chief Enthusiasm Officer of Sundance MTB Skills Clinic and Adventure, LLC, offering elite mountain bike skills instruction, bike retreats, team building bike camps, racing tactics and on-trail clinics, mountain bike trail guide, offering professional mountain bike fitting service, and public speaking engagements.</p>

                        <p className='rightTextAboutContinuedRegular'>Recently, she started Sundance MTB Powered by Electric Fox race team and club to build youth and adults’ confidence, leadership skills, and fitness through mountain biking.</p>

                        <p className='rightTextAboutContinuedRegular'>Sally enjoys fundraising, having raised $40,000 for trails in multiple state parks throughout the Midwest (Indiana, Tennessee, and Illinois), plus reaching the silver status of $10,000 for Griffin Bike Park and $150,000 for the Leukemia and Lymphoma Society (LLS) and has been coaching the LLS Team In Training cycling team since 2002.</p>

                        <p className='rightTextAboutContinuedRegular'>She lost her husband in 2001 to leukemia and finds working with others during their tough times and providing comfort when life becomes minus one to be at the heart of what she does.</p>

                        <p className='rightTextAboutContinuedRegular'>She participates in community service activities such as Earth Day clean-ups, Hoosier Mountain Bike Association trail maintenance crew and chainsaw work for Brown County State Park trail systems and serving as a volunteer firefighter at Fruitdale Volunteer Fire Department in Nashville, Indiana.</p>

                        <p className='rightTextAboutContinuedRegular'>Sally has been featured in multiple media outlets including the Indiana Business Journal, Indianapolis Star, USA Today, WTHI TV, WISH TV Indy Style, CBS 4, among many others.</p>

                        <p className='rightTextAboutContinuedRegular'>Sally retired from the pro-endurance mountain bike race circuit, finishing 3rd in the Solo Elite 24 Hour World Championships in California.</p>

                        <p className='rightTextAboutContinuedRegular'>She is a member of the Zionsville Chamber of Commerce and lives in Nashville, IN. She is also the proud owner of two rescue Australian Shepards and two rescue cats!</p>

                      </div>
                    </div>
                  </div>
                  </div>


                     <section className='salon__about__intro__2'>
         
          <div className='mtb__about__wrapper'>
     

          

          <div className='mtb__about__intro__left__right__container'>
          <div className='mtb__about__intro__left'>
          <h2>Our Beginning</h2>
            <p>We needed just the right name to start the dream and it came, of all places, as we rode up a ski lift in Taos, New Mexico. I commented on the majesty of the mountains and the way the sun seemed to dance in the sky and Pete said, That’s it….Sundance! We opened our first salon less than a year later (November, 1997) in a basement of a business at 86th and Ditch, Indianapolis. Despite its diminutive size, we found that we loved pampering our clients. Pete had been working at AVEDA as an account executive and decided to help me out full-time. He not only did the books but he practiced his other love-massage therapy. We enjoyed working together; it was the high point of our lives!</p>
              
            <p>
            Then the news came that my 35-year-old husband, a man who loved tandem bike riding and coaching lacrosse, had leukemia (February 21, 2000). Days later our basement salon flooded. Then the news came that the cancer had spread to Pete’s brain. Next, we learned that the salon was to be demolished to make way for a new pharmacy. We were at a loss and very scared.
            </p>
            
            <p>
            In May of 2000, we found out that Pete’s brother Jeff was a perfect match for a bone marrow transplant. We were elated. We had hope! Our landlord let us move upstairs in a vacant spot until we could find a new home for Sundance. It was almost impossible to work 65 hours a week, look for a new location, and take Pete for cancer treatments.   Somehow, just days before his scheduled transplant and a month before the building was to be torn down, we found the perfect spot for our salon/spa in Zionsville. With the support of our friends and families, we were ready for business in a week (August 1, 2000).
            </p>
            
            <p>I read the quote, “What we need is more people who specialize in the impossible” by Theodore Roethke and felt that quote described me. I continued to expand our new salon/spa, adding stylists and watching our client base grow, all the while racing back to the hospital to support my very ill husband.</p>
            
            <p>I do not know where I found the energy, the motivation, and the drive to succeed. Pete served as my inspiration. The harder he fought to live, the harder I fought to make the salon/spa work for the both of us.   When Pete was told that he was going to die, he became very business-like, telling me that he needed to teach me everything that he knew so that the business could go on. He helped teach me about the accounting system and all that it entailed.</p>
              
            <p>Here I was, sitting in the hospital with my dying husband, and all Pete could focus on was making sure that I would be alright, happy, and able to keep our dream, our business, our lives minus one, alive and well.   After Pete died (February 12, 2001), I signed up for a 100-mile tandem bike ride in Lake Tahoe for the Leukemia & Lymphoma Society in Pete’s honor. My 65-year-old father began training and stepped up to the challenge to ride with me as captain (lead rider). It was one of the hardest things I ever did; when I wanted to give up, I could hear Pete cheering me on.</p>
            
            <p>That same spirit cheers me on every day in my salon. The more I give to my clients, the more they give in return.   It is truly amazing. Currently, Sundance Salon/Spa employs a growing professional team. Our salon now encompasses 1680 square feet (compare that to our original basement salon of approximately 400 square feet).
</p>

<p>I have to say that my motivation today is driven by my will to succeed, no matter the odds. I don’t make excuses; I just keep focused on what matters most-friends, staff, family, and making my clients happy.   To be a successful entrepreneur, it takes an internal drive to survive–for me it was keeping the business alive during and after Pete’s death. I couldn’t move away or change my occupation. I couldn’t just crawl into bed and sink into despair.</p>

            <p>I had to face my dedicated clients who were always there for me because they believed in me and wanted me back. They cared. You have to love what you do and believe you can make a difference in the lives of others. When you do that, you reap the benefits.</p>

            <p>Training a team of employees to work in harmony is one of my greatest accomplishments. Focusing on my employees’ strengths and reinforcing their accomplishments has been a key to our successful business. There is a saying in behavioral psychology, “Catch’em being good!” I try to shower praise as often as I can. It makes a difference in the working environment and comes back to you two-fold.</p>

            <p>Additionally, being a part of a wonderful community like Zionsville makes you feel at home. I enjoy giving back to the community by participating in food and toy drives, silent auctions, and contests geared toward children.</p>

            <p>My role models include my parents, Normand and Annette Marchand, who taught me about what it means to work hard in life and to keep a good sense of humor; my in-laws, George and Ann Collins, who provided support even in the face of their own grieving;my sister, Dr. Nancy Marchand-Martella, and her husband, Dr. Ron Martella, for pushing education as a way to expand into new directions; my brother-in-law, Jeff, for teaching me to never give up; David Wagner, salon owner and author of Life as a Daymaker; my best friend, Kim Small, for telling me not to let weeds grow in my dreams; and my dear friend, Cari Estes, for making me believe in my heart.
</p></div>

          <div className='mtb__about__intro__right'>
            <span className='salon__about__intro__right__highlight'>
              <div className='peteContainer'>
              <img className='peteImage' src={images.collagePete} alt='pete collage'></img>
              </div>
              </span>
            <p>Peter Joseph Collins</p>
          </div>
          </div>
         
          <div className='salon__about__line'></div>

      

          <div className='mtb__about__intro__left__right__container'>
          <div className='mtb__about__intro__left'>
          <h2>Mission Statement</h2>
            <p>Sally believes in creating a peaceful environment and restoring the balance of our guests by nurturing their needs. She wants to inspire and educate all guests to integrate wellness and beauty in their lives. She believes in treating ourselves, each other, and the planet with care and respect.
</p></div>

          <div className='mtb__about__intro__right'>
            <span className='salon__about__intro__right__highlight'>{
              calculateAge()
            }</span>
            <p>Years in the Business</p>
          </div>
          </div>

          <div className='salon__about__line'></div>

          <div className='mtb__about__intro__left__right__container'>
          <div className='mtb__about__intro__left'>
          <h2>Giving Back</h2>
            <p>At Electric Fox at Sundance, Sally believes in a philosophy not only exceeding customer expectations, but also giving back to the community and families that are a part of our everyday lives. She believes in being a leader in the community and that continued success is based upon being good, corporate citizens through giving back. We simply strive to live the AVEDA Mission everyday. Our Mission at AVEDA is to care for the world we live in, from the products we make to the ways in which we give back to society.
            </p>

            <h3>Electric Fox at Sundance Supports:</h3>

            <ul>
              <li>Hoosier Environmental Council</li>
              <li>Leukemia & Lymphoma Society</li>
              <li>Brown County Humane Society</li>
              <li>Boone County Humane Society</li>
              <li>Freewheelin' Community Bikes</li>
            </ul>

</div>

          <div className='mtb__about__intro__right'>
            <span className='salon__about__intro__right__highlight'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="200" height="200" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
            </span>
          </div>
          </div>




  
</div>
        </section>
        
        </div>
  )
}

export default SalonHome