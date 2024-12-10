import React from 'react'

const About = () => {
  return (
  <div className='absolute inset w-screen bg-green-50'>
    <div className='bg-white h-64 flex flex-row items-center justify-between relative border-gray-300 w-5/6 border-2 m-auto -mt-32 '>
   <div className="text-center flex flex-col gap-3 w-full">
    <p className='text-4xl font-bold'>+3000</p>
    <p className='text-customGreen text-xl '>Patients treated</p>
   </div>
   <div className="text-center flex flex-col gap-3 w-full">
    <p className='text-4xl font-bold'>+16</p>
    <p className='text-customGreen text-xl'>Available specialists</p>
   </div>
   <div className="text-center flex flex-col gap-3 w-full">
    <p className='text-4xl font-bold'>+10</p>
    <p className='text-customGreen text-xl'>Years in the market</p>
   </div>
   
    </div>
    </div>

  )
}

export default About