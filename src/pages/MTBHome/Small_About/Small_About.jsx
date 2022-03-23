import React, {useState, useEffect} from 'react';
import './Small_About.css'
import {db} from '../../../firebase-config';
import {collection, getDocs} from 'firebase/firestore';

import Two_Column_About from './Two_Column_About/Two_Column_About';

const Small_About = () => {
  const [info, setInfo] = useState([]);
  const infoCollectionRef = collection(db, 'biking_home_page');

  useEffect(() => {
    const getInfo = async() => {
      const data = await getDocs(infoCollectionRef);
      setInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getInfo();
  }, []);

  return (
    <div>
    {info.map((information) => {
      return <div key={information.Small_About}>
        <h2 className='small-about-title'>{information.Small_About}</h2>
        </div>
    })}
    <Two_Column_About />
    </div>
  )
}

export default Small_About