"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  ArrowRight,
  Brain,
  AlertTriangle,
  ExternalLink,
  Maximize2,
  X,
  Smartphone,
  Monitor,
  Laptop,
  Clock,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import english from "../Assets/Images/tbi-eng.jpg"
import englishsbs from "../Assets/Images/sbs-eng.jpg"

const Resources = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const navigate = useNavigate()
  const [expandedImage, setExpandedImage] = useState(null)
  const [activeTab, setActiveTab] = useState("resources") // "resources" or "solutions"

  const resources = [
    {
      title: "Shaken Baby Syndrome",
      description:
        "Learn about the causes, symptoms, and prevention of Shaken Baby Syndrome, a serious form of child abuse that can lead to permanent brain damage or death.",
      icon: <AlertTriangle className="w-8 h-8 text-[#47b8a6]" />,
      image: englishsbs,
      link: "/resources/sbs",
      color: "#47b8a6",
    },
    {
      title: "Traumatic Brain Injury",
      description:
        "Understand the impact, treatment options, and recovery process for Traumatic Brain Injuries (TBIs), which affect millions of people worldwide each year.",
      icon: <Brain className="w-8 h-8 text-[#47b8a6]" />,
      image: english,
      link: "/resources/tbi",
      color: "#47b8a6",
    },
  ]

  const solutions = [
    {
      title: "TBI Mobile App",
      description:
        "Our mobile application provides real-time tracking of symptoms, medication reminders, and educational resources for TBI patients and caregivers.",
      icon: <Smartphone className="w-8 h-8 text-[#47b8a6]" />,
      image: "/placeholder.svg?height=600&width=300", // Replace with actual screenshot
      link: "/solutions/mobile-app",
      color: "#47b8a6",
      comingSoon: true,
    },
    {
      title: "Caregiver Dashboard",
      description:
        "A comprehensive web dashboard that helps caregivers monitor patient progress, access treatment plans, and coordinate with healthcare providers.",
      icon: <Monitor className="w-8 h-8 text-[#47b8a6]" />,
      image: "/placeholder.svg?height=600&width=800", // Replace with actual screenshot
      link: "/solutions/caregiver-dashboard",
      color: "#47b8a6",
      comingSoon: true,
    },
    {
      title: "Healthcare Provider Portal",
      description:
        "Specialized tools for healthcare professionals to track patient outcomes, share resources, and collaborate on treatment strategies for TBI patients.",
      icon: <Laptop className="w-8 h-8 text-[#47b8a6]" />,
      image: "/placeholder.svg?height=600&width=800", // Replace with actual screenshot
      link: "/solutions/provider-portal",
      color: "#47b8a6",
      comingSoon: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-16 h-1 bg-[#47b8a6] mb-4 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6 }}
          />
          <h2 className="text-3xl md:text-4xl font-bold text-[#17162c] mb-4">
            {activeTab === "resources" ? "Educational Resources" : "Digital Solutions"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {activeTab === "resources"
              ? "Explore our comprehensive resources on brain health, traumatic injuries, and prevention strategies to better understand and address these critical health issues."
              : "Discover our innovative digital solutions designed to support TBI patients, caregivers, and healthcare providers in managing and improving outcomes."}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full flex">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "resources" ? "bg-[#47b8a6] text-white shadow-md" : "text-gray-600 hover:text-[#47b8a6]"
              }`}
              onClick={() => setActiveTab("resources")}
            >
              Resources
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "solutions" ? "bg-[#47b8a6] text-white shadow-md" : "text-gray-600 hover:text-[#47b8a6]"
              }`}
              onClick={() => setActiveTab("solutions")}
            >
              Solutions
            </button>
          </div>
        </div>

        {/* Resources Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "resources" && (
            <motion.div
              key="resources"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
            >
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6">
                    <div
                      className="relative border border-gray-200 rounded-lg overflow-hidden mb-6 group cursor-pointer"
                      onClick={() => setExpandedImage(resource.image)}
                    >
                      <div className="relative h-[300px] overflow-hidden">
                        <img
                          src={resource.image || "/placeholder.svg"}
                          alt={resource.title}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#17162c]/30 group-hover:opacity-0 transition-opacity duration-300"></div>

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#17162c]/20">
                          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                            <Maximize2 className="w-6 h-6 text-[#17162c]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#47b8a6]/10 flex items-center justify-center">
                        {resource.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#17162c]">{resource.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6">{resource.description}</p>

                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => navigate(resource.link)}
                        className="inline-flex items-center gap-2 text-[#17162c] font-medium hover:text-[#47b8a6] transition-colors duration-300 group"
                      >
                        View Resource
                        <motion.div
                          className="bg-[#47b8a6] rounded-full p-1"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="h-4 w-4 text-white" />
                        </motion.div>
                      </button>

                      <button
                        onClick={() => window.open(resource.link, "_blank")}
                        className="w-8 h-8 rounded-full bg-[#17162c]/10 flex items-center justify-center text-[#17162c] hover:bg-[#17162c] hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Solutions Tab Content */}
          {activeTab === "solutions" && (
            <motion.div
              key="solutions"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden shadow-lg group relative ${
                    solution.comingSoon ? "opacity-90" : ""
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Coming Soon Badge */}
                  {solution.comingSoon && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-[#17162c] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg animate-pulse">
                        <Clock className="w-3.5 h-3.5" />
                        COMING SOON
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div
                      className="relative border border-gray-200 rounded-lg overflow-hidden mb-6 group cursor-pointer"
                      onClick={() => setExpandedImage(solution.image)}
                    >
                      <div className="relative h-[200px] overflow-hidden">
                        <img
                          src={solution.image || "/placeholder.svg"}
                          alt={solution.title}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#17162c]/30 group-hover:opacity-0 transition-opacity duration-300"></div>

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#17162c]/20">
                          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                            <Maximize2 className="w-6 h-6 text-[#17162c]" />
                          </div>
                        </div>

                        {/* Semi-transparent overlay for coming soon items */}
                        {solution.comingSoon && (
                          <div className="absolute inset-0 bg-gray-100/30 backdrop-blur-[1px]"></div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#47b8a6]/10 flex items-center justify-center">
                        {solution.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#17162c]">{solution.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6">{solution.description}</p>

                    <div className="flex justify-between items-center">
                      {solution.comingSoon ? (
                        <button
                          className="inline-flex items-center gap-2 text-gray-400 font-medium cursor-not-allowed"
                          disabled
                        >
                          Coming Soon
                          <motion.div className="bg-gray-300 rounded-full p-1">
                            <Clock className="h-4 w-4 text-gray-500" />
                          </motion.div>
                        </button>
                      ) : (
                        <button
                          onClick={() => navigate(solution.link)}
                          className="inline-flex items-center gap-2 text-[#17162c] font-medium hover:text-[#47b8a6] transition-colors duration-300 group"
                        >
                          Learn More
                          <motion.div
                            className="bg-[#47b8a6] rounded-full p-1"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-4 w-4 text-white" />
                          </motion.div>
                        </button>
                      )}

                      {solution.comingSoon ? (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 cursor-not-allowed">
                          <Clock className="w-4 h-4" />
                        </div>
                      ) : (
                        <button
                          onClick={() => window.open(solution.link, "_blank")}
                          className="w-8 h-8 rounded-full bg-[#17162c]/10 flex items-center justify-center text-[#17162c] hover:bg-[#17162c] hover:text-white transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Image Modal */}
      {expandedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-lg">
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg"
              onClick={() => setExpandedImage(null)}
            >
              <X className="w-6 h-6 text-[#17162c]" />
            </button>
            <img src={expandedImage || "/placeholder.svg"} alt="Full resource" className="w-full h-auto" />
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Resources

