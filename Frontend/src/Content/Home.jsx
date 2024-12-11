import React from 'react'
import About from './About'
import Doctors from './Doctors'
import About1 from '../Componets/About'
import Hero from '../Componets/Hero'
import Department from '../Componets/Department'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
     <Hero/>
     <About/>
     <Department/>
     <Doctors/>
     <About1/>
     <Contact/>
    </div>
  )
}

export default Home