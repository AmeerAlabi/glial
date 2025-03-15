"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import DonateModal from "./DonateModal"
import VolunteerModal from "./VolunteerModal"
import { Heart, Users, ArrowRight, Sparkles } from "lucide-react"

const Cta = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false)

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
  }

  const openDonateModal = () => {
    setIsDonateModalOpen(true)
  }

  const closeDonateModal = () => {
    setIsDonateModalOpen(false)
  }

  const openVolunteerModal = () => {
    setIsVolunteerModalOpen(true)
  }

  const closeVolunteerModal = () => {
    setIsVolunteerModalOpen(false)
  }

  return (
    <motion.div
      ref={ref}
      className="mx-auto my-[80px] w-[90%] lg:w-[1050px] relative overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={textVariant}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#47b8a6] rounded-full opacity-30"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
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
        ))}
      </div>

      <div className="bg-gradient-to-br from-[#17162c] to-[#1c1b33] rounded-[20px] shadow-[0_10px_50px_rgba(71,184,166,0.2)] p-[30px] md:p-[50px] relative">
        {/* Animated icon */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-20 md:opacity-30">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#47b8a6" stopOpacity="1" />
                <stop offset="100%" stopColor="#3a9485" stopOpacity="1" />
              </linearGradient>
            </defs>
            <motion.path
              d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z"
              stroke="url(#ctaGradient)"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M100,40 C130,40 160,70 160,100 C160,130 130,160 100,160 C70,160 40,130 40,100 C40,70 70,40 100,40 Z"
              stroke="url(#ctaGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M100,60 C120,60 140,80 140,100 C140,120 120,140 100,140 C80,140 60,120 60,100 C60,80 80,60 100,60 Z"
              stroke="url(#ctaGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
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
          </svg>
        </div>

        <div className="flex flex-col justify-center items-center gap-[30px] text-center relative z-10">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#47b8a6]/10 backdrop-blur-sm border border-[#47b8a6]/20"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-[#47b8a6] mr-2" />
            <span className="text-sm font-medium text-[#47b8a6]">Join Our Mission</span>
          </motion.div>

          <motion.h2
            className="text-white font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-tight max-w-[800px]"
            variants={textVariant}
          >
            Help Us Make a Difference for Those Affected by TBIs
          </motion.h2>

          <motion.p
            className="text-white/80 text-[16px] md:text-[18px] font-normal leading-relaxed max-w-[800px]"
            variants={textVariant}
          >
            Your contribution and support can play a pivotal role in improving brain health awareness and providing
            essential services to those affected by TBIs. Join us in advocating for better healthcare, education, and
            support.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-[20px] mt-[10px]">
            <motion.button
              className="h-[50px] w-[200px] bg-[#47b8a6] hover:bg-[#3a978c] rounded-full text-[#17162c] font-[600] flex justify-center items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-[0_5px_15px_rgba(71,184,166,0.4)]"
              variants={buttonVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openDonateModal}
            >
              <Heart className="w-5 h-5" />
              Donate Today
            </motion.button>

            <motion.button
              className="h-[50px] w-[200px] bg-transparent border-2 border-[#47b8a6] hover:bg-[#47b8a6]/10 rounded-full text-white font-[600] flex justify-center items-center gap-2 transition-all duration-300"
              variants={buttonVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openVolunteerModal}
            >
              <Users className="w-5 h-5" />
              Become a Volunteer
            </motion.button>
          </div>

          <motion.div
            className="mt-4 text-[#47b8a6] flex items-center gap-2 cursor-pointer hover:underline"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ x: 5 }}
          >
            <span>Learn more about our impact</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      {isDonateModalOpen && <DonateModal isOpen={isDonateModalOpen} onClose={closeDonateModal} />}
      {isVolunteerModalOpen && <VolunteerModal isOpen={isVolunteerModalOpen} onClose={closeVolunteerModal} />}
    </motion.div>
  )
}

export default Cta

