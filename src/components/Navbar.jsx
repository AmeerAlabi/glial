import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../Assets/Images/logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative  px-[20px] md:shadow-0 shadow-lg lg:px-[100px]  w-full h-[80px] flex justify-between items-center bg-white '>
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-[125px] h-[45px]" />

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-row justify-center items-center gap-[30px]">
        <a href="#" className="text-[16px] font-medium text-[#17162c] cursor-pointer">Home</a>
        <a href="#" className="text-[16px] font-medium text-[#17162c] cursor-pointer">About us</a>
        <a href="#" className="text-[16px] font-medium text-[#17162c] cursor-pointer">What We Do</a>
        <a href="#" className="text-[16px] font-medium text-[#17162c] cursor-pointer">Media</a>
        <a href="#" className="text-[16px] font-medium text-[#17162c] cursor-pointer">Contact</a>
      </div>

      {/* Donate Button */}
      <div className="hidden lg:flex cursor-pointer w-[115px] h-[43px] rounded-[7px] bg-[#17162c] font-[500] text-white flex justify-center items-center">
        Donate
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden cursor-pointer  text-[#17162c]" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden z-[50] absolute top-[80px] left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-lg">
          <a href="#" className="text-[16px] font-medium text-[#17162c] cursor-pointer">Home</a>
          <a href="#" className="text-[16px] font-medium text-[#17162c] cursor-pointer">About us</a>
          <a href="#" className="text-[16px] font-medium text-[#17162c] cursor-pointer">What We Do</a>
          <a href="#" className="text-[16px] font-medium text-[#17162c] cursor-pointer">Media</a>
          <a href="#" className="text-[16px] font-medium text-[#17162c] cursor-pointer">Contact</a>
          <div className="cursor-pointer w-[115px] h-[43px] rounded-[7px] bg-[#17162c] font-[500] text-white flex justify-center items-center">
            Donate
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
