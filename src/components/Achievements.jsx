import React from 'react';
import { FaUsers, FaHandsHelping, FaRegCalendarAlt } from 'react-icons/fa';

const CollaborationsAndEvents = () => {
  const collaborationsAndEvents = [
    {
      icon: <FaUsers size={40} className="text-[#47b8a6]" />,
      title: 'Collaboration with Mission:Brain Ilorin',
      description:
        'Worked alongside Mission:Brain Ilorin in various outreach programs, advocating for brain health awareness and medical education.',
    },
    // {
    //   icon: <FaHandsHelping size={40} className="text-[#47b8a6]" />,
    //   title: 'Cranioguard Mission',
    //   description:
    //     'Engaged over 30 motorcycle riders in road safety advocacy, emphasizing helmet use to prevent traumatic brain injuries and spinal cord injuries.',
    // },
     {
      icon: <FaRegCalendarAlt size={40} className="text-[#47b8a6]" />,
      title: 'World Epilepsy Day Outreach',
      description:
        'In collaboration with Mission:Brain Ilorin, we educated over 1,000 people across six locations on epilepsy awareness and seizure management.',
    },
  ];

  return (
    <div className="bg-gradient-to-r py-16 px-8 lg:px-24">
      <h2 className="text-center text-[#17162c] text-4xl font-bold mb-12"> Other Collaborations and Events</h2>
      <div className="flex flex-col flex-wrap lg:flex-row justify-center items-center lg:items-stretch gap-8">
        {collaborationsAndEvents.map((event, index) => (
          <div
            key={index}
            className="bg-[#17162c] rounded-lg shadow-lg p-6 flex flex-col justify-center items-center max-w-sm"
          >
            <div className="mb-4">{event.icon}</div>
            <h3 className="text-[white] text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-white text-opacity-70 text-center">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationsAndEvents;
