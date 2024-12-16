import React from 'react';
import { useNavigate } from 'react-router-dom';
import { doctors } from '../assets/assets';
import Specialization from './Specialization';
import Department from '../Componets/Department';

const Doctors = () => {

const navigate=useNavigate()

const handleDoctorClick = () => {
  navigate('/alldoc');
}

  return (
    <div className="h-auto  bg-green-50">
      <div className="w-5/6 flex gap-2 flex-col m-auto pt-60">
        
        <div>
          <Department/>
        </div>
       <div className='flex m-auto justify-center flex-col'>
        <p className="text-2xl  text-center font-bold">Top Doctors To Book</p> <br />
        <p className="text-lg text-gray-700">Select a doctor to book your appointment</p>
        </div>
      

      <div className="flex">
      </div>

        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mt-1">

          {doctors.slice(0,12).map((doctor,index)=>{
           return (
            <div onClick={handleDoctorClick} className=" flex mt-5 gap-2 flex-col" key={index}>
              <img className='rounded-lg h-52' src={doctor.imgSrc} alt="" />
              <div className="flex-col flex">
              <p className="font-semibold">{doctor.name}</p>
              <p className="text-gray-500">{doctor.specialization}</p>
              </div>
            </div>
              )
          })}
        </div>
     <div className='bg-customGreen flex flex-col gap-9  p-10 mt-6 rounded-md'>
      <div>
          <p className='flex  text-white font-semibold justify-center text-4xl'>Ready to Start Youy journy to </p>
          <p className='flex  text-white font-semibold m-2 justify-center text-4xl'> Better Health?</p>
      </div>
          <p className='flex  text-white font-semibold mb-3 justify-center text-xl'>Schedule your free consultation today </p>
    
    <p onClick={()=>{navigate('/alldoc')}} className='cursor-pointer w-64  m-auto flex text-center justify-center  py-3 px-6 bg-green-100 rounded-full'>Book an Appointment</p>
      </div>
      </div>
    </div>
  );
}

export default Doctors;
