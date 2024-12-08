import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Alldoctors = () => {

  const navigate=useNavigate()

  const doctors = [
    {
      id: 1,
      imgSrc:
        'https://peopleenespanol.com/thmb/kajG-Y8Ubwy6R5KLrmieKDJYRGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-450369552-afa112d8a0ea44aeaa8ab32e3c905d9e.jpg',
      name: 'Doctor Name 1',
      specialization: 'Orthopedic',
    },
    {
      id: 2,
      imgSrc:
        'https://peopleenespanol.com/thmb/kajG-Y8Ubwy6R5KLrmieKDJYRGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-450369552-afa112d8a0ea44aeaa8ab32e3c905d9e.jpg',
      name: 'Doctor Name 2',
      specialization: 'Neurologist',
    },
    {
      id: 3,
      imgSrc:
        'https://peopleenespanol.com/thmb/kajG-Y8Ubwy6R5KLrmieKDJYRGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-450369552-afa112d8a0ea44aeaa8ab32e3c905d9e.jpg',
      name: 'Doctor Name 3',
      specialization: 'Orthopedic',
    },
    {
      id: 4,
      imgSrc:
        'https://peopleenespanol.com/thmb/kajG-Y8Ubwy6R5KLrmieKDJYRGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-450369552-afa112d8a0ea44aeaa8ab32e3c905d9e.jpg',
      name: 'Doctor Name 5',
      specialization: 'Orthopedic',
    },
    {
      id: 5,
      imgSrc:
        'https://peopleenespanol.com/thmb/kajG-Y8Ubwy6R5KLrmieKDJYRGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-450369552-afa112d8a0ea44aeaa8ab32e3c905d9e.jpg',
      name: 'Doctor Name 6',
      specialization: 'Neurologist',
    },
    {
      id: 6,
      imgSrc:
        'https://peopleenespanol.com/thmb/kajG-Y8Ubwy6R5KLrmieKDJYRGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-450369552-afa112d8a0ea44aeaa8ab32e3c905d9e.jpg',
      name: 'Doctor Name 7',
      specialization: 'Orthopedic',
    },
  ];
  
  
  

  const doctorSpecializations = [
    { id: 1, name: "General Physician", description: "General health and wellness checks." },
    { id: 2, name: "Cardiologist", description: "Specializes in heart and cardiovascular health." },
    { id: 3, name: "Dermatologist", description: "Focuses on skin, hair, and nail health." },
    { id: 4, name: "Orthopedic", description: "Deals with bone and joint disorders." },
    { id: 5, name: "Neurologist", description: "Specializes in brain and nervous system health." },
  ];
  

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
