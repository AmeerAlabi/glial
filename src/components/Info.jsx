import { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGlobe } from "react-icons/fa";
import english from '../Assets/Images/tbi-eng.jpg'
import yoruba from '../Assets/Images/tbi-yrb.jpg'
import igbo from '../Assets/Images/tbi-igb.jpg'
import hausa from '../Assets/Images/tbi-hs.jpg'
import luganda from '../Assets/Images/tbi-lug.jpg'
import swahili from '../Assets/Images/tbi-swa.jpg'
import Kinyarwanda from '../Assets/Images/tbi-kin.jpg'
import french from '../Assets/Images/tbi-fr.jpg'
import amharic from '../Assets/Images/tbi-am.jpg'
import bemba from '../Assets/Images/tbi-bem.jpg'
import chichewa from '../Assets/Images/tbi-ch.png'


const images = {
  english: english,
  yoruba: yoruba,
  igbo: igbo,
  hausa: hausa,
luganda: luganda,
swahili: swahili,
Kinyarwanda: Kinyarwanda,
french: french,
amharic: amharic,
bemba: bemba,
  chichewa: chichewa,
  arabic: english,
};

export default function InfographicsSection() {
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
          <option value="igbo">Igbo</option>
          <option value="hausa">Hausa</option>
          <option value="luganda">Luganda</option>
          <option value="swahili">Swahili</option>
          <option value="kinyarwanda">Kinyarwanda</option>
          <option value="french">French</option>
          <option value="amharic">Amharic</option>
          <option value="bemba">Bemba</option>
          <option value="chichewa">Chichewa/Cinyanja</option>
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
