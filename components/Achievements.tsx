"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Calendar, ExternalLink, ArrowRight } from "lucide-react"

const CollaborationsAndEvents = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const collaborationsAndEvents = [
    {
      icon: <Users size={24} className="text-[#47b8a6]" />,
      title: "Collaboration with Mission:Brain Ilorin",
      description:
        "Worked alongside Mission:Brain Ilorin in various outreach programs, advocating for brain health awareness and medical education.",
      twitterLink: "https://x.com/missionbrainuin/status/1857736361304011052",
    },
    {
      icon: <Calendar size={24} className="text-[#47b8a6]" />,
      title: "World Epilepsy Day Outreach",
      description:
        "In collaboration with Mission:Brain Ilorin, we educated over 1,000 people across six locations on epilepsy awareness and seizure management.",
      twitterLink: "https://x.com/missionbrainuin/status/1857736361304011052",
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#17162c] mb-4">Other Collaborations and Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partnering with organizations and hosting events to create greater impact in brain health awareness and
            education.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {collaborationsAndEvents.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#17162c] to-[#1c1b33] z-0"></div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#47b8a6]/10 rounded-full -mr-16 -mt-16 z-0"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#47b8a6]/10 rounded-full -ml-12 -mb-12 z-0"></div>

              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#17162c] border border-[#47b8a6]/30 flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>

                <p className="text-white/80 mb-6 flex-grow">{item.description}</p>

                <div className="flex justify-between items-center">
                  <motion.a
                    href={item.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#47b8a6] font-medium hover:text-white transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    Read More on Twitter
                    <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </motion.a>

                  <motion.a
                    href={item.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#47b8a6]/20 flex items-center justify-center text-[#47b8a6] hover:bg-[#47b8a6] hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
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
          {/* <button className="px-6 py-3 bg-[#17162c] text-white rounded-full hover:bg-[#47b8a6] transition-colors duration-300 font-medium">
            View All Collaborations
          </button> */}
        </motion.div>
      </div>
    </div>
  )
}

export default CollaborationsAndEvents

