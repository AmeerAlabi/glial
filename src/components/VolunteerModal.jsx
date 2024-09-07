import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Using icon for the close button

const VolunteerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Return nothing if the modal is closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-[600px] mx-[20px] p-[30px] rounded-lg shadow-lg relative">
        {/* Close button */}
        <button className="absolute top-[15px] right-[15px] text-[#17162c]" onClick={onClose}>
          <FaTimes size={24} />
        </button>

        {/* Modal Header */}
        <h2 className="text-[#17162c] text-[24px] md:text-[28px] font-bold mb-[20px] text-center">
          Join as a Volunteer
        </h2>

        {/* Form */}
        <form action="https://formspree.io/f/mzzpwyrl" method="POST">
          {/* Name Field */}
          <div className="mb-[15px]">
            <label htmlFor="volunteerName" className="block text-[#17162c] text-[16px] font-semibold mb-[5px]">Name</label>
            <input
              type="text"
              id="volunteerName"
              name="name"
              className="w-full p-[10px] border border-[#ddd] rounded-lg"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-[15px]">
            <label htmlFor="volunteerEmail" className="block text-[#17162c] text-[16px] font-semibold mb-[5px]">Email</label>
            <input
              type="email"
              id="volunteerEmail"
              name="email"
              className="w-full p-[10px] border border-[#ddd] rounded-lg"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-[20px]">
            <label htmlFor="volunteerMessage" className="block text-[#17162c] text-[16px] font-semibold mb-[5px]">Message</label>
            <textarea
              id="volunteerMessage"
              name="message"
              rows="4"
              className="w-full p-[10px] border border-[#ddd] rounded-lg"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-[#17162c] text-white font-bold px-[15px] py-[10px] rounded-lg hover:bg-[#0056b3] transition-colors duration-300"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white font-bold px-[15px] py-[10px] rounded-lg hover:bg-gray-500 transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerModal;
