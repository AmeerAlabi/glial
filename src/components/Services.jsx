"use client"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Brain, Heart, Users, Target } from "lucide-react"

const Goals = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const goals = [
    {
      icon: Brain,
      title: "Raise Awareness of TBIs",
      description:
        "Inform communities about traumatic brain injuries and their impact on health, through outreach and educational campaigns.",
    },
    {
      icon: Heart,
      title: "Advocate for Better Healthcare",
      description: "Push for policies that ensure better prevention, treatment, and support for individuals with TBIs.",
    },
    {
      icon: Target,
      title: "Support Brain Health & Recovery",
      description:
        "Provide direct support to those affected by TBIs through resources, rehabilitation, and educational tools.",
    },
    {
      icon: Users,
      title: "Foster Community Involvement",
      description:
        "Engage local communities in raising awareness, starting conversations, and reducing stigma surrounding brain injuries.",
    },
  ]

  return (
    <div ref={ref} className="w-full bg-gradient-to-br from-[#17162c] to-[#1c1b33] py-[80px]">
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-[60px]">
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-[55%] flex flex-col gap-[30px]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-[32px] lg:text-[40px] font-bold text-white leading-tight">
            Our Mission: Empowering Change Through Impactful Goals
          </h2>
          <p className="text-[18px] font-normal text-white/80 leading-relaxed">
            At The Glial Initiative, we aim to make lasting change by raising awareness and providing essential support
            to those impacted by traumatic brain injuries. Here's what we strive for:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                className="flex gap-[16px] items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <div className="w-12 h-12 p-3 bg-[#47b8a6] rounded-full flex items-center justify-center">
                  <goal.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-white">{goal.title}</h3>
                  <p className="text-[16px] font-normal text-white/70 mt-[8px]">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Icon Section */}
        <motion.div
          className="w-full lg:w-[45%] flex justify-center items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <svg width="400" height="400" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#47b8a6" stopOpacity="1" />
                <stop offset="100%" stopColor="#3a9485" stopOpacity="1" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="200"
              cy="200"
              r="180"
              stroke="url(#grad1)"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M100,200 Q150,100 200,200 T300,200"
              stroke="url(#grad1)"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M100,240 Q150,340 200,240 T300,240"
              stroke="url(#grad1)"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />
            {[0, 60, 120, 180, 240, 300].map((angle, index) => (
              <motion.circle
                key={index}
                cx={200 + 160 * Math.cos((angle * Math.PI) / 180)}
                cy={200 + 160 * Math.sin((angle * Math.PI) / 180)}
                r="12"
                fill="#47b8a6"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              />
            ))}
            <motion.circle
              cx="200"
              cy="200"
              r="30"
              fill="#47b8a6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

export default Goals

