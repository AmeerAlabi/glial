import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Cta = () => {
  // Setup the intersection observer
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // Adjust this value based on when you want the animation to trigger
  });

  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <motion.div 
      ref={ref}
      className="mx-auto mt-[70px] w-[90%] lg:w-[1050px] bg-[#17162c] rounded-[10px] md:p-[30px] md:py-[60px] p-[25px]"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={textVariant}
    >
      <div className="flex flex-col justify-center items-center gap-[20px] text-center">
        <motion.div 
          className="text-white font-bold text-[28px] lg:text-[36px] leading-snug"
          variants={textVariant}
        >
          You can contribute to provide a place for children with special needs!
        </motion.div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-[15px]">
          <motion.button 
            className="h-[45px] w-[180px] bg-[#47b8a6] hover:bg-[#3a978c] rounded-[10px] text-[#17162c] font-[500] flex justify-center items-center transition-colors duration-300"
            variants={buttonVariant}
          >
            Donate
          </motion.button>
          <motion.button 
            className="h-[45px] w-[180px] bg-transparent border-[2px] border-[#47b8a6] hover:bg-[#47b8a6] rounded-[10px] text-white font-[500] flex justify-center items-center transition-colors duration-300"
            variants={buttonVariant}
          >
            Join as Volunteer
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cta;
