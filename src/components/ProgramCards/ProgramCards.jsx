import React, {useState, useEffect} from 'react';
import './ProgramCards.css'
import ProgramCard from './ProgramCard/ProgramCard'
import {db} from '../../firebase-config';
import {collection, getDocs} from 'firebase/firestore';

const ProgramCards = () => {

    const [info, setInfo] = useState([]);
    const infoCollectionRef = collection(db, 'mtb-programs');

    useEffect(() => {
        const getInfo = async() => {
          const data = await getDocs(infoCollectionRef);
          setInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getInfo();
      }, []);

  return (
    <div className='program__card__grid'>

        {info.map((information) => {
            return(
                <div key={information.Title} className='program__card__item'>{ProgramCard(information.Title, information.shortDescription, information.link, information.tinyImage)}</div>
            )
        })}
    </div>
    
  )
}

export default ProgramCards