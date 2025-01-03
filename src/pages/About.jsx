import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import About2 from '../components/About2';
import Mission from '../components/Mission';
import Team from '../components/Team';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Achievements from '../components/Achievements';
import CollaborationsAndEvents from '../components/Achievements';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 100 } },
};

const About = () => {
  const { ref: videoRef, inView: videoInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: about2Ref, inView: about2InView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div id="about" className="bg-[#f8f8f8]">
      {/* Header Section */}
      <motion.div
        className="py-10 px-5 md:px-8 lg:px-20"
        initial="hidden"
        animate={videoInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <div className="w-10 md:w-14 h-[3px] bg-[#17162c]"></div>
          <h2 className="text-lg md:text-xl font-bold text-[#17162c]">Know About Us</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
          <h1 className="w-full lg:w-3/4 text-center lg:text-left text-2xl md:text-3xl lg:text-5xl font-bold text-[#17162c] leading-tight">
            We are a non-governmental organization
          </h1>
          <p className="w-full lg:w-1/2 text-sm md:text-base text-[#17162c] leading-relaxed">
            We combine extensive research with hands-on approaches to improve public understanding 
            and reduce stigma around brain injuries. Through impactful events, such as educating 
            motorcycle riders about helmet safety or promoting epilepsy awareness, we actively engage 
            communities to spread knowledge. Join us to make a lasting impact in the fight against TBIs.
          </p>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        className="relative my-16 h-64 md:h-[450px] w-full bg-cover bg-center"
        ref={videoRef}
        initial="hidden"
        animate={videoInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 rounded-lg overflow-hidden flex justify-center items-center">
          <iframe
            width="90%"
            height="100%"
            src="https://www.youtube.com/embed/YQQD67N5pi0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </motion.div>

      {/* About2 Section */}
      <motion.div
        ref={about2Ref}
        initial="hidden"
        animate={about2InView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="mt-8"
      >
        <About2 />
      </motion.div>

      {/* Achievements Section */}
      <CollaborationsAndEvents />

      {/* Team Section */}
      <motion.div
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="mt-8"
      >
        <Team />
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
        className="mt-8"
      >
        <Cta />
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
