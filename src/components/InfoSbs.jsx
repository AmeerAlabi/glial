import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGlobe } from "react-icons/fa";
import english from '../Assets/Images/sbs-eng.jpg'

const images = {
  english: english,
  yoruba: english,
  arabic: english,
};

export default function InfographicsSectionSbs() {
  const [language, setLanguage] = useState("english");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center">
      <motion.h2
        className="text-3xl font-bold text-[#17162c] mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Infographics Section
      </motion.h2>

      <div className="mb-4">
        <label className="flex items-center text-gray-700 font-medium">
          <FaGlobe className="mr-2 text-[#17162c]" /> Select Language:
        </label>
        <select
          className="mt-2 p-2 border rounded-lg shadow-sm text-gray-800"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="english">English</option>
          <option value="yoruba">Yoruba</option>
          <option value="arabic">Arabic</option>
        </select>
      </div>

      <motion.div
        key={language}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 p-4 rounded-lg shadow-lg"
      >
        <img
          src={images[language]}
          alt={`${language} infographic`}
          className="w-full max-w-md rounded-lg"
        />
      </motion.div>

      <motion.a
        href={images[language]}
        download
        className="mt-4 flex items-center bg-[#17162c] text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600"
        whileHover={{ scale: 1.05 }}
      >
        <FaDownload className="mr-2" /> Download Image
      </motion.a>
    </div>
  );
}
