import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Add from './Add'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </div>
  )
}

export default App
