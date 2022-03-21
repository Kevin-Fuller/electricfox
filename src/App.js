import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Error from './pages/Error'

function App(){
  return (
    <Router>
      <a href="/">Home</a>
      <br></br>
      <a href="/test">Testing</a>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<div>Test</div>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  )
}

export default App
