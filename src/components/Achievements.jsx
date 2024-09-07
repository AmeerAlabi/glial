import React from 'react';
import { FaTrophy, FaAward, FaProjectDiagram } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy size={40} className="text-[#47b8a6]" />, // Icon color can be adjusted
      title: 'Completed 2 Internships',
      description: 'One unpaid and one paid, where I gained hands-on experience in web development.',
    },
    {
      icon: <FaAward size={40} className="text-[#47b8a6]" />,
      title: '1 Year in Tech',
      description: 'Celebrating one year of coding, starting with HTML, CSS, and mastering React.',
    },
    {
      icon: <FaProjectDiagram size={40} className="text-[#47b8a6]" />,
      title: 'Built React Projects',
      description: 'Developed various projects using React, Firebase, and Tailwind CSS.',
    },
    {
      icon: <FaProjectDiagram size={40} className="text-[#47b8a6]" />,
      title: 'Built React Projects',
      description: 'Developed various projects using React, Firebase, and Tailwind CSS.',
    },
    {
      icon: <FaProjectDiagram size={40} className="text-[#47b8a6]" />,
      title: 'Built React Projects',
      description: 'Developed various projects using React, Firebase, and Tailwind CSS.',
    },
    {
      icon: <FaProjectDiagram size={40} className="text-[#47b8a6]" />,
      title: 'Built React Projects',
      description: 'Developed various projects using React, Firebase, and Tailwind CSS.',
    },
   
  ];

  return (
    <div className="bg-gradient-to-r  py-16 px-8 lg:px-24">
      <h2 className="text-center text-[#17162c] text-4xl font-bold mb-12">Achievements</h2>
      <div className="flex flex-col flex-wrap lg:flex-row justify-center items-center lg:items-stretch gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-[#17162c] rounded-lg shadow-lg p-6 flex flex-col justify-center items-center max-w-sm"
          >
            <div className="mb-4">{achievement.icon}</div>
            <h3 className="text-[white] text-xl font-semibold mb-2">{achievement.title}</h3>
            <p className="text-white text-opacity-70 text-center">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
