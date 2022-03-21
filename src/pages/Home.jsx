import React, {useState, useEffect} from 'react';

import {db} from '../firebase-config';
import {collection, getDocs} from 'firebase/firestore';

const Home = () => {
  const [info, setInfo] = useState([]);
  const infoCollectionRef = collection(db, 'homepage');

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
        return <div key={information.textInput1}><h1>{information.textInput1}</h1>
        <h1>{information.textInput2}</h1></div>
      })}
    </div>
  )
}

export default Home