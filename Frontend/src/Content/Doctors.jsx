import React from 'react';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {

const navigate=useNavigate()

const handleDoctorClick = () => {
  navigate('/alldoc');
}

  return (
    <div className="h-auto mb-10 bg-green-50">
      <div className="w-4/5 flex gap-2 flex-wrap m-auto pt-60">
        
       <div className='flex m-auto justify-center flex-col'>
        <p className="text-2xl  text-center font-bold">Top Doctors To Book</p> <br />
        <p className="text-lg text-gray-700">Select a doctor to book your appointment</p>
        </div>
      
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mt-8">
          {Array(8).fill().map((_, index) => (
            <div  onClick={handleDoctorClick} key={index} className="bg-white w-full h-72 flex flex-col items-center justify-between p-4 rounded-lg border cursor-pointer  border-gray-300">
              <img

                className="h-40 w-2/3 object-cover rounded-full"
                src="https://peopleenespanol.com/thmb/kajG-Y8Ubwy6R5KLrmieKDJYRGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-450369552-afa112d8a0ea44aeaa8ab32e3c905d9e.jpg"
                alt="Doctor"
              />
              <div className="text-center mt-2">
                <p className="font-bold">Doctor Name</p>
                <p className="text-gray-500">Specialization</p>
              </div>
            </div>
          ))}
        </div>

    <p className=' flex text-center mt-6 py-3 px-6 bg-customGreen rounded-full'>See More</p>
      </div>
    </div>
  );
}

export default Doctors;
