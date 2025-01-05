'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import cranioguardImage1 from '../Assets/Images/ev3.jpg'
import cranioguardImage2 from '../Assets/Images/ev1.jpg'

const Events = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [hoveredEvent, setHoveredEvent] = useState(null)

  const events = [
    {
      title: 'Cranioguard Mission',
      date: 'January 22, 2024',
      description:
        'We engaged over 30 motorcycle riders and reached out to market men and women on the importance of adhering to road safety practices. Emphasizing helmet use, we shared key insights on preventing traumatic brain and spinal cord injuries.',
      cta: 'Learn More',
      twitterLink: 'https://www.instagram.com/reel/C2VJqmdtze4/?igsh=MWI3OGI5a3F3ZWJ5NA==', // Add Twitter link
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
    <div className="mt-16 lg:mt-32 mx-auto w-11/12 max-w-6xl" ref={ref}>
      <motion.h2
        className="text-4xl font-bold text-[#17162c] mb-8 text-center"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        Our Events
      </motion.h2>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {events.map((event, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="mb-8 overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={event.images[0]}
                  alt={`${event.title} - Primary`}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredEvent === index ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src={event.images[1]}
                  alt={`${event.title} - Secondary`}
                  className="absolute inset-0 w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredEvent === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#17162c]">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.date}</p>
                <p className="text-gray-700 mb-6">{event.description}</p>
                <a
                  href={event.twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#47b8a6] text-white rounded hover:bg-[#3a978c] transition-colors duration-300"
                  onMouseEnter={() => setHoveredEvent(index)}
                  onMouseLeave={() => setHoveredEvent(null)}
                >
                  {event.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Events
