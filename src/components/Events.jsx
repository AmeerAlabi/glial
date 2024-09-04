import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Events = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const events = [
    {
      title: 'Children’s Day Celebration',
      date: 'May 27, 2024',
      cta: 'Learn More',
    },
    {
      title: 'Annual Charity Gala',
      date: 'December 12, 2024',
      cta: 'Join Us',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: hidden and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } }, // Final state: visible with smooth transition
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Initial state for each item
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Final state for each item
  };

  return (
    <div className="mt-[100px] lg:mt-[200px] mx-auto w-[90%] lg:w-[1050px]" ref={ref}>
      <motion.div
        className="text-[28px] font-bold text-[#17162c] mb-[40px] text-center lg:text-left"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        Our Events
      </motion.div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between bg-[#17162c] text-white p-[25px] rounded-[15px] shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl"
            variants={itemVariants}
          >
            <div>
              <div className="text-[22px] font-semibold mb-[15px]">{event.title}</div>
              <div className="text-[18px] font-normal text-[#b5b5b5]">{event.date}</div>
            </div>
            <button className="mt-[30px] flex items-center gap-[10px] bg-[#47b8a6] text-[#17162c] font-[500] px-[20px] py-[12px] rounded-[10px] hover:bg-[#3a978c] transition-colors duration-300">
              {event.cta} <FaArrowRight />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Events;
