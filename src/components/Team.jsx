import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import teamImage from '../Assets/Images/team.png'; // Adjust path as necessary
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'John Doe',
    image: teamImage,
    linkedin: 'https://www.linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
  {
    name: 'Jane Smith',
    image: teamImage,
    linkedin: 'https://www.linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
  },
  {
    name: 'Jane Smith',
    image: teamImage,
    linkedin: 'https://www.linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
  },
  {
    name: 'Jane Smith',
    image: teamImage,
    linkedin: 'https://www.linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
  },
  {
    name: 'Jane Smith',
    image: teamImage,
    linkedin: 'https://www.linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
  },
  {
    name: 'Jane Smith',
    image: teamImage,
    linkedin: 'https://www.linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
  },
  {
    name: 'Jane Smith',
    image: teamImage,
    linkedin: 'https://www.linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
  },
  {
    name: 'Jane Smith',
    image: teamImage,
    linkedin: 'https://www.linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
  },
  // Add more team members as needed
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', stiffness: 100 } },
};

const Team = () => {
  // Intersection Observer for Team Section
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="py-[50px] px-[20px] md:px-[50px] bg-[#f8f9fa]">
      <div className="text-center mb-[40px]">
        <h2 className="text-[28px] md:text-[36px] font-bold mb-[10px]">Meet Our Team</h2>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed">
          Our team is composed of passionate professionals dedicated to delivering the best results. Get to know the faces behind our success.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px]" ref={ref}>
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white p-[20px] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[100px] h-[100px] object-cover rounded-full mb-[15px]"
            />
            <h3 className="text-[18px] font-semibold mb-[10px]">{member.name}</h3>
            <div className="flex space-x-3">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-[#005582]">
                <FaLinkedin size={20} />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:text-[#0d95e8]">
                <FaTwitter size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
