"use client"
import partner1 from "../Assets/Images/afric.png"
import partner2 from "../Assets/Images/mission.png"
import partner3 from "../Assets/Images/strong.png"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Partners = () => {
  const { ref: partnersRef, inView: partnersInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  }

  const partners = [
    { logo: partner1, name: "African Health Initiative" },
    { logo: partner2, name: "Mission Brain Health" },
    { logo: partner3, name: " Kel strong Foundation" },
  ]

  return (
    <motion.div
      className="py-[80px] px-[20px] lg:px-[100px] bg-gradient-to-b from-white to-gray-50"
      ref={partnersRef}
      initial="hidden"
      animate={partnersInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div className="flex flex-col items-center justify-center mb-[60px]" variants={fadeInUp}>
          <div className="w-[60px] h-[4px] bg-[#47b8a6] mb-[20px] rounded-full"></div>
          <h2 className="text-[32px] md:text-[36px] text-[#17162c] font-[700] text-center">Our Valued Partners</h2>
          <p className="text-[16px] md:text-[18px] text-[#525560] text-center max-w-[600px] mt-[16px]">
            Collaborating with leading organizations to advance brain health research, education, and support for those
            affected by traumatic brain injuries.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-[40px] md:gap-[60px] lg:gap-[80px]">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[16px] p-[30px] shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              initial="hidden"
              animate={partnersInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.1 * index,
                  },
                },
              }}
              whileHover={{ y: -10 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-[200px] h-[100px] flex items-center justify-center mb-[20px]">
                  <motion.img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-auto object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-[18px] font-[600] text-[#17162c] text-center group-hover:text-[#47b8a6] transition-colors duration-300">
                  {partner.name}
                </h3>
              </div>

              <motion.div
                className="w-full h-[3px] mt-[20px] rounded-full overflow-hidden"
                style={{ background: "#f0f0f0" }}
              >
                <motion.div
                  className="h-full bg-[#47b8a6]"
                  initial={{ width: 0 }}
                  animate={partnersInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + 0.1 * index }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-[60px] text-center"
          initial={{ opacity: 0 }}
          animate={partnersInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* <button className="px-[30px] py-[12px] bg-[#17162c] text-white rounded-full hover:bg-[#47b8a6] transition-colors duration-300 font-[500]"> */}
            {/* Become a Partner
          </button> */}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Partners

