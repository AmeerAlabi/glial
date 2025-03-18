"use client"

import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Heart, Users, Target, ChevronRight, ArrowRight } from "lucide-react"
import { useState } from "react"

const Goals = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [activeGoal, setActiveGoal] = useState(null)
  const [hoveredGoal, setHoveredGoal] = useState(null)

  const goals = [
    {
      icon: Brain,
      title: "Raise Awareness of TBIs",
      description:
        "Inform communities about traumatic brain injuries and their impact on health, through outreach and educational campaigns.",
      color: "#47b8a6",
      highlight: "5.3 million Americans live with TBI-related disabilities",
    },
    {
      icon: Heart,
      title: "Advocate for Better Healthcare",
      description: "Push for policies that ensure better prevention, treatment, and support for individuals with TBIs.",
      color: "#3a9485",
      highlight: "Advocating for improved access to specialized care and rehabilitation",
    },
    {
      icon: Target,
      title: "Support Brain Health & Recovery",
      description:
        "Provide direct support to those affected by TBIs through resources, rehabilitation, and educational tools.",
      color: "#47b8a6",
      highlight: "Developing resources that support long-term recovery and adaptation",
    },
    {
      icon: Users,
      title: "Foster Community Involvement",
      description:
        "Engage local communities in raising awareness, starting conversations, and reducing stigma surrounding brain injuries.",
      color: "#3a9485",
      highlight: "Building a network of support across communities and healthcare providers",
    },
  ]

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Background with animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#17162c] to-[#1c1b33] -z-10">
        {Array.from({ length: 30 }).map((_, i) => (
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
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          {/* Left column - Text content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-10"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-[#47b8a6]/10 backdrop-blur-sm border border-[#47b8a6]/20"
            >
              <span className="w-2 h-2 rounded-full bg-[#47b8a6] mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-[#47b8a6]">Our Mission & Goals</span>
            </motion.div>

            <div className="space-y-6">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Empowering Change Through <span className="text-[#47b8a6]">Impactful Goals</span>
              </motion.h2>

              <motion.p
                className="text-lg text-white/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                At The Glial Initiative, we aim to make lasting change by raising awareness and providing essential
                support to those impacted by traumatic brain injuries. Here's what we strive for:
              </motion.p>
            </div>

            {/* Goals list with enhanced interactions */}
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className={`relative rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                    activeGoal === index
                      ? "bg-white shadow-xl"
                      : hoveredGoal === index
                        ? "bg-white/5 backdrop-blur-sm"
                        : "bg-transparent"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  onClick={() => setActiveGoal(activeGoal === index ? null : index)}
                  onMouseEnter={() => setHoveredGoal(index)}
                  onMouseLeave={() => setHoveredGoal(null)}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        activeGoal === index ? `bg-[${goal.color}]` : "bg-[#47b8a6]/20"
                      }`}
                    >
                      <goal.icon className={`w-6 h-6 ${activeGoal === index ? "text-white" : "text-[#47b8a6]"}`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className={`text-xl font-bold ${activeGoal === index ? "text-[#17162c]" : "text-white"}`}>
                          {goal.title}
                        </h3>
                        <ChevronRight
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeGoal === index ? "rotate-90 text-[#47b8a6]" : "text-white/50"
                          }`}
                        />
                      </div>

                      <p className={`mt-2 ${activeGoal === index ? "text-gray-600" : "text-white/70"}`}>
                        {goal.description}
                      </p>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {activeGoal === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 overflow-hidden"
                          >
                            <div className="border-t border-gray-200 pt-4 mt-2">
                              <div className="bg-[#f8f9fa] p-4 rounded-lg">
                                <p className="text-[#17162c] font-medium">{goal.highlight}</p>
                              </div>

                              {/* <button className="mt-4 inline-flex items-center gap-2 text-[#47b8a6] font-medium hover:underline">
                                Learn more about this goal
                                <ArrowRight className="w-4 h-4" />
                              </button> */}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Enhanced animated brain visualization */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Glowing background effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#47b8a6]/20 blur-[60px]"></div>

              {/* Main brain visualization */}
              <svg width="100%" height="100%" viewBox="0 0 500 500" className="relative z-10">
                <defs>
                  <linearGradient id="goalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#47b8a6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3a9485" stopOpacity="1" />
                  </linearGradient>

                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Outer circles */}
                {[...Array(3)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx="250"
                    cy="250"
                    r={200 - i * 30}
                    stroke="url(#goalGrad)"
                    strokeWidth="1"
                    fill="none"
                    opacity={0.3 + i * 0.2}
                    initial={{ pathLength: 0, rotate: i * 30 }}
                    animate={{
                      pathLength: 1,
                      rotate: i * 30 + 360,
                    }}
                    transition={{
                      pathLength: { duration: 2, ease: "easeInOut" },
                      rotate: { duration: 120, ease: "linear", repeat: Number.POSITIVE_INFINITY },
                    }}
                  />
                ))}

                {/* Brain wave patterns */}
                <motion.path
                  d="M100,250 Q150,150 200,250 T300,250 T400,250"
                  stroke="url(#goalGrad)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />

                <motion.path
                  d="M100,300 Q150,400 200,300 T300,300 T400,300"
                  stroke="url(#goalGrad)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                />

                {/* Connection nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <g key={index}>
                    <motion.circle
                      cx={250 + 180 * Math.cos((angle * Math.PI) / 180)}
                      cy={250 + 180 * Math.sin((angle * Math.PI) / 180)}
                      r="12"
                      fill="url(#goalGrad)"
                      filter="url(#glow)"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                    />

                    {/* Pulsing effect */}
                    <motion.circle
                      cx={250 + 180 * Math.cos((angle * Math.PI) / 180)}
                      cy={250 + 180 * Math.sin((angle * Math.PI) / 180)}
                      r="12"
                      fill="url(#goalGrad)"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 2 + index * 0.2,
                        repeatDelay: index * 0.5,
                      }}
                    />

                    {/* Connection lines to center */}
                    <motion.line
                      x1={250 + 180 * Math.cos((angle * Math.PI) / 180)}
                      y1={250 + 180 * Math.sin((angle * Math.PI) / 180)}
                      x2="250"
                      y2="250"
                      stroke="url(#goalGrad)"
                      strokeWidth="1"
                      opacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 2 + index * 0.1 }}
                    />
                  </g>
                ))}

                {/* Center node */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="30"
                  fill="url(#goalGrad)"
                  filter="url(#glow)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                />

                {/* Pulsing center effect */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="30"
                  fill="url(#goalGrad)"
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1,
                  }}
                />
              </svg>

              {/* Floating goal indicators */}
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className={`absolute flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-[#47b8a6]/30 ${
                    activeGoal === index ? "bg-white/90 shadow-lg" : ""
                  }`}
                  style={{
                    top: `${20 + index * 20}%`,
                    left: index % 2 === 0 ? "5%" : "65%",
                  }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          x: 0,
                          y: [0, -5, 0],
                        }
                      : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }
                  }
                  transition={{
                    opacity: { duration: 0.5, delay: 2 + index * 0.2 },
                    x: { duration: 0.5, delay: 2 + index * 0.2 },
                    y: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: index * 0.5,
                    },
                  }}
                  onClick={() => setActiveGoal(activeGoal === index ? null : index)}
                >
                  <goal.icon className={`w-4 h-4 ${activeGoal === index ? "text-[#47b8a6]" : "text-white"}`} />
                  <span className={`text-xs font-medium ${activeGoal === index ? "text-[#17162c]" : "text-white"}`}>
                    {goal.title.split(" ")[0]}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* <button className="px-8 py-3 bg-[#47b8a6] text-white rounded-full hover:bg-[#3a9485] transition-colors duration-300 shadow-lg shadow-[#47b8a6]/20 flex items-center gap-2 mx-auto">
            Learn More About Our Impact
            <ArrowRight className="w-4 h-4" />
          </button> */}
        </motion.div>
      </div>
    </div>
  )
}

export default Goals

