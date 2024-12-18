import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doctors } from '../assets/assets';
import BookingSystem from '../Content/Bookings';

const Indoctor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = doctors.find((doc) => doc.id === parseInt(id));
  if (!doctor) {
    return <div className="text-center text-2xl font-semibold mt-20">Doctor not found</div>;
  }

  return (
    <div className="bg-green-100 mt-16 min-h-screen p-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Doctor Details Section */}
        <div className="w-full md:w-2/3 p-6">
          <div className="flex flex-col items-center md:items-start md:flex-row">
            <img
              src={doctor.imgSrc}
              alt={doctor.name}
              className="w-48 h-48 rounded-lg object-cover md:mr-6"
            />
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h1 className="text-3xl font-bold text-gray-800">{doctor.name}</h1>
              <p className="text-xl text-gray-600">{doctor.specialization}</p>
              <p className="mt-2 text-gray-500">{doctor.description}</p>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <p className="text-gray-600">
              <strong>Experience:</strong> {doctor.experience} years
            </p>
            <p className="text-gray-600">
              <strong>Consultation Fee:</strong> ₹{doctor.consultationFee}
            </p>
            <p className="text-gray-600">
              <strong>Availability:</strong> {doctor.availability}
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> {doctor.location}
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">Services Offered:</h2>
            <ul className="list-disc list-inside text-gray-600">
              {doctor.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => navigate('/booking')}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Book Appointment
          </button>
        </div>

        {/* Booking System Section */}
        <div className="w-full md:w-1/3 bg-gray-50 p-6 border-l border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Book Appointment</h2>
          <BookingSystem />
        </div>
      </div>
    </div>
  );
};

export default Indoctor;
