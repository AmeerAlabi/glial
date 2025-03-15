"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Cta from "@/components/Cta";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";
import Goals from "@/components/Services";

const Home = () => {
  return (
    <div>
      <div></div>
      <Hero />
      <About />
      <Goals />
      <Sponsors />
      <Cta />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
