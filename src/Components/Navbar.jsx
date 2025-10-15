import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuUtensilsCrossed } from "react-icons/lu";
import { FaHome, FaUtensils, FaListAlt, FaQuoteLeft, FaCartArrowDown, FaUserCircle, FaTimes, FaBars } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

function Navbar() {
  const menuItems = [
    { icon: <FaHome />, text: "Home", path: "/" },
    { icon: <FaUtensils />, text: "Services", path: "/service" },
    { icon: <FaListAlt />, text: "List", path: "/price" },
    { icon: <FaQuoteLeft />, text: "Reviews", path: "/review" },
  ];

  const [isOpen, setisOpen] = useState(false);

  return (
    <nav className='fixed top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg 
      rounded-full px-3 sm:px-4 md:px-4 lg:px-8 py-2 md:py-3 w-[95%] md:w-[90%] max-w-7xl flex items-center justify-between backdrop-blur-md
      border border-white/20 z-50 '>
      
      {/* LOGO SECTION */}
      <div className='flex items-center space-x-2'>
        <div className='p-2 bg-white/30 rounded-full backdrop-blur-sm'>
          <LuUtensilsCrossed className='text-2xl text-white animate-pulse' />
        </div>
        <h1 className='text-2xl font-pacifico lg:text-2xl md:text-md font-bold text-black'>
          Foodie's<span className='text-orange-800 ml-2'>Hub</span>
        </h1>
      </div>

      {/* MENU SECTION (Desktop) */}
      <div className='hidden md:flex space-x-4 lg:space-x-8'>
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} className='flex items-center space-x-2 text-black hover:text-orange-500
            transition-all duration-300 focus:outline-none'>
            <span className='text-2xl'>{item.icon}</span>
            <span className='text-base font-semibold md:text-md'>{item.text}</span>
          </Link>
        ))}
      </div>

      {/* RIGHT SECTION */}
      <div className='flex items-center space-x-3'>
        {/* Search Bar */}
        <div className='relative hidden sm:block'>
          <input type="text" placeholder='Search...' className='w-28 md:w-32 lg:w-48 border border-gray-300 rounded-full 
            py-1 pl-3 pr-10 text-[1.1rem] placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-300' />
          <IoMdSearch className='absolute right-3 top-2 text-white hover:scale-110 transform-transform text-[1.7rem]' />
        </div>

        {/* Cart and Login */}
        <div className='flex items-center space-x-3'>
          <button className='bg-white/30 p-2 md:text-[1.4rem] rounded-full hover:bg-white/50 transition-all focus:outline-none '>
            <FaCartArrowDown className='text-lg ' />
          </button>
          <button className='hidden sm:flex items-center space-x-2 bg-white/30 hover:bg-white/50 px-2 sm:px-2 md:px-0.5
            lg:px-[0.6rem] py-2 rounded-full hover:shadow-lg hover:scale-103 transition-all focus:outline-none whitespace-nowrap'>
            <FaUserCircle className=' md:text-[1.15rem] text-lg' />
            <span className='font-semibold text-sx sm:text-sm md:text-sm lg:text-base'>Login</span>
          </button>
        </div>

        {/* Hamburger Toggle */}
        <button onClick={() => setisOpen(!isOpen)} aria-label='Toggle Menu'
          className='md:hidden p-2 font-semibold transition-all'>
          {isOpen ? <FaTimes className='text-xl' /> : <FaBars className='text-xl' />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-red-500 
        to-orange-600 rounded-2xl shadow-xl mt-5 mx-7 transition-all duration-300 transform 
        ${isOpen ? "opacity-100 visible scale-110" : "opacity-0 invisible scale-95"}`}>
        
        <div className='p-4 space-y-4'>
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index} className='w-full flex items-center space-x-4 text-white  py-3 px-3 rounded-xl
              focus:outline-none'>
              <span className='text-[1.4rem]'>{item.icon}</span>
              <span className='text-[1rem]'>{item.text}</span>
            </Link>
          ))}

          {/* Search Mobile */}
          <div className='sm:hidden'>
            <div className='rounded-full flex items-center bg-white/40 px-3 w-full'>
              <input type='text' placeholder='Search...' className='w-full bg-transparent border-0 placeholder-white text-white py-[0.2rem] flex-1
                text-sm focus:outline-none' />
              <IoMdSearch className='text-white' />
            </div>
          </div>

          {/* Login Mobile */}
          <button className='sm:hidden flex items-center justify-center space-x-2 rounded-full w-full hover:shadow-lg 
            py-1 px-3 bg-white/40 transition-all focus:outline-none'>
            <FaUserCircle className='text-[1.15rem] text-white' />
            <span className='text-[0.9rem] font-bold '>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
