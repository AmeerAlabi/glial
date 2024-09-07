import React, { useState } from 'react';

// Modal Component
const DonateModal = ({ isOpen, onClose }) => {
  const accountNumber = "123456789"; // Your account number

  // Function to copy account number to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    alert("Account number copied to clipboard!");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-[20px] rounded-lg shadow-lg w-[300px] sm:w-[400px]">
        <h2 className="text-[22px] font-bold mb-[20px] text-center">Donate to Our Cause</h2>
        <p className="text-center mb-[15px] text-[16px] font-medium">Account Number:</p>
        <div className="bg-gray-100 p-[10px] text-center rounded-lg text-[18px] font-semibold mb-[20px]">
          {accountNumber}
        </div>
        <button
          onClick={copyToClipboard}
          className="w-full bg-[#007BFF] text-white py-[10px] rounded-lg hover:bg-[#0056b3] transition-colors duration-300"
        >
          Copy Account Number
        </button>
        <button
          onClick={onClose}
          className="w-full mt-[10px] bg-red-500 text-white py-[10px] rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};


export default DonateModal