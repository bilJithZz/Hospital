import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/Logo.png";
import logo2 from "../assets/Title.png"; 

const Nav = () => {
  const [isUser, setIsUser] = useState(false);
  const [color, setColor] = useState(false);

  
  const changecolor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', changecolor);
    return () => {
      window.removeEventListener('scroll', changecolor);
    };
  }, []);

  return (
    <div
      className={`${
        color ? 'bg-customGreen text-white' : 'inherit'
      } fixed top-0 left-0 w-full h-16 px-24 flex justify-between items-center z-50 transition-transform duration-300 ease-in-out`}
    >
      <div className="flex cursor-pointer flex-row ml-8 gap-4 w-50">
        {color ? (
          <img className='text-2xl' src={logo2} alt="careConnect" />
         ) : (
          <img className='text-2xl' src={logo} alt="careConnect" />
        )}
      </div>

      <ul className="flex cursor-pointer gap-6">
        <NavLink to="/" activeClassName="font-bold">
          <li>Home</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="font-bold">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/about" activeClassName="font-bold">
          <li>About</li>
        </NavLink>
        <NavLink to="/services" activeClassName="font-bold">
          <li>Services</li>
        </NavLink>
      </ul>
      <div className='pr-3'>

      {isUser ? (
        <div
          className="px-4 py-2 mr-5 mt-3 rounded-full cursor-pointer"
          onClick={() => setIsUser(false)} // Log out functionality
        >
          <img
            className='rounded-full w-12 mt-6 mb-1 h-12 object-cover'
            src="https://media.cnn.com/api/v1/images/stellar/prod/150402095137-paul-walker-fast-furious-2001-orig-00001328.jpg?q=x_0,y_0,h_720,w_1279,c_fill/w_1280"
            alt="Profile"
          />
          <div className='p-3 w-20 bg-white'>
            <p>Log Out</p>
          </div>
        </div>
      ) : (
        <div
          className={`${color? ' border-white text-white':'border-customGreen text-green-900'}px-4 py-2 mr-5 mt-3 rounded-3xl border-2  cursor-pointer`}
          onClick={() => setIsUser(true)} // Log in functionality
        >
          Create Account
        </div>
      )}
      </div>
    </div>
  );
};

export default Nav;
