import React from 'react'
import sponsor from '../Assets/Images/logos.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Sponsors = () => {

    const { ref: sponsorsRef, inView: sponsorsInView } = useInView({
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
    <div>
        <motion.div
        className="mt-[100px] px-[20px] lg:px-[100px]"
        ref={sponsorsRef}
        initial="hidden"
        animate={sponsorsInView ? 'visible' : 'hidden'}
        variants={fadeIn}
      >
        <div className="text-[20px] text-[#17162c] font-[500]">Our Sponsors</div>
        <div className="mt-[20px] flex flex-wrap justify-center lg:justify-start gap-[20px] lg:gap-[100px]">
          {[...Array(5)].map((_, index) => (
            <motion.img
              key={index}
              src={sponsor}
              alt="Sponsor Logo"
              className="w-[120px] h-[30px]"
              initial="hidden"
              animate={sponsorsInView ? 'visible' : 'hidden'}
              variants={fadeInUp}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Sponsors
