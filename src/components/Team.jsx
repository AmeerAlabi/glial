"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import teamImage1 from "../Assets/Images/mb.png"
import teamImage2 from "../Assets/Images/jm.png"
import teamImage3 from "../Assets/Images/aam.png"
import teamImage4 from "../Assets/Images/am.png"
import teamImage5 from "../Assets/Images/bj.png"
import { Linkedin, Twitter, ExternalLink } from "lucide-react"

const teamMembers = [
  {
    name: "Benjamin Sucoop",
    role: "Team Member",
    image: teamImage5,
    linkedin: "https://www.linkedin.com/in/mustapha-mubarak/",
    twitter: "",
  },
  {
    name: "Mubarak Mustapha",
    role: "Founder",
    image: teamImage1,
    linkedin: "https://www.linkedin.com/in/mustapha-mubarak/",
    twitter: "https://x.com/neuromuby?t=fdp0hyK_auGAal8qcCVDCg&s=09",
  },
  {
    name: "James Adedoyin",
    role: "Co-Founder",
    image: teamImage2,
    linkedin: "https://www.linkedin.com/in/james-adedoyin",
    twitter: "",
  },
  {
    name: "Ameer Alabi",
    role: "Team Member",
    image: teamImage4,
    linkedin: "https://www.linkedin.com/in/ameer-alabi-9bb852287/",
    twitter: "https://x.com/Alman_0401",
  },
  {
    name: "AbdulRahman Amzat",
    role: "Team Member",
    image: teamImage3,
    linkedin: "",
    twitter: "https://x.com/Medic_zat",
  },
]

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="py-20 ">
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#17162c] mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team is composed of passionate professionals dedicated to raising awareness about traumatic brain
            injuries and providing support to those affected.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group h-full"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-white h-full flex flex-col">
                {/* Background pattern */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-[#17162c] to-[#47b8a6] opacity-10 z-0"></div>

                {/* Member image */}
                <div className="relative z-10 pt-8 px-6 flex justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Member info */}
                <div className="p-6 text-center flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-[#17162c] mb-1">{member.name}</h3>
                  <p className="text-[#47b8a6] font-medium text-sm mb-4">{member.role}</p>

                  {/* Spacer to push social links to bottom */}
                  <div className="flex-grow"></div>

                  {/* Social links - always same height regardless of content */}
                  <div className="flex justify-center space-x-4 h-8">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-colors duration-300"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                    {/* Add empty placeholder if no social links to maintain height */}
                    {!member.linkedin && !member.twitter && <div className="w-8 h-8"></div>}
                  </div>
                </div>

                {/* Hover effect */}
                {/* <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#17162c] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end justify-center pb-6"
                  whileHover={{ opacity: 0.7 }}
                >
                  <span className="text-white font-medium flex items-center gap-2">
                    View Profile <ExternalLink size={14} />
                  </span>
                </motion.div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* <p className="text-gray-600 mb-4">Interested in joining our mission?</p>
          <button className="px-6 py-3 bg-[#17162c] text-white rounded-full hover:bg-[#47b8a6] transition-colors duration-300 font-medium">
            Join Our Team
          </button> */}
        </motion.div>
      </div>
    </div>
  )
}

export default Team

