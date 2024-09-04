import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import pattern from '../Assets/Images/pattern.png';
import heroImage from '../Assets/Images/coat.jpg';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.2, // Trigger when 20% of the component is in view
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div 
      ref={ref}
      className='relative bg-[#17162c] z-[40] w-full h-[470px] gap-[50px] flex items-center justify-around' 
      style={{ 
        backgroundImage: `url(${pattern})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-5">
        
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left text-white px-5 flex-1"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-bold mb-4">
            GLIAL-INITIATIVE
          </h1>
          <p className="mb-6 text-[16px] md:text-[18px] lg:text-[20px] max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-[30px]">
            <motion.button
              className="bg-white h-[45px] rounded-[5px] text-[#17162c] font-semibold py-2 px-6 shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate
            </motion.button>
            <motion.button
              className="border-[3px] border-white h-[45px] rounded-[5px] text-white font-semibold py-2 px-2 shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join as a volunteer
            </motion.button>
          </div>
        </motion.div>

        {/* Image Section - hidden on mobile */}
        <motion.div
          className="hidden md:block mt-8 md:mt-0 md:ml-10 flex-1 flex justify-center"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <img 
            src={heroImage} 
            alt="Hero" 
            className="rounded-[10px] w-full max-w-[400px] h-auto object-cover shadow-lg"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
