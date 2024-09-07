import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
    <div className="py-[50px] px-[20px] md:px-[50px]">
      <div className="text-center mb-[40px]">
        <h2 className="text-[28px] md:text-[36px] font-bold mb-[10px] text-[#17162c]">We Would Love to Hear From You</h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#666473]">
          If you have any questions or feedback, please feel free to reach out to us. We'll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-[600px] mx-auto bg-white p-[20px] rounded-lg shadow-lg">
        <form action="https://formspree.io/f/mzzpwyrl" method="POST">
          {/* Name Field */}
          <div className="mb-[15px]">
            <label htmlFor="name" className="block text-[#17162c] text-[16px] font-semibold mb-[5px]">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-[10px] border border-[#ddd] rounded-lg"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-[15px]">
            <label htmlFor="email" className="block text-[#17162c] text-[16px] font-semibold mb-[5px]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-[10px] border border-[#ddd] rounded-lg"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-[20px]">
            <label htmlFor="message" className="block text-[#17162c] text-[16px] font-semibold mb-[5px]">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-[10px] border border-[#ddd] rounded-lg"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#17162c] font-bold text-white px-[15px] py-[10px] rounded-lg hover:bg-[#0056b3] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
      <Footer />
      </>
  );
};

export default Contact;
