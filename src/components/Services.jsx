import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import shirt from '../Assets/Images/shirt.png';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.5, // Trigger when 20% of the component is in view
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full bg-[#17162c] md:mt-0 mt-[60px] py-[60px]">
      <div ref={ref} className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row justify-center items-center gap-[40px]">
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-[50%] flex flex-col gap-[20px]"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <div className="text-[28px] lg:text-[36px] font-bold text-white">
            Some services we provide for our children
          </div>
          <div className="text-[16px] font-normal text-white leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </div>
          <div className="flex flex-col gap-[20px]">
            {/* Card 1 */}
            <div className="flex gap-[12px] items-start">
              <div className="w-6 h-6 bg-white rounded-[8px] mt-[5px]"></div>
              <div>
                <div className="text-[18px] lg:text-[20px] font-semibold text-white">Family support</div>
                <div className="text-[14px] font-normal text-white mt-[4px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex gap-[12px] items-start">
              <div className="w-6 h-6 bg-white rounded-[8px] mt-[5px]"></div>
              <div>
                <div className="text-[18px] lg:text-[20px] font-semibold text-white">Health care</div>
                <div className="text-[14px] font-normal text-white mt-[4px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex gap-[12px] items-start">
              <div className="w-6 h-6 bg-white rounded-[8px] mt-[5px]"></div>
              <div>
                <div className="text-[18px] lg:text-[20px] font-semibold text-white">Education support</div>
                <div className="text-[14px] font-normal text-white mt-[4px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex gap-[12px] items-start">
              <div className="w-6 h-6 bg-white rounded-[8px] mt-[5px]"></div>
              <div>
                <div className="text-[18px] lg:text-[20px] font-semibold text-white">Psychological support</div>
                <div className="text-[14px] font-normal text-white mt-[4px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-[50%] flex justify-center"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <img src={shirt} alt="Service Image" className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-[8px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
