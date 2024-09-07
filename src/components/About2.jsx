import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import shirt from '../Assets/Images/shirt.png';

const About2 = () => {
  // Intersection Observer for Text and Image Sections
  const { ref: textImageRef, inView: textImageInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="mt-[90px] bg-[#17162c] mb-[50px] max-w-[90%] lg:max-w-[1050px] p-[20px] mx-auto h-auto lg:h-[430px] rounded-[14px]">
      {/* Text and Image Section */}
      <div
        className="h-auto max-w-[1000px] mx-auto flex flex-col lg:flex-row justify-center gap-[30px] lg:gap-[80px] items-center px-[20px] lg:px-[100px] py-[10px]"
        ref={textImageRef}
      >
        {/* Text Section */}
        <motion.div
          className="flex w-full lg:w-[450px] flex-col justify-start gap-8"
          initial="hidden"
          animate={textImageInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <div className="text-[20px] sm:text-[24px] font-[500] text-white">Our Journey So Far</div>
          <div className="text-[24px] sm:text-[28px] lg:text-[32px] font-[600] text-white">
            How We Raised 34 Million
          </div>
          <div className="text-[12px] sm:text-[14px] font-[400] text-[#c4c4c4]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            <span className="mt-[30px] block">
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </span>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-auto"
          initial="hidden"
          animate={textImageInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <img
            src={shirt}
            alt="Children with special needs"
            className="w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] rounded-[8px] mx-auto lg:mx-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About2;
