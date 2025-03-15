"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Brain,
  Heart,
  Users,
  ChevronRight,
  Award,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import DonateModal from "./DonateModal";
import VolunteerModal from "./VolunteerModal";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Reduced threshold for better mobile triggering
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <Brain className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      value: "27M",
      label: "TBI cases annually",
    },
    {
      icon: <Heart className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      value: "50+",
      label: "Lives impacted",
    },
    {
      icon: <Users className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      value: "50+",
      label: "Community Members",
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openVolunteerModal = () => setIsVolunteerModalOpen(true);
  const closeVolunteerModal = () => setIsVolunteerModalOpen(false);

  return (
    <div
      ref={ref}
      className="relative bg-[url('./Assets/Images/mubaraq.jpg')] overflow-hidden bg-clip-border bg-cover bg-blend-overlay bg-[#17162c]/60  min-h-screen w-full z-40 flex items-center">
      {/* Animated background neurons - Reduced count for mobile */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: window.innerWidth < 768 ? 10 : 20 }).map(
          (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#47b8a6] rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0.3,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          )
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10 container md:px-[50px] px-6 py-0 sm:py-12 md:py-0 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white w-full lg:w-1/2">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5 }}
              className="inline-flex  items-center md:mx-0 mx-auto px-2 sm:px-3 py-1 rounded-full bg-[#47b8a6]/10 backdrop-blur-sm border border-[#47b8a6]/20 mb-2 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#47b8a6] mr-2 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-medium text-[#47b8a6]">
                Advocating for Brain Health
              </span>
            </motion.div>

            {/* Main heading with gradient - Responsive font sizes */}
            <h1 className="text-6xl font-bold leading-snug sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block">The Glial</span>
              <span className="bg-gradient-to-r from-white to-[#47b8a6] bg-clip-text text-transparent">
                Initiative
              </span>
            </h1>
            {/* Description with animated underline */}
            <motion.p
              className="text-[19px] md:mb-0 mb-[20px] md:mt-0 mt-[18px] text-left  sm:text-base md:text-lg lg:text-xl text-white/80 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ lineHeight: "1.6" }}>
              Founded by medical students{" "}
              <span className="font-semibold relative">
                Mustapha Mubarak
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#47b8a6]"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                />
              </span>{" "}
              and{" "}
              <span className="font-semibold relative">
                Adedoyin James
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#47b8a6]"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                />
              </span>
              , dedicated to addressing traumatic brain injuries through
              education, advocacy, and community support.
            </motion.p>

            {/* Animated stats - Adjusted height for mobile */}
            <motion.div
              className="py-2 md:mt-0 md:mb-0 mb-[20px] mt-[18px] sm:py-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}>
              <div className="relative h-14 xs:h-16 sm:h-20 overflow-hidden">
                <AnimatePresence mode="wait">
                  {stats.map(
                    (stat, index) =>
                      activeIndex === index && (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 flex items-center gap-3 sm:gap-4">
                          <div className="p-1.5 sm:p-2 rounded-lg bg-[#47b8a6]/10">
                            {stat.icon}
                          </div>
                          <div>
                            <div className="text-[24px] xs:text-xl sm:text-2xl font-bold">
                              {stat.value}
                            </div>
                            <div className="text-[15px] sm:text-sm text-white/70">
                              {stat.label}
                            </div>
                          </div>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>

              {/* Indicator dots */}
              <div className="flex gap-2 mt-1 sm:mt-2">
                {stats.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all ${
                      activeIndex === index
                        ? "bg-[#47b8a6] w-4 sm:w-6"
                        : "bg-white/30"
                    }`}
                    aria-label={`View stat ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* CTA buttons - Better mobile layout */}
            <motion.div
              className="flex md:mt-0 mt-[20px] flex-wrap gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}>
              <motion.button
                className="relative overflow-hidden group bg-[#47b8a6] text-white font-semibold py-1.5 xs:py-2 sm:py-3 px-3 xs:px-4 sm:px-6 rounded-lg shadow-lg flex items-center gap-1.5 sm:gap-2 text-xs xs:text-sm sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={openModal}>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#47b8a6] to-[#3a9485] opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
                <Heart className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                <span className="relative z-10">Donate Now</span>
              </motion.button>

              <motion.button
                className="relative  h-[40px] overflow-hidden group border-2 border-[#47b8a6] text-[#47b8a6] font-semibold py-1.5 xs:py-2 sm:py-3 px-3 xs:px-4 sm:px-6 rounded-lg shadow-lg flex items-center gap-1.5 sm:gap-2 text-xs xs:text-sm sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={openVolunteerModal}>
                <motion.span
                  className="absolute  inset-0 bg-[#47b8a6]/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
                <Users className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                <span className="relative z-10">Join as Volunteer</span>
              </motion.button>

              <motion.button
                className="relative h-[40px]  overflow-hidden group bg-white text-[#17162c] font-semibold py-1.5 xs:py-2 sm:py-3 px-3 xs:px-4 sm:px-6 rounded-lg shadow-lg flex items-center gap-1.5 sm:gap-2 text-xs xs:text-sm sm:text-base"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/infographics")}>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
                <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                <span className="relative z-10">Explore Resources</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right column - Animated Neuron Icon with Badges - Better positioning for different screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md hidden lg:w-1/2 h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] md:flex items-center justify-center relative mt-4 lg:mt-0">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[350px]">
              <motion.path
                d="M100 20 C 80 40, 20 40, 20 100 S 80 160, 100 180"
                fill="none"
                stroke="#47b8a6"
                strokeWidth="4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M100 20 C 120 40, 180 40, 180 100 S 120 160, 100 180"
                fill="none"
                stroke="#47b8a6"
                strokeWidth="4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.circle
                cx="100"
                cy="100"
                r="10"
                fill="#47b8a6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
              {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                <motion.circle
                  key={index}
                  cx={100 + 60 * Math.cos((angle * Math.PI) / 180)}
                  cy={100 + 60 * Math.sin((angle * Math.PI) / 180)}
                  r="6"
                  fill="#47b8a6"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                />
              ))}
            </svg>

            {/* Badges with responsive positioning */}
            <motion.div
              className="absolute top-0 left-0 p-1.5 sm:p-2 bg-[#47b8a6]/10 backdrop-blur-sm rounded-lg flex items-center gap-1.5 sm:gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 1.5 }}>
              <Award className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#47b8a6]" />
              <span className="text-xs sm:text-sm font-medium text-white">
                NGO
              </span>
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-1/4 p-1.5 sm:p-2 bg-[#47b8a6]/10 backdrop-blur-sm rounded-lg flex items-center gap-1.5 sm:gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.7 }}>
              <BookOpen className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#47b8a6]" />
              <span className="text-xs sm:text-sm font-medium text-white">
                3+ Outreaches
              </span>
            </motion.div>

            <motion.div
              className="absolute top-1/4 right-0 p-1.5 sm:p-2 bg-[#47b8a6]/10 backdrop-blur-sm rounded-lg flex items-center gap-1.5 sm:gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 1.9 }}>
              <Lightbulb className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#47b8a6]" />
              <span className="text-xs sm:text-sm font-medium text-white">
                Innovative Approaches
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modals */}
      <DonateModal isOpen={isModalOpen} onClose={closeModal} />
      {isVolunteerModalOpen && (
        <VolunteerModal
          isOpen={isVolunteerModalOpen}
          onClose={closeVolunteerModal}
        />
      )}

      {/* Mobile Badges - Better spacing and sizing */}
      <motion.div
        className="lg:hidden mt-4 sm:mt-6 hidden md:block md:mt-8 space-y-2 sm:space-y-3 px-4 pb-6 sm:pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 1 }}>
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-[#47b8a6]/10 backdrop-blur-sm rounded-lg">
          <Award className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#47b8a6]" />
          <span className="text-xs sm:text-sm font-medium text-white">
            Top-rated NGO
          </span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-[#47b8a6]/10 backdrop-blur-sm rounded-lg">
          <BookOpen className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#47b8a6]" />
          <span className="text-xs sm:text-sm font-medium text-white">
            100+ Research Papers
          </span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 bg-[#47b8a6]/10 backdrop-blur-sm rounded-lg">
          <Lightbulb className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#47b8a6]" />
          <span className="text-xs sm:text-sm font-medium text-white">
            Innovative Approaches
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
