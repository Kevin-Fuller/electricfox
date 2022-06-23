import React from 'react';
import SalonNavbar from '../../components/navbar/salonNav/SalonNavbar'
import SalonServicesTabs from '../../components/SalonServicesTabs/SalonServicesTabs';
import './SalonServices.css';

const SalonServices = () => {
  document.title = "Services"

  return (
    <div id='salonServices'>
        <SalonNavbar />
        <div className='salon__programs__page__wrapper'>
            <section className='salon__programs__intro'>
            <h1>Services at Electric Fox at Sundance.</h1>
            <p>Sally takes pride in attending to her guests' needs through her extensive list of services.</p>
            </section>
            <SalonServicesTabs />  
        </div>
    </div>
  )
}

export default SalonServices