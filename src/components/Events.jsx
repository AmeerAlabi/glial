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
      title: 'Cranioguard Mission',
      date: 'January 22, 2024',
      description:
        'We engaged over 30 motorcycle riders and reached out to market men and women on the importance of adhering to road safety practices. Emphasizing helmet use, we shared key insights on preventing traumatic brain and spinal cord injuries.',
      cta: 'Learn More',
    },
    {
      title: 'World Epilepsy Day Outreach',
      date: 'February 18, 2024',
      description:
        'In partnership with Mission:Brain Ilorin, we conducted outreach across six locations, educating over 1,000 individuals, including young mothers, about epilepsy, seizure management, and dispelling myths surrounding the condition.',
      cta: 'Read More',
    },
    {
      title: 'Medical Outreach to Secondary Schools',
      date: 'November 17, 2024',
      description:
        'Collaborating with Mission:Brain Ilorin, we visited Ar-Raheem Secondary School, speaking to over 100 students about the medical profession, pathways to medical school, and inspiring the next generation of healthcare leaders.',
      cta: 'Explore',
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
              <div className="text-[22px] font-semibold mb-[10px]">{event.title}</div>
              <div className="text-[18px] font-normal text-[#b5b5b5] mb-[15px]">{event.date}</div>
              <p className="text-[16px] text-[#c4c4c4] leading-relaxed">{event.description}</p>
            </div>
            <button className="mt-[20px] flex items-center gap-[10px] bg-[#47b8a6] text-[#17162c] font-[500] px-[20px] py-[12px] rounded-[10px] hover:bg-[#3a978c] transition-colors duration-300">
              {event.cta} <FaArrowRight />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Events;
