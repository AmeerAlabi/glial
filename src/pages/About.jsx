import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import video from '../Assets/Images/Video.png'; 
import pattern from '../Assets/Images/pattern.png';
import About2 from '../components/About2';
import Mission from '../components/Mission';
import Team from '../components/Team';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 100 } },
};

const About = () => {
  const { ref: videoRef, inView: videoInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: about2Ref, inView: about2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div id="about" className="bg-[#f8f8f8]">
      {/* Section Title */}
      <div
        className="py-[40px] px-[15px] md:px-[20px] lg:px-[80px]"
        initial="hidden"
        animate={videoInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <div className="flex items-center gap-[10px] mb-[20px] md:mb-[30px]">
          <div className="w-[40px] md:w-[60px] h-[3px] bg-[#17162c]"></div>
          <h2 className="text-[20px] md:text-[24px] font-bold text-[#17162c]">Know About Us</h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-[15px] lg:gap-[40px]">
          {/* Title */}
          <div className="w-full lg:w-[750px] text-center lg:text-left text-[28px] md:text-[36px] lg:text-[56px] font-bold text-[#17162c] leading-tight">
            We are a non-governmental organization
          </div>

          {/* Description */}
          <div className="w-full lg:w-[350px] flex flex-col gap-[10px] md:gap-[15px]">
            <p className="text-[16px] md:text-[18px] font-semibold text-[#17162c] leading-relaxed">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <p className="text-[16px] md:text-[18px] font-semibold text-[#666473] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>
        </div>
      </div>

      {/* First Section: Video Embed */}
      <div
        className="relative my-[70px] h-[250px] md:h-[450px] w-full bg-cover bg-center"
        ref={videoRef}
        initial="hidden"
        animate={videoInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 rounded-[10px] overflow-hidden flex justify-center items-center">
          {/* YouTube Embedded Video */}
          <iframe
            width="90%" // Adjust width for better responsiveness
            height="100%" // Full height of the container
            src="https://www.youtube.com/embed/YQQD67N5pi0" // Placeholder link
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-[20px]"
          ></iframe>
        </div>
      </div>

      <div
        className="mt-[30px]"
        ref={about2Ref}
        initial="hidden"
        animate={about2InView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <About2 />
      </div>

      <div
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <Team />
      </div>

      <div
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <Cta />
      </div>

      <Footer />
    </div>
  );
};

export default About;
