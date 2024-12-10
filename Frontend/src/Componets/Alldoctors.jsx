import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doctors } from '../assets/assets';
import { doctorSpecializations } from '../assets/assets';

const Alldoctors = () => {

  const navigate=useNavigate()
    const[docspez,setDocspez]=useState(null)
    const[filtered,setFiltered]=useState()

    const filteredDocs=doctors.filter(doctor=>
      doctor.specialization===docspez
    )

    
    const handleChange=(doctorid)=>
      {
        navigate(`/alldoc/${doctorid}`)
      }
  return (
    <div className='flex flex-row'>
      <div className="flex w-1/5 flex-col">
  {doctorSpecializations.map((specialization, index) => (
    <div className='text-black border-cyan-500 border cursor-pointer' onClick={()=>setDocspez(specialization.name)} key={index}>
      {specialization.name}
    </div>
  ))}
</div>

    <div className="flex flex-wrap gap-4 p-4">
      {filteredDocs.map((doctor, index) => (
        <div key={index} onClick={() => handleChange(doctor.id)} className="border p-4 rounded-lg w-60">
          <img
            src={doctor.imgSrc}
            alt={doctor.name}
            className="w-full cursor-pointer  h-40 object-cover rounded-t-lg"
          />
          <h3 className="text-lg cursor-pointer font-semibold mt-2">{doctor.name}</h3>
          <p className="text-sm text-gray-600">{doctor.specialization}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Alldoctors;
