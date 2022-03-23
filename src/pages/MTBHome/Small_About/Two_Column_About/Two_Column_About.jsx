import React, {useState, useEffect} from 'react';
import './Two_Column_About.css'
import {db} from '../../../../firebase-config';
import {collection, getDocs} from 'firebase/firestore';

const Two_Column_About = () => {
    const [info, setInfo] = useState([]);
    const infoCollectionRef = collection(db, 'Biking_Home_Page_About');

    useEffect(() => {
        const getInfo = async() => {
        const data = await getDocs(infoCollectionRef);
        setInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getInfo();
  }, []);

  const infoLengthdivided = (info.length)/2;

    
  return (
      <div className='two__column__about__wrapper'>
        <div className='two__column__about__left'>
        {info.map((information, index) => {
        if(index < infoLengthdivided) {
      return <div className="two__column__about__wrapper__item" key={information.text}>
        <p className='two-column-about-p'>{information.text}</p>
        </div>
      }})}
        </div>

        <div className='two__column__about__right'>
        {info.map((information, index) => {
        if(index >= infoLengthdivided) {
      return <div className="two__column__about__wrapper__item" key={information.text}>
        <p className='two-column-about-p'>{information.text}</p>
        </div>
      }})}
        </div>

      </div>
    
  )
}

export default Two_Column_About