import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown, Cpu, Globe, Database } from 'lucide-react';

const roles = [
  'Java Developer',
  'Backend Engineer',
  'DSA Problem Solver',
  'Spring Boot Expert',
  'MCA First Year',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c + 1);
      }, 80);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c - 1);
      }, 40);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setRoleIndex(r => (r + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatIcons = [
    { icon: Cpu, label: 'Java', delay: 0, pos: { top: '20%', right: '12%' } },
    { icon: Globe, label: 'Spring', delay: 1.5, pos: { top: '60%', right: '8%' } },
    { icon: Database, label: 'MySQL', delay: 3, pos: { top: '40%', right: '25%' } },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
      style={{ paddingLeft: '5rem' }}
    >
      {/* Radial glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(0,245,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 30%, rgba(0,255,135,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Decorative ring */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="relative w-64 h-64"
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: '1px solid rgba(0,245,255,0.15)',
              boxShadow: '0 0 30px rgba(0,245,255,0.05)',
            }}
          />
          <div
            className="absolute inset-6 rounded-full"
            style={{ border: '1px dashed rgba(0,245,255,0.1)' }}
          />
          {/* Orbiting dots */}
          {[0, 120, 240].map((deg, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i === 0 ? '#00f5ff' : i === 1 ? '#00ff87' : '#bf00ff',
                boxShadow: `0 0 8px ${i === 0 ? '#00f5ff' : i === 1 ? '#00ff87' : '#bf00ff'}`,
                top: '50%',
                left: '50%',
                transform: `rotate(${deg}deg) translateX(128px) translateY(-50%)`,
              }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center font-display text-2xl font-black"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(0,255,135,0.1))',
                border: '2px solid rgba(0,245,255,0.4)',
                color: '#00f5ff',
                boxShadow: '0 0 30px rgba(0,245,255,0.2)',
                fontFamily: 'Orbitron, monospace',
              }}
            >
              AD
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating icons */}
      {floatIcons.map(({ icon: Icon, label, delay, pos }) => (
        <motion.div
          key={label}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute hidden xl:flex flex-col items-center gap-1"
          style={pos}
        >
          <div
            className="p-3 rounded-xl glass-card"
            style={{ border: '1px solid rgba(0,245,255,0.2)' }}
          >
            <Icon size={20} className="text-cyan-400" />
          </div>
          <span className="text-[10px] font-mono text-cyan-400/60">{label}</span>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-3xl px-8 md:px-12">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-widest"
            style={{
              background: 'rgba(0,245,255,0.08)',
              border: '1px solid rgba(0,245,255,0.25)',
              color: '#00f5ff',
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            OPEN TO OPPORTUNITIES
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-sm font-mono text-cyan-400/70 tracking-[0.3em] uppercase mb-2">
            {'<'} Hello, World {'/>'}
          </p>
          <h1
            className="text-5xl md:text-7xl font-black leading-none mb-2"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            <span className="block text-white">ABHISHEK</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #00f5ff, #00ff87)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(0,245,255,0.4))',
              }}
            >
              DUBEY
            </span>
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-2 my-5"
        >
          <span className="text-slate-400 text-sm font-mono">{'>'}_</span>
          <span
            className="text-lg md:text-xl font-mono font-semibold"
            style={{ color: '#00f5ff', textShadow: '0 0 20px rgba(0,245,255,0.5)' }}
          >
            {displayed}
          </span>
          <span className="typing-cursor" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-8"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Building{' '}
          <span className="text-cyan-400 font-semibold">scalable backend systems</span>{' '}
          with Java & Spring Boot. MCA final-year student passionate about{' '}
          <span className="text-emerald-400 font-semibold">clean architecture</span>{' '}
          and solving complex algorithmic challenges.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('projects')}
            className="btn-neon-solid rounded-lg font-display flex items-center gap-2"
            style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.7rem', letterSpacing: '0.12em' }}
          >
            VIEW PROJECTS
            <ArrowRight size={14} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('contact')}
            className="btn-neon rounded-lg font-display flex items-center gap-2"
            style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.7rem', letterSpacing: '0.12em' }}
          >
            CONTACT ME
          </motion.button>

          <motion.a
  href="/resume.pdf"
  download="AbhishekResume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="flex items-center gap-2 px-6 py-3 rounded-lg text-slate-400 text-xs font-mono tracking-widest hover:text-white transition-colors"
  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
>
            <Download size={14} />
            RESUME
          </motion.a>
        </motion.div>

        {/* Tech stack chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-wrap gap-2 mt-10"
        >
          {['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'DSA', 'JUnit'].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + i * 0.1 }}
              className="px-3 py-1 rounded-full text-xs font-mono text-slate-400"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-cyan-400 transition-colors"
      >
        <span className="text-[10px] font-mono tracking-widest">SCROLL</span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  );
}
