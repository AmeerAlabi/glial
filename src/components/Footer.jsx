import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone,
  ExternalLink 
} from 'lucide-react';



const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/",
      label: "Instagram"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/",
      label: "Twitter"
    }
  ];

  return (
    <footer ref={ref} className="bg-gradient-to-b from-gray-900 to-[#17162c] mt-[60px] pt-20 pb-8 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <Link to="/" className="block">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#47b8a6] to-teal-400 bg-clip-text text-transparent">
                The Glial Initiative
              </h2>
            </Link>
            <p className="text-gray-400 max-w-md">
              Subscribe to our newsletter for updates, news, and exclusive offers.
            </p>
            {/* <a
              href="#top"
              className="inline-flex items-center gap-2 text-[#47b8a6] hover:text-teal-400 transition-colors duration-300"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </a> */}
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-400 hover:text-[#47b8a6] transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-[#47b8a6] transition-colors duration-300">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-[#47b8a6] transition-colors duration-300">
                Contact
              </Link>
            </nav>
            <div className="space-y-3 pt-4">
              <a href="mailto:theglialInitiative@gmail.com" 
                className="flex items-center gap-2 text-gray-400 hover:text-[#47b8a6] transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>theglialInitiative@gmail.com</span>
              </a>
              <a href="tel:+2348032867430" 
                className="flex items-center gap-2 text-gray-400 hover:text-[#47b8a6] transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>+234(0)8032867430</span>
              </a>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:outline-none focus:border-[#47b8a6] transition-colors duration-300 text-white placeholder-gray-400"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-[#47b8a6] text-white font-medium rounded-lg hover:bg-[#3a978c] transform hover:translate-y-[-2px] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-[#47b8a6] hover:bg-gray-800 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12"
        />

        {/* Footer Bottom */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center text-sm text-gray-400"
        >
          © {new Date().getFullYear()} The Glial Initiative. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;