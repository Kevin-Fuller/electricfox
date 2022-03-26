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

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/biking" element={<MTBHome />}></Route>
        <Route path="/biking/about" element={<MTBAbout />}></Route>
        <Route path="/biking/media" element={<MTBMedia />}></Route>
        <Route path="/biking/programs" element={<MTBPrograms />}></Route>
        <Route path="/swiper" element={<SwiperPage />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  )
}

export default App
