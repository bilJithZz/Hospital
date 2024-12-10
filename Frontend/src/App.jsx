import React from 'react'
import Nav from './Componets/Nav'
import Footer from './Componets/Footer'
import Home from './Content/Home'
import { Route, Routes } from 'react-router-dom'
import Alldoctor from "./Componets/Alldoctors"
import Indoctor from './Componets/Indoctor'
import Booking from './Content/Booking'
import Bookings from "./Content/Bookings"
import Profile from './Content/Profile'
import Rough from './Content/Rough'
import Department from './Componets/Department'



const App = () => {
  return (
    <div>
      <Nav/>
      <Routes> 
    <Route path="/" element={<Home/>} />
    <Route path="/alldoc" element={<Alldoctor/>} />
    <Route path="/alldoc/:id" element={<Indoctor/>} />
    <Route path="/booking" element={<Booking/>}/>
    <Route path='/bookings' element={<Bookings/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/rough" element={<Rough/>}/>
    <Route path="/department" element={<Department/>}/>
    </Routes> 
    <Footer />
    </div>
  )
}

export default App