import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DSA from './components/DSA';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SECTIONS = ['hero','about','skills','projects','dsa','experience','contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observers = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [loaded]);

  return (
    <>
      <ParticleBackground />
      <ScrollProgress />

      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            style={{ background: '#020408' }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 rounded-full border-t-2 border-r-2 mb-6"
              style={{ borderColor: '#00f5ff', boxShadow: '0 0 20px #00f5ff' }}
            />
            <p style={{ fontFamily:'Orbitron,monospace', color:'#00f5ff', opacity:.7, fontSize:'11px', letterSpacing:'.4em' }}>
              INITIALIZING...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen"
        style={{ background: '#020408' }}
      >
        <Sidebar active={activeSection} />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <DSA />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </motion.div>
    </>
  );
}
