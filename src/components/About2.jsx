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
    <div className="mt-20 bg-[#17162c] mb-12 max-w-[90%] lg:max-w-[1050px] p-6 lg:p-8 mx-auto rounded-lg">
      {/* Text and Image Section */}
      <div
        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 lg:px-16 py-4"
        ref={textImageRef}
      >
        {/* Text Section */}
        <motion.div
          className="flex flex-col gap-6 w-full lg:w-[50%]"
          initial="hidden"
          animate={textImageInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            Our Journey So Far
          </h3>
          <p className="text-sm sm:text-base text-[#c4c4c4] leading-relaxed">
            Through impactful events, like the <strong>Cranioguard Mission</strong>, where we spoke to over <strong>30 motorcycle riders</strong> and market traders about the importance of helmets and road safety, and our <strong>Medical Outreach to Secondary Schools</strong>, we actively engage with communities to spread knowledge. 
            <br /><br />
            In collaboration with <strong>Mission:Brain Ilorin</strong>, we also hosted <strong>World Epilepsy Day Outreach</strong>, reaching over <strong>1,000 women and mothers</strong> across six locations, dispelling myths about epilepsy and promoting better seizure management practices. 
            <br /><br />
            We are committed to providing resources that support the prevention of <strong>TBIs</strong> and ensuring better outcomes for individuals through early education, awareness, and policy change. Join us in our mission to make a lasting difference in the lives of those affected by brain injuries.
          </p>
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
            alt="Community outreach event participants"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-lg mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About2;
