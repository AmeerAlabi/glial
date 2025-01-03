import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import pic from '../Assets/Images/mask.png';

const About = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

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
    <div className='mt-[60px] mb-[50px] w-full'>
      <div className="h-auto max-w-[1050px] mx-auto flex flex-col lg:flex-row justify-center gap-[30px] lg:gap-[80px] items-center px-[20px] lg:px-[100px] py-[10px]" ref={textImageRef}>
        
        {/* Text Section */}
        <motion.div
          className="flex w-full lg:w-[450px] flex-col justify-start gap-8"
          initial="hidden"
          animate={textImageInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <div className="text-[16px] font-[500] text-[#17162c]">KNOW ABOUT US</div>
          <div className="text-[24px] lg:text-[32px] font-[600] text-[#17162c]">
          We Advocate for Brain Health and Support for Those Affected by Traumatic Brain Injuries
          </div>
          <div className="text-[12px] lg:text-[14px] font-[400] text-[#525560]">
          The Glial Initiative is a nonprofit founded by two passionate medical students, Mustapha Mubarak and Adedoyin James, with the goal of raising awareness about traumatic brain injuries (TBIs) and their long-term effects. Our organization is dedicated to combating TBIs, including shaken baby syndrome, concussions, and other related injuries, by educating communities, advocating for better healthcare practices, and providing support for those affected.
          </div>
          <div
            className="cursor-pointer w-[146px] h-[51px] rounded-[5px] bg-[#17162c] flex justify-center items-center text-white font-[500]"
            onClick={() => navigate('/about')}
          >
            Learn more
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-auto"
          initial="hidden"
          animate={textImageInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <img src={pic} alt="" className="w-full max-w-[400px] rounded-[8px] mx-auto lg:mx-0" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
