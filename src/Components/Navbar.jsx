import React, { useState } from 'react';
import logo from '../assets/images-removebg-preview.png';
import './navbar.css';
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track if the menu is open

  // Toggle the menu on mobile
  const onToggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <div>
        <nav className=''>
          <div className='flex justify-between items-center w-full h-20  mx-auto px-6'>
            <div>
              <img className='w-18' src={logo} alt="Logo" />
            </div>

            {/* Menu */}
            <div className={`md:static absolute md:min-h-fit 0 md:w-auto min-h-[40vh] left-0 w-full flex items-center px-5 ${menuOpen ? 'top-0':'top-[-100%]'}`}>
              <ul className='flex md:flex-row flex-col md:gap-6 gap-4'>
                <li className='text-2xl hover:text-blue-400 cursor-pointer'>
                  <a href="">Home</a>
                </li>
                <li className='text-2xl hover:text-blue-400 cursor-pointer'>
                  <a href="">About</a>
                </li>
                <li className='text-2xl hover:text-blue-400 cursor-pointer'>
                  <a href="">Services</a>
                </li>
                <li className='text-2xl hover:text-blue-400 cursor-pointer'>
                  <a href="">Contact</a>
                </li>
                <li className='text-2xl hover:text-blue-400 cursor-pointer'>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>

            {/* Button and Hamburger Menu */}
            <div className='flex items-center gap-6'>
              <button className=' rounded-lg text-xl text-white cursor-pointer px-4 py-2 bg-gradient-to-r from-indigo-300 to-indigo-500'>Appointment</button>
              <button className=' rounded-lg text-xl text-white cursor-pointer px-4 py-2 bg-gradient-to-r from-indigo-300 to-indigo-500 '>Sign</button>
              {/* Hamburger menu icon for small screens */}
              <CiMenuFries
                className='text-3xl cursor-pointer md:hidden'
                onClick={onToggleMenu}
              />
            </div>

            {/* Close icon */}
            {menuOpen && (
              <IoClose
                className='text-3xl cursor-pointer md:hidden absolute top-4 right-6'
                onClick={onToggleMenu}
              />
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
