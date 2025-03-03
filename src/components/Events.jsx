"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Calendar, ExternalLink } from "lucide-react"
import cranioguardImage1 from "../Assets/Images/ev3.jpg"
import cranioguardImage2 from "../Assets/Images/ev1.jpg"

const Events = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [hoveredEvent, setHoveredEvent] = useState(null)

  const events = [
    {
      title: "Cranioguard Mission",
      date: "January 22, 2024",
      description:
        "We engaged over 30 motorcycle riders and reached out to market men and women on the importance of adhering to road safety practices. Emphasizing helmet use, we shared key insights on preventing traumatic brain and spinal cord injuries.",
      cta: "Learn More",
      twitterLink: "https://www.instagram.com/reel/C2VJqmdtze4/?igsh=MWI3OGI5a3F3ZWJ5NA==",
      images: [cranioguardImage1, cranioguardImage2],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="mx-auto w-11/12 max-w-6xl">
        <motion.div
          className="flex flex-col items-center justify-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="w-16 h-1 bg-[#47b8a6] mb-4 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h2 className="text-3xl md:text-4xl font-bold text-[#17162c] text-center" variants={itemVariants}>
            Our Events
          </motion.h2>
          <motion.p className="text-gray-600 text-center max-w-2xl mt-4" variants={itemVariants}>
            Engaging with communities to raise awareness and provide education about traumatic brain injuries and safety
            practices.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 gap-12"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-1/2 h-80 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#17162c]/50 to-transparent z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.img
                    src={event.images[0]}
                    alt={`${event.title} - Primary`}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: hoveredEvent === index ? 1.05 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.img
                    src={event.images[1]}
                    alt={`${event.title} - Secondary`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredEvent === index ? 0.8 : 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  <motion.div
                    className="absolute top-4 left-4 bg-[#47b8a6] text-white px-4 py-2 rounded-full flex items-center gap-2 z-20"
                    initial={{ x: -50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </motion.div>
                </div>

                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#17162c]">{event.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <motion.a
                      href={event.twitterLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#47b8a6] font-semibold hover:text-[#3a978c] transition-colors duration-300 group"
                      onMouseEnter={() => setHoveredEvent(index)}
                      onMouseLeave={() => setHoveredEvent(null)}
                      whileHover={{ x: 5 }}
                    >
                      {event.cta}
                      <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </motion.a>

                    <motion.a
                      href={event.twitterLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#17162c] text-white hover:bg-[#47b8a6] transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="px-8 py-3 bg-[#17162c] text-white rounded-full hover:bg-[#47b8a6] transition-colors duration-300 flex items-center gap-2 mx-auto">
            View All Events
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Events

