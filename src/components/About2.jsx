"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import shirt from "../Assets/Images/shirt.png"
import { CheckCircle } from "lucide-react"

const About2 = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const achievements = [
    "Cranioguard Mission with 30+ motorcycle riders",
    "Medical Outreach to Secondary Schools",
    "World Epilepsy Day Outreach reaching 1,000+ women",
    "Collaboration with Mission:Brain Ilorin",
    "Community education on TBI prevention",
  ]

  return (
    <div className="py-16" ref={sectionRef}>
      <div className="max-w-[90%] lg:max-w-[1050px] mx-auto bg-[#17162c] rounded-xl overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-2/5 h-[300px] lg:h-auto relative"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <img
              src={shirt || "/placeholder.svg"}
              alt="Community outreach event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#17162c] via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-[#17162c] opacity-70"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full lg:w-3/5 p-8 lg:p-10"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 border-l-4 border-[#47b8a6] pl-4">
              Our Journey So Far
            </h2>

            <div className="text-[#e0e0e0] space-y-4 mb-8">
              <p>
                Through impactful events, like the{" "}
                <span className="text-[#47b8a6] font-medium">Cranioguard Mission</span>, where we spoke to over{" "}
                <span className="text-[#47b8a6] font-medium">30 motorcycle riders</span> and market traders about the
                importance of helmets and road safety, and our{" "}
                <span className="text-[#47b8a6] font-medium">Medical Outreach to Secondary Schools</span>, we actively
                engage with communities to spread knowledge.
              </p>

              <p>
                In collaboration with <span className="text-[#47b8a6] font-medium">Mission:Brain Ilorin</span>, we also
                hosted <span className="text-[#47b8a6] font-medium">World Epilepsy Day Outreach</span>, reaching over{" "}
                <span className="text-[#47b8a6] font-medium">1,000 women and mothers</span> across six locations,
                dispelling myths about epilepsy and promoting better seizure management practices.
              </p>

              <p>
                We are committed to providing resources that support the prevention of{" "}
                <span className="text-[#47b8a6] font-medium">TBIs</span> and ensuring better outcomes for individuals
                through early education, awareness, and policy change.
              </p>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Key Achievements</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#47b8a6] mt-0.5 flex-shrink-0" />
                    <span className="text-white text-sm">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About2

