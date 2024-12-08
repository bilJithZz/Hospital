import React from 'react'
import Nav from './Nav'
import image from "../assets/image.png"

const Hero = () => {
  return (
    <div className='h-screen flex bg-green-200'>
      <div className="flex w-3/5 flex-col pt-52 pl-36">
        <div className='text-customGreen font-bold text-xl'>
        WELCOME TO DOCTORCARE 👋
        </div>
        <div className='mt-4 text-5xl xl'>
        Simplified healthcare for everyone <br />and every time
        </div>
        <div className='mt-6 text-xl'>
        The doctors at DoctorCare go beyond the symptoms to address the root cause of your illness and provide long-term healing
        </div>
        <div className='mt-10 flex gap-3 w-80 h-14 text-xl bg-customGreen px-3 py-4 rounded-full'> 
            <img src="" alt=" whats" />
            <p> Contact via Whatsapp</p>
        </div>
      </div>
      <div className='mt-14 ml-12'>
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Hero