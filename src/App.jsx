import React, { useState } from 'react';
import OpeningLoader from './components/OpeningLoader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DataFlowVisual from './components/DataFlowVisual';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import CurrentlyExploring from './components/CurrentlyExploring';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-slate-100 selection:bg-purple-500/30 selection:text-purple-300 relative">
      {/* Opening Splash Loader */}
      <OpeningLoader onComplete={() => setLoaderFinished(true)} />

      {/* Trailing Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Page Layout Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <DataFlowVisual />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <CurrentlyExploring />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
