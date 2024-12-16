import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doctors } from '../assets/assets';
import { doctorSpecializations } from '../assets/assets';

const Alldoctors = () => {
  const navigate = useNavigate();
  const [docspez, setDocspez] = useState(null); // selected specialization
  const [filtered, setFiltered] = useState(doctors); // Initially show all doctors

 
  const filteredDocs = docspez ? doctors.filter(doctor => doctor.specialization === docspez) : doctors;

window.scrollTo(0, 0);

  const handleDoctorClick = (doctorid) => {
    navigate(`/alldoc/${doctorid}`);
  }

  return (
    <div className='bg-green-50'>
    <div className='flex mt-20 w-5/6 m-auto gap-6  bg-green-50 flex-row'>
      
      <div className="flex w-1/5 flex-col">
        {doctorSpecializations.map((specialization, index) => (
          <div
            key={index}
            className='text-black border-cyan-500 border cursor-pointer p-2'
            onClick={() => setDocspez(specialization.name)}
          >
            {specialization.name}
          </div>
        ))}
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full ">
        {filteredDocs.map((doctor, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer"
            onClick={() => handleDoctorClick(doctor.id)} // Pass the doctor's id on click
          >
            <img className='rounded-lg w-80 h-52' src={doctor.imgSrc} alt={doctor.name} />
            <div className="flex-col flex">
              <p className="font-semibold">{doctor.name}</p>
              <p className="text-gray-500">{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Alldoctors;
