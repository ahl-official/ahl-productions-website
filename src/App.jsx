import { useEffect } from 'react';
import './styles/global.css';
import './styles/sections.css';

import Intro from './components/Intro';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Work from './components/Work';
import Showreel from './components/Showreel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget'; // Import the new widget
import useScrollReveal from './components/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Intro />
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Services />
      <Work />
      <Showreel />
      <Contact />
      <Footer />

      {/* Floating Widget added here */}
      <WhatsAppWidget />
    </>
  );
}