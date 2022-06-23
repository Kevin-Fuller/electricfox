import React, {useState, useEffect} from 'react';
import Navbar from '../../components/navbar/Navbar';
import './MTBMedia.css';
import {db} from '../../firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import MTBMediaGrid from '../../components/MTBMediaGrid/MTBMediaGrid';
import Two_Column_Buttons from '../../components/two_column_buttons/Two_Column_Buttons';

const MTBMedia = () => {
  document.title = "Media"
  const [info, setInfo] = useState([]);
  const infoCollectionRef = collection(db, 'biking_home_page');
  let leftButton = '';
  let leftButtonLink = '';
  let rightButton = '';
  let rightButtonLink = '';

  useEffect(() => {
    const getInfo = async() => {
      const data = await getDocs(infoCollectionRef);
      setInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getInfo();
  }, []);

  info.map((information) => {
    leftButton = 'Programs';
    leftButtonLink = '../biking/programs';
    rightButton = 'Our Story';
    rightButtonLink = '../biking/about';
  });

  return (
    <div className='mtb__media'>
        <Navbar /> 
        <div className='mtb__media__wrapper'>
        <h1 className='mtb__media__header'>Media</h1>
        {Two_Column_Buttons(leftButton, leftButtonLink, rightButton, rightButtonLink)}
        <MTBMediaGrid />
        </div>
    </div>
  )
}

export default MTBMedia