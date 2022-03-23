import React, {useState, useEffect} from 'react';
import './MTBHome.css'
import {db} from '../../firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import Biking_parallax from '../../components/biking_parallax/Biking_parallax';
import Small_About from './Small_About/Small_About';
import Two_Column_Buttons from '../../components/two_column_buttons/Two_Column_Buttons';
import Marquee from "react-fast-marquee";
import {Images} from '../../constants'

const MTBHome = () => {

  const [info, setInfo] = useState([]);
  const infoCollectionRef = collection(db, 'biking_home_page');
  let leftButton = '';
  let leftButtonLink = '';
  let rightButton = '';
  let rightButtonLink = '';
  let quote1 = '';
  let quote1author = '';

  useEffect(() => {
    const getInfo = async() => {
      const data = await getDocs(infoCollectionRef);
      setInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getInfo();
  }, []);


  return (
    <div className='mtb__homepage'>
      <div className='mtb__homepage__wrapper'>
      
      <Biking_parallax />

      {info.map((information) => {
        leftButton = information.LeftButton1;
        leftButtonLink = information.LeftButton1Link;
        rightButton = information.RightButton1;
        rightButtonLink = information.RightButton1Link;
        quote1 = information.quote1;
        quote1author = information.quote1author;

      return <div className='mtb-header-wrapper' key={information.Title1}>
        <h1 className='mtb-header-title'>{information.Title1}</h1>
        
    
        {Two_Column_Buttons(leftButton, leftButtonLink, rightButton, rightButtonLink)}
      </div>

        })}
    
        <Small_About />

        {Two_Column_Buttons('Our story', 'Our story', 'Media', 'Media')}


        <h2 className='mtb-header-title quote'>{quote1}</h2>
        <h3 className='mtb-header-subtitle'>{quote1author}</h3>


        {Two_Column_Buttons(leftButton, leftButtonLink, rightButton, rightButtonLink)}

      </div>
      <Marquee
        loop={0}
        gradient={false}
        speed={60}
        className='marquee'>
          <img src={Images.logo1} alt="Dino Mountain Bike Series"></img>
          <img src={Images.logo2} alt="Bicycle Outfitters Indy"></img>
          <img src={Images.logo3} alt="Salt Creek"></img>
          <img src={Images.logo4} alt="Industry 9"></img>
          <img src={Images.logo5} alt="Upland Brewing"></img>
          <img src={Images.logo7} alt="Ergon"></img>
          <img src={Images.logo8} alt="Sock Guy"></img>
          <img src={Images.logo9} alt="Bike Line"></img>
          <img src={Images.logo10} alt="Bicycle Garage Indy"></img>
          <img src={Images.logo11} alt="Indy Cycle Specialist"></img>
          <img src={Images.logo12} alt="SRAM"></img>
        </Marquee>

    </div>
  )
}

export default MTBHome