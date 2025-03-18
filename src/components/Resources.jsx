"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Brain, AlertTriangle, ExternalLink, Maximize2, X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import english from '../Assets/Images/tbi-eng.jpg'
import englishsbs from '../Assets/Images/sbs-eng.jpg'
import Footer from "./Footer"


const Resources = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const navigate = useNavigate()
  const [expandedImage, setExpandedImage] = useState(null)

  const resources = [
    {
      title: "Shaken Baby Syndrome",
      description:
        "Learn about the causes, symptoms, and prevention of Shaken Baby Syndrome, a serious form of child abuse that can lead to permanent brain damage or death.",
      icon: <AlertTriangle className="w-8 h-8 text-[#47b8a6]" />,
      image: englishsbs, // Replace with actual flyer image path
      link: "/resources/sbs",
      color: "#47b8a6",
    },
    {
      title: "Traumatic Brain Injury",
      description:
        "Understand the impact, treatment options, and recovery process for Traumatic Brain Injuries (TBIs), which affect millions of people worldwide each year.",
      icon: <Brain className="w-8 h-8 text-[#47b8a6]" />,
      image: english, // Replace with actual flyer image path
      link: "/resources/tbi",
      color: "#47b8a6",
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
          className="text-center mb-16"
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#17162c] mb-4">Educational Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive resources on brain health, traumatic injuries, and prevention strategies to better
            understand and address these critical health issues.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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

                  {/* <div className="absolute bottom-0 left-0 right-0 text-center py-2 bg-[#17162c]/70 text-white text-sm">
                    Click to view full resource
                  </div> */}
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

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* <button
            onClick={() => navigate("/infographics")}
            className="px-6 py-3 bg-[#17162c] text-white rounded-full hover:bg-[#47b8a6] transition-colors duration-300 font-medium"
          >
            View All Resources
          </button> */}
        </motion.div>
      </div>

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
      {/* <Footer /> */}
    </div>
  )
}

export default Resources

