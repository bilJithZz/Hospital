import React from 'react'
import happy_doc from "../assets/happy-doc.png"

const About = () => {
  return (
    <div className="flex w-screen h-screen  justify-center items-center gap-4  flex-row">
        <div className="flex flex-col gap-3  text-center justify-center items-center">
             <p>.This Is super Speciality</p>  
             <p>.This Is super Speciality</p>  
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque beatae eaque facilis nisi quod providbr    <br />
             ent? Est ex quisquam delectus nulla maiores eveniet <br />
              possimus tempora, tempore alias, voluptatem vero, assumenda corrupti!</p>
        </div>
        <div>
            <img className='bg-black  w-[500px]' src={happy_doc} alt="" />
        </div>
    </div>
  )
}

export default About