import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Department = () => {

        const navigate=useNavigate()

        const [selectdepartment,setSelectdepartment]=useState(false)

        const handlechnage=()=>{

            setSelectdepartment(true)
            setTimeout(() => {
                navigate("/contact"); 
              }, 70);
           
        }

    const departments = [
        {
            id: "1",
            img: "https://img.freepik.com/free-vector/gynecology-consultation-illustration_23-2148671930.jpg?uid=R178646132&ga=GA1.1.1279688011.1723220364",
            name: "ENT",
        },
        {
            id: "2",
            img: "https://img.freepik.com/premium-vector/otorhinolaryngologist-consultation-with-diverse-group-patients-hospital-setting_1324816-28867.jpg?w=1380",
            name: "Cardiology",
        },
        {
            id: "3",
            img: "https://img.freepik.com/free-vector/cardiologists-examining-heart-with-stethoscope-blood-samples-lab-tubes-pills-heartbeat-diagram-vector-illustration-cardiology-medical-examination-heart-disease-concept_74855-9817.jpg?t=st=1734330627~exp=1734334227~hmac=6bc1dcf5dd44a2b9320788945ece37b088315a79498217196eada788c6ffbe96&w=1060",
            name: "Neurology",
        },
        {
            id: "4",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubSneQ_ldwHfi5cbRUMN9K0eN3mEr2XS5ne-7aKWTc9x18RQNqM-fqHdVXuFiVZojwDo_Z0Ok0Ni7pDl4vrGxcTjAP0YTF922DDsWB_fHlw",
            name: "Orthopedics",
        },
        {
            id: "5",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubSneQ_ldwHfi5cbRUMN9K0eN3mEr2XS5ne-7aKWTc9x18RQNqM-fqHdVXuFiVZojwDo_Z0Ok0Ni7pDl4vrGxcTjAP0YTF922DDsWB_fHlw",
            name: "Pediatrics",
        },
        {
            id: "5",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubSneQ_ldwHfi5cbRUMN9K0eN3mEr2XS5ne-7aKWTc9x18RQNqM-fqHdVXuFiVZojwDo_Z0Ok0Ni7pDl4vrGxcTjAP0YTF922DDsWB_fHlw",
            name: "Pediatrics",
        },
        {
            id: "5",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubSneQ_ldwHfi5cbRUMN9K0eN3mEr2XS5ne-7aKWTc9x18RQNqM-fqHdVXuFiVZojwDo_Z0Ok0Ni7pDl4vrGxcTjAP0YTF922DDsWB_fHlw",
            name: "Pediatrics",
        },
        {
            id: "5",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubSneQ_ldwHfi5cbRUMN9K0eN3mEr2XS5ne-7aKWTc9x18RQNqM-fqHdVXuFiVZojwDo_Z0Ok0Ni7pDl4vrGxcTjAP0YTF922DDsWB_fHlw",
            name: "Pediatrics",
        },
    ];

    return (
        <div className="flex flex-col gap-12 m-auto w-4/6">
            <div>
                <p className="text-3xl flex items-center justify-center font-semibold">
                    Various Departments
                </p>
            </div>
            <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 py-3">
                {departments.map((department) => (
                    <div
                        className="flex  hover:text-customGreen cursor-pointer flex-col gap-3 p-3 rounded-md min-w-max"
                        key={department.id}
                    >
                        <div className="p-3 bg-customGreen rounded-full">
                      <img
  onClick={handlechnage}
  className={`h-36 w-36 p-3 rounded-full object-cover ${
    selectdepartment ? "hover:bg-black" : "hover:bg-customGreen"
  }`}
  src={department.img}
  alt={department.name}
/>
</div>

                        <p className="flex justify-center font-medium">{department.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Department;
