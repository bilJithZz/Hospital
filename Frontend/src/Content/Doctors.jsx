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
    <div className="h-auto mb-10 bg-green-50">
      <div className="w-4/5 flex gap-2 flex-col m-auto pt-60">
        
       <div className='flex m-auto justify-center flex-col'>
        <p className="text-2xl  text-center font-bold">Top Doctors To Book</p> <br />
        <p className="text-lg text-gray-700">Select a doctor to book your appointment</p>
        </div>
      

      <div className="flex">
        <Specialization />
      </div>

        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mt-8">

          {doctors.map((doctor,index)=>{
           return (
            <div onClick={handleDoctorClick} className=" flex flex-col" key={index}>
              <img src={doctor.imgSrc} alt="" />
              <div className="flex-col flex">
              <p className="font-bold">{doctor.name}</p>
              <p className="text-gray-500">{doctor.specialization}</p>
              </div>
            </div>
              )
          })}
        </div>
 
    <p onClick={()=>{navigate('/alldoc')}} className='cursor-pointer flex text-center mt-6 py-3 px-6 bg-customGreen rounded-full'>See More</p>
      </div>
    </div>
  );
}

export default Doctors;
