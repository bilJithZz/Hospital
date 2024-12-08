import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/Logo.png"

const Nav = () => {

const [isUser,setIsUser]=useState(false)
const[logout,setLogout]=useState(false)


//to change colour when scrolling

const[color,setColor]=useState(false)

const changecolor=()=>{
    if(window.scrollY>=90){
      setColor(true)
    }else{
      setColor(false)
    }
}

window.addEventListener('scroll',changecolor)

  return (
    <div
    className={`${
      color ? 'bg-customGreen' : 'bg-purple-500'
    } fixed top-0 left-0 w-full z-50 h-16 items-center flex justify-between transition-transform duration-300 ease-in-out`}
  >
      <div className="flex cursor-pointer flex-row ml-8 gap-4 w-50">
        <img className='text-2xl' src={logo} alt="careConnect" />
    
      </div>
      <ul className="flex cursor-pointer gap-6">
       
          <NavLink to="/" className="">
          <li className=''> Home  </li>
          <hr className='border-none outline-none bg-primary'/>
          </NavLink>
         
       
        <li>
          <NavLink to="/contact" className="">
            Contact
          </NavLink>
          <hr />
        </li>
        <li>
          <NavLink to="/about" className="">
            About  
          <hr />
          </NavLink>
        
        </li>
        <li>
          <NavLink to="/services" className="">
            Services
          </NavLink>
          <hr />
        </li>
      </ul>
     { isUser?
      <div className="px-4 py-2 mr-5 mt-3 border-customGreen rounded-3xl border-2 text-customGreen cursor-pointer">
        Create Account
      </div>:
      <div className="px-4 py-2 mr-5 mt-3 rounded-full cursor-pointer">
        <img className='rounded-full w-12 mt-6 mb-1 h-12 object-cover' src="https://media.cnn.com/api/v1/images/stellar/prod/150402095137-paul-walker-fast-furious-2001-orig-00001328.jpg?q=x_0,y_0,h_720,w_1279,c_fill/w_1280" alt="" />
        <div className='p-3 w-20 bg-white'>
          <p onClick={()=>setIsUser(true)} >LogOut</p>
          <p onClick={()=>setIsUser(true)} >LogOut</p>
          <p onClick={()=>setIsUser(true)} >LogOut</p>
        </div>
      </div>}
      
    </div>
  );
};

export default Nav;