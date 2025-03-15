"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full h-full py-[20px] bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      <div
        className="h-auto max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center px-[20px] lg:px-[50px] py-[50px]"
        ref={sectionRef}>
        {/* Text Section */}
        <motion.div
          className="flex w-full lg:w-1/2 flex-col justify-start gap-8"
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={fadeInUp}>
          <div className="text-[16px] font-[600] text-[#47b8a6] uppercase tracking-wider">
            Know About Us
          </div>
          <h2 className="text-[28px] lg:text-[36px] font-[700] text-[#17162c] leading-tight">
            Advocating for Brain Health and TBI Support
          </h2>
          <p className="text-[16px] font-[400] text-[#525560] leading-relaxed">
            The Glial Initiative, founded by medical students Mustapha Mubarak
            and Adedoyin James, is dedicated to raising awareness about
            traumatic brain injuries (TBIs) and their long-term effects. We
            combat TBIs through community education, healthcare advocacy, and
            support for those affected.
          </p>
          <motion.button
            className="w-[180px] h-[54px] rounded-full bg-[#17162c] text-white font-[500] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#47b8a6]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/about")}>
            Learn More <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Animated Icon Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0"
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={fadeInUp}>
          <svg width="300" height="300" viewBox="0 0 300 300">
            <motion.circle
              cx="150"
              cy="150"
              r="120"
              fill="none"
              stroke="#47b8a6"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M90,150 Q120,90 150,150 T210,150"
              fill="none"
              stroke="#17162c"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M90,180 Q120,240 150,180 T210,180"
              fill="none"
              stroke="#17162c"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />
            {[0, 60, 120, 180, 240, 300].map((angle, index) => (
              <motion.circle
                key={index}
                cx={150 + 100 * Math.cos((angle * Math.PI) / 180)}
                cy={150 + 100 * Math.sin((angle * Math.PI) / 180)}
                r="10"
                fill="#47b8a6"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              />
            ))}
            <motion.circle
              cx="150"
              cy="150"
              r="20"
              fill="#17162c"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
