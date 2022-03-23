import React, {useState, useEffect} from 'react';

import ElectricFoxNav from '../components/navbar/ElectricFoxNav/ElectricFoxNav';
import ElectricFoxLoader from '../components/ElectricFoxLoader/ElectricFoxLoader';

const Home = () => {
  
  return (
    <div>
      <ElectricFoxLoader />
      <ElectricFoxNav />
    </div>
  )
}

export default Home