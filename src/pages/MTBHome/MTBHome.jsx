import React, {useState, useEffect} from 'react';
import './MTBHome.css'
import {db} from '../../firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import Biking_parallax from '../../components/biking_parallax/Biking_parallax';
import Small_About from './Small_About/Small_About';
import Two_Column_Buttons from '../../components/two_column_buttons/Two_Column_Buttons';
import Marquee from "react-fast-marquee";
import {Images} from '../../constants'
import Navbar from '../../components/navbar/Navbar';
import ImagePopup from '../../components/ImagePopup/ImagePopup';
import HomePageGallery from '../../components/HomePageGallery/HomePageGallery';
import SwiperPage from '../../components/SwiperPage/SwiperPage'
import newSwiper from '../../components/SwiperPage/SwiperPage';

const MTBHome = () => {

  document.title = "Sundance MTB"
  const [info, setInfo] = useState([]);
  const infoCollectionRef = collection(db, 'biking_home_page');
  let leftButton = '';
  let leftButtonLink = '';
  let rightButton = '';
  let rightButtonLink = '';
  let quote1 = '';
  let quote1author = '';
  let swiperImage1 = '';
  let swiperImage2 = '';
  let swiperImage3 = '';
  let swiperImage4 = '';

  useEffect(() => {
    const getInfo = async() => {
      const data = await getDocs(infoCollectionRef);
      setInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getInfo();
  }, []);


  return (
    <>
    <Navbar />
    <div className='mtb__homepage'>
      {Biking_parallax(Images.GBG, Images.GBG5, Images.GBG4, Images.GBG3, Images.GBG2,Images.GBG6, Images.GBG1, Images.mainLogoMTB, Images.sundancePhone)}
      {/* {Biking_parallax(Images.bg, Images.bg6, Images.bg5, Images.bg4, Images.bg3, Images.bg2, Images.bg1, Images.mainLogoMTB, Images.bgMain)} */}
      <div className='mtb__homepage__wrapper'>
       

      {info.map((information) => {
        leftButton = 'Programs';
        leftButtonLink = './programs';
        rightButton = 'About';
        rightButtonLink = './about';
        quote1 = information.quote1;
        quote1author = information.quote1author;
        swiperImage1 = information.swiperImage1;
        swiperImage2 = information.swiperImage2;
        swiperImage3 = information.swiperImage3;
        swiperImage4 = information.swiperImage4;

      return <div className='mtb-header-wrapper' key={information.Title1}>
        <h1 className='mtb-header-title'>{information.Title1}</h1>
        
    
        {Two_Column_Buttons(leftButton, leftButtonLink, rightButton, rightButtonLink)}
      </div>

        })}

       {newSwiper(swiperImage1, swiperImage2,swiperImage3) }
        <Small_About />

        <div className='beforeOurStoryButtons'></div>

        {Two_Column_Buttons('Our story', './about', 'Media', './media')}
        <div className='beforeHomeGallery'></div>

        <HomePageGallery />
        <div className='afterHomeGallery'></div>


        <h2 className='mtb-header-title quote'>{quote1}</h2>
        <h3 className='mtb-header-subtitle'>{quote1author}</h3>


        {Two_Column_Buttons(leftButton, leftButtonLink, rightButton, rightButtonLink)}

      </div>
      <Marquee
        loop={0}
        gradient={false}
        speed={60}
        className='marquee'>
          <img src={Images.logo1} alt="Dino Mountain Bike Series" loading="lazy"></img>
          <img src={Images.logo2} alt="Bicycle Outfitters Indy" loading="lazy"></img>
          <img src={Images.logo3} alt="Salt Creek" loading="lazy"></img>
          <img src={Images.logo4} alt="Industry 9" loading="lazy"></img>
          <img src={Images.logo5} alt="Upland Brewing" loading="lazy"></img>
          <img src={Images.logo7} alt="Ergon" loading="lazy"></img>
          <img src={Images.logo8} alt="Sock Guy" loading="lazy"></img>
          <img src={Images.logo9} alt="Bike Line" loading="lazy"></img>
          <img src={Images.logo10} alt="Bicycle Garage Indy" loading="lazy"></img>
          <img src={Images.logo11} alt="Indy Cycle Specialist" loading="lazy"></img>
          <img src={Images.logo12} alt="SRAM" loading="lazy"></img>
        </Marquee>

    </div>
    </>
  )
}

export default MTBHome