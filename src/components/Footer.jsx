import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import logo from '../Assets/Images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.3, // Trigger when 20% of the component is in view
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <footer 
      ref={ref} 
      className="bg-[#17162c] mt-[200px] text-white py-[50px]"
    >
      <div className="w-[90%] lg:w-[1050px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-[40px]">
        
        {/* Logo Section */}
        <motion.div
          className="flex flex-col items-start"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <a href="#top" className="mb-[15px]">
            <img src={logo} alt="Logo" className="w-[135px] h-[50px]" />
          </a>
          <a href="#top" className="text-[#47b8a6] flex items-center gap-[5px] text-[16px] font-medium hover:text-[#3a978c] transition-colors duration-300">
            Back to Top <FaArrowUp />
          </a>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-col gap-[15px]"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <div className="text-[22px] font-semibold mb-[15px]">Quick Links</div>
          <Link to="/" className="text-[16px] hover:text-[#47b8a6] transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-[16px] hover:text-[#47b8a6] transition-colors duration-300">About Us</Link>
          <Link to="/contact" className="text-[16px] hover:text-[#47b8a6] transition-colors duration-300">Contact</Link>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          className="flex flex-col items-start lg:items-end"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <div className="text-[22px] font-semibold mb-[15px]">Subscribe to Our Newsletter</div>
          <div className="flex flex-col gap-[10px] lg:flex-row lg:gap-[15px] items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[250px] lg:w-[300px] h-[45px] px-[15px] rounded-[8px] text-black border border-[#47b8a6] focus:outline-none focus:ring-2 focus:ring-[#47b8a6] transition-all duration-300"
            />
            <button className="w-[130px] h-[45px] bg-[#47b8a6] text-[#17162c] font-[500] rounded-[8px] flex justify-center items-center hover:bg-[#3a978c] transition-colors duration-300 mt-[10px] lg:mt-0">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
