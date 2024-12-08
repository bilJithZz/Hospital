import React from 'react'
import Nav from './Componets/Nav'
import Footer from './Componets/Footer'
import Home from './Content/Home'
import { Route, Routes } from 'react-router-dom'
import Alldoctor from "./Componets/Alldoctors"
import Indoctor from './Componets/Indoctor'


const App = () => {
  return (
    <div>
      <Nav/>
      <Routes> 
    <Route path="/" element={<Home/>} />
    <Route path="/alldoc" element={<Alldoctor/>} />
    <Route path="/alldoc/:id" element={<Indoctor/>} />
    </Routes> 
    <Footer />
    </div>
  )
}

export default App