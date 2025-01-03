import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import shirt from '../Assets/Images/shirt.png'; // Replace with the actual image path

const Goals = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div ref={ref} className="w-full bg-[#17162c] mt-[60px] py-[60px]">
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row justify-center items-center gap-[40px]">
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-[50%] flex flex-col gap-[20px]"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <div className="text-[28px] lg:text-[36px] font-bold text-white">
            Our Mission: Empowering Change Through Impactful Goals
          </div>
          <div className="text-[16px] font-normal text-white leading-relaxed">
            At The Glial Initiative, we aim to make lasting change by raising awareness and providing essential support to those impacted by traumatic brain injuries. Here's what we strive for:
          </div>
          <div className="flex flex-col gap-[20px]">
            {/* Goal 1 */}
            <div className="flex gap-[12px] items-start">
              <div className="w-6 h-6 bg-[#47b8a6] rounded-[8px] mt-[5px]"></div>
              <div>
                <div className="text-[18px] lg:text-[20px] font-semibold text-white">Raise Awareness of TBIs</div>
                <div className="text-[14px] font-normal text-white mt-[4px]">
                  Inform communities about traumatic brain injuries and their impact on health, through outreach and educational campaigns.
                </div>
              </div>
            </div>
            {/* Goal 2 */}
            <div className="flex gap-[12px] items-start">
              <div className="w-6 h-6 bg-[#47b8a6] rounded-[8px] mt-[5px]"></div>
              <div>
                <div className="text-[18px] lg:text-[20px] font-semibold text-white">Advocate for Better Healthcare</div>
                <div className="text-[14px] font-normal text-white mt-[4px]">
                  Push for policies that ensure better prevention, treatment, and support for individuals with TBIs.
                </div>
              </div>
            </div>
            {/* Goal 3 */}
            <div className="flex gap-[12px] items-start">
              <div className="w-6 h-6 bg-[#47b8a6] rounded-[8px] mt-[5px]"></div>
              <div>
                <div className="text-[18px] lg:text-[20px] font-semibold text-white">Support Brain Health & Recovery</div>
                <div className="text-[14px] font-normal text-white mt-[4px]">
                  Provide direct support to those affected by TBIs through resources, rehabilitation, and educational tools.
                </div>
              </div>
            </div>
            {/* Goal 4 */}
            <div className="flex gap-[12px] items-start">
              <div className="w-6 h-6 bg-[#47b8a6] rounded-[8px] mt-[5px]"></div>
              <div>
                <div className="text-[18px] lg:text-[20px] font-semibold text-white">Foster Community Involvement</div>
                <div className="text-[14px] font-normal text-white mt-[4px]">
                  Engage local communities in raising awareness, starting conversations, and reducing stigma surrounding brain injuries.
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

export default Goals;
