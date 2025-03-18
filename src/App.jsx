import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import InfographicsSection from './components/Info';
import Resources from './components/Resources';
import InfographicsSectionSbs from './components/InfoSbs';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/tbi" element={<InfographicsSection />} />
        <Route path="/resources/sbs" element={<InfographicsSectionSbs />} />
        <Route path="*" element={<Home/>} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
