import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pattern from '../Assets/Images/pattern.png'; // Adjust path as necessary

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 100 } },
};

const Mission = () => {
  // Intersection Observer for Mission and Vision Sections
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="relative mt-[70px] bg-cover bg-center h-[450px] py-[50px]" >
      <div className="absolute inset-0 bg-opacity-80 flex flex-col md:flex-row   justify-center items-center p-[20px] md:p-[50px] text-white gap-[60px]">
        {/* Mission Section */}
        <motion.div
          className="flex flex-col items-center md:items-start p-[20px] md:p-[30px] bg-[#17162c] text-[white] rounded-xl shadow-xl max-w-md mx-[10px]"
          ref={missionRef}
          initial="hidden"
          animate={missionInView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <h2 className="text-[20px] md:text-[24px] font-bold mb-[10px]">Our Mission</h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat justo neque, eu consectetur mauris vehicula in. Proin molestie massa non consequat scelerisque.
          </p>
          <a href="#join" className="cursor-pointer inline-block px-[20px] py-[10px] bg-[white] text-[#17162c] font-semibold rounded-lg shadow-lg transition-colors duration-300 hover:bg-[#2b2b2b]">
            Donate 
          </a>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="flex flex-col items-center md:items-start p-[20px] md:p-[30px] bg-[#17162c] text-[white] rounded-xl shadow-xl max-w-md mx-[10px]"
          ref={visionRef}
          initial="hidden"
          animate={visionInView ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          <h2 className="text-[20px] md:text-[24px] font-bold mb-[10px]">Our Vision</h2>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat justo neque, eu consectetur mauris vehicula in. Proin molestie massa non consequat scelerisque.
          </p>
          <a href="#volunteer" className="cursor-pointer inline-block px-[20px] py-[10px] bg-[white] text-[#17162c] font-semibold rounded-lg shadow-lg transition-colors duration-300 hover:bg-[#2b2b2b]">
            Volunteer
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;
