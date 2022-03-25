import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home'
import Error from './pages/Error'
import MTBHome from './pages/MTBHome/MTBHome'
import './normalize.css';
import './App.css';
import MTBAbout from './pages/MTBAbout/MTBAbout';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/biking" element={<MTBHome />}></Route>
        <Route path="/biking/about" element={<MTBAbout />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  )
}

export default App
