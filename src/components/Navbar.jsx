import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../Assets/Images/logo2.png';
import DonateModal from './DonateModal'; // Import the DonateModal component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative px-[20px] md:shadow-0 shadow-lg lg:px-[100px] w-full h-[80px] flex justify-between items-center bg-white">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-[125px] h-[45px]" />

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-row justify-center items-center gap-[30px]">
        <Link to="/" className="text-[16px] font-medium text-[#17162c] cursor-pointer">Home</Link>
        <Link to="/about" className="text-[16px] font-medium text-[#17162c] cursor-pointer">About us</Link>
        <Link to="/contact" className="text-[16px] font-medium text-[#17162c] cursor-pointer">Contact</Link>
      </div>

      {/* Donate Button */}
      <div
        className="hidden lg:flex cursor-pointer w-[115px] h-[43px] rounded-[7px] bg-[#17162c] font-[500] text-white flex justify-center items-center"
        onClick={openModal} // Open the modal on click
      >
        Donate
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden cursor-pointer text-[#17162c]" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden z-[50] absolute top-[80px] left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-lg">
          <Link to="/" className="text-[16px] font-medium text-[#17162c] cursor-pointer">Home</Link>
          <Link to="/about" className="text-[16px] font-medium text-[#17162c] cursor-pointer">About us</Link>
          <Link to="/contact" className="text-[16px] font-medium text-[#17162c] cursor-pointer">Contact</Link>
          <div
            className="cursor-pointer w-[115px] h-[43px] rounded-[7px] bg-[#17162c] font-[500] text-white flex justify-center items-center"
            onClick={openModal} // Open modal from mobile donate button
          >
            Donate
          </div>
        </div>
      )}

      {/* Donate Modal */}
      <DonateModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Navbar;
