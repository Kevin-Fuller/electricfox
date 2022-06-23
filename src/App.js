import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home'
import Error from './pages/Error'
import MTBHome from './pages/MTBHome/MTBHome'
import './normalize.css';
import './App.css';
import MTBAbout from './pages/MTBAbout/MTBAbout';
import SwiperPage from './components/SwiperPage/SwiperPage'
import MTBMedia from './pages/MTBMedia/MTBMedia';
import MTBPrograms from './pages/MTBPrograms/MTBPrograms';
import Footer from './components/Footer/Footer';
import SalonHome from './pages/SalonHome/SalonHome';
import SalonServices from './pages/SalonServices/SalonServices';
import ScrollToTop from './hooks/ScrollToTop';


function App(){
  return (
    <Router>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/biking" element={<MTBHome />}></Route>
        <Route path="/biking/about" element={<MTBAbout />}></Route>
        <Route path="/biking/media" element={<MTBMedia />}></Route>
        <Route path="/biking/programs" element={<MTBPrograms />}></Route>
        <Route path="/salon" element={<SalonHome />}></Route>
        <Route path="/swiper" element={<SwiperPage />}></Route>
        <Route path="/salon/services" element={<SalonServices />}></Route>
        <Route path="*" element={<Error />}></Route>
        
      </Routes>

      <Footer />
      </ScrollToTop>
    </Router>

  )
}

export default App
