import React from 'react'
import { doctors } from '../assets/assets'

const Booking = () => {
  return (
   <div className="h-screen  w-screen bg-green-50">
    <div className="flex w-4/6 m-auto flex-col">
        <div className=" flex flex-row border-gray-200 border-2 p-2">
         
            <img className='w-40 h-52' src="https://peopleenespanol.com/thmb/kajG-Y8Ubwy6R5KLrmieKDJYRGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gettyimages-450369552-afa112d8a0ea44aeaa8ab32e3c905d9e.jpg" alt="" />
            <div className="flex flex-col">
            <p className="text-2xl text-white">Thomachees</p>
            <p className="text-2xl text-white">Ginocolagiste</p>
            <p className="text-2xl text-white">Lorem ipsum dolor sit amet consecte
              tur adipisicing elit. Hic consequatur sed corrupti eligendi. Tempora cupiditate,
               placeat dolores nulla porro sunt perferendis optio volu
              ptatum quo, doloribus harum quidem officia, eius possimus.</p>
            </div>
        </div>
      <p className="text-2xl  text-white" >Make An Appointments</p>
       <div className="border-3 p-3  border-white-400 border-2 flex-col">
         <p className="text-2xl text-white">Choose Date and Time</p>
         <p className="text-2xl text-white">Please Select your date and time for appointment</p>
         <div className="flex text-2xl gap-3 text-white flex-row">
          <img src=" " alt="" />
          <div className="flex  flex-col">
            <p>Monday</p>
            <p>17</p>
            <p>thus</p>
          </div>
          <div className="flex flex-col">
            <p>Monday</p>
            <p>17</p>
            <p>thus</p>
          </div>
          <div className="flex flex-col">
            <p>Monday</p>
            <p>17</p>
            <p>thus</p>
          </div>
         </div>
         <div className="flex gap-3 flex-row">
          <div className="flex border-2  text-white border-white-400 flex-row item-center">
            <p>10:00 AM - 10:00 AM</p>
          </div>
          <div className="flex border-2  text-white border-white-400 flex-row item-center">
            <p>10:00 AM - 10:00 AM</p>
          </div>
          <div className="flex border-2  text-white border-white-400 flex-row item-center">
            <p>10:00 AM - 10:00 AM</p>
          </div>
          <div className="flex border-2  text-white border-white-400 flex-row item-center">
            <p>10:00 AM - 10:00 AM</p>
          </div> <div className="flex border-2  text-white border-white-400 flex-row item-center">
            <p>10:00 AM - 10:00 AM</p>
          </div>
         </div>
       </div>
    </div>
   </div>
  )
}

export default Booking