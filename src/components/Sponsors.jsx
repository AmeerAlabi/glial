import React from 'react';
import partner1 from '../Assets/Images/afric.png';
import partner2 from '../Assets/Images/mission.png';
import partner3 from '../Assets/Images/strong.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Partners = () => {
  const { ref: partnersRef, inView: partnersInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <motion.div
      className="mt-[100px] px-[20px] lg:px-[100px]"
      ref={partnersRef}
      initial="hidden"
      animate={partnersInView ? 'visible' : 'hidden'}
      variants={fadeIn}
    >
      <div className="text-[24px] text-[#17162c] font-[600] text-center">
        Our Valued Partners
      </div>
      <div className="mt-[40px] flex flex-wrap justify-center lg:justify-center gap-[40px]">
        {/* Partner 1 */}
        <motion.div
          className="w-[180px] h-[80px] flex justify-center items-center"
          initial="hidden"
          animate={partnersInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <img src={partner1} alt="Partner 1" className="w-full h-auto object-contain" />
        </motion.div>

        {/* Partner 2 */}
        <motion.div
          className="w-[180px] h-[80px] flex justify-center items-center"
          initial="hidden"
          animate={partnersInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <img src={partner2} alt="Partner 2" className="w-full h-auto object-contain" />
        </motion.div>

        {/* Partner 3 */}
        <motion.div
          className="w-[180px] h-[80px] flex justify-center items-center"
          initial="hidden"
          animate={partnersInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <img src={partner3} alt="Partner 3" className="w-full h-auto object-contain" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Partners;
