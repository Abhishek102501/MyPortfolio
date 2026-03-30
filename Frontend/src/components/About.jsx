import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Target, Coffee, Dumbbell, Newspaper } from 'lucide-react';

const stats = [
  { label: 'LeetCode', value: '120+', sub: 'Problems' },
  { label: 'Projects', value: '5+', sub: 'Built' },
  { label: 'Experience', value: '1+', sub: 'Years Dev' },
  { label: 'GPA', value: '7.5+', sub: 'CGPA' },
];

const highlights = [
  { icon: GraduationCap, text: 'MCA First Year — KIET Deemed to be University', color: '#00f5ff' },
  { icon: Target, text: 'Backend Focus: Java, Spring Boot, REST APIs', color: '#00ff87' },
  { icon: Newspaper, text: 'Editor — College Newspaper', color: '#bf00ff' },
  { icon: Dumbbell, text: 'Fitness Enthusiast & Initiative Day Winner', color: '#ff6b35' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 grid-bg" style={{ paddingLeft: '6rem' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 80% 50%, rgba(0,255,135,0.04) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-2">01 / About</p>
          <h2 className="section-heading text-3xl md:text-4xl text-white">
            Who Am I<span style={{ color: '#00f5ff' }}>?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — Text */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass-card p-8 relative overflow-hidden corner-tl corner-br"
            >
              <div
                className="absolute top-0 left-0 w-full h-0.5"
                style={{ background: 'linear-gradient(90deg, #00f5ff, transparent)' }}
              />
              <p className="text-slate-300 leading-relaxed text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                I'm{' '}
                <span className="text-cyan-400 font-semibold">Abhishek Dubey</span>, a first-year MCA student
                with a deep passion for building robust, scalable backend systems. I specialise in{' '}
                <span className="text-emerald-400 font-semibold">Java & Spring Boot</span>, crafting
                REST APIs and microservices that power real-world applications.
              </p>
              <p className="text-slate-400 leading-relaxed mt-4">
                My journey started with curiosity about how large-scale systems work — and led me down
                a path of mastering data structures, backend architecture, and test-driven development.
                I write clean, well-tested code and love turning complex business requirements into
                elegant technical solutions.
              </p>
            </motion.div>

            {/* Goal card */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass-card p-6 relative overflow-hidden"
              style={{ border: '1px solid rgba(0,255,135,0.2)' }}
            >
              <div
                className="absolute top-0 left-0 w-full h-0.5"
                style={{ background: 'linear-gradient(90deg, #00ff87, transparent)' }}
              />
              <div className="flex items-start gap-4">
                <div
                  className="p-2 rounded-lg flex-shrink-0"
                  style={{ background: 'rgba(0,255,135,0.1)', border: '1px solid rgba(0,255,135,0.3)' }}
                >
                  <Target size={18} style={{ color: '#00ff87' }} />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold mb-2 tracking-wider"
                    style={{ fontFamily: 'Orbitron, monospace', color: '#00ff87', fontSize: '0.7rem' }}
                  >
                    CAREER GOAL
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    To land a backend engineering role at a product-based company where I can architect
                    high-performance systems at scale, contribute to open-source projects, and grow
                    towards a senior engineering position.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {highlights.map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-3 rounded-xl glass-card hover-glow"
                  style={{ cursor: 'default' }}
                >
                  <Icon size={16} style={{ color, flexShrink: 0 }} />
                  <span className="text-slate-400 text-xs font-mono">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Stats */}
          <div className="lg:col-span-2 space-y-4">
            {stats.map(({ label, value, sub }, i) => (
              <motion.div
                key={label}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ scale: 1.03, x: 4 }}
                className="glass-card p-6 flex items-center justify-between hover-glow"
              >
                <div>
                  <p
                    className="text-3xl font-black"
                    style={{
                      fontFamily: 'Orbitron, monospace',
                      background: 'linear-gradient(135deg, #00f5ff, #00ff87)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-slate-500 text-xs font-mono mt-1">{sub}</p>
                </div>
                <p
                  className="text-xs font-mono tracking-widest text-slate-500 uppercase"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {label}
                </p>
              </motion.div>
            ))}

            {/* Fun fact */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="glass-card p-6"
              style={{ border: '1px solid rgba(191,0,255,0.2)' }}
            >
              <div
                className="absolute top-0 left-0 w-full h-0.5 rounded-t"
                style={{ background: 'linear-gradient(90deg, #bf00ff, transparent)' }}
              />
              <div className="flex items-center gap-2 mb-2">
                <Coffee size={14} style={{ color: '#bf00ff' }} />
                <span className="text-xs font-mono text-purple-400/70 tracking-widest">FUN FACT</span>
              </div>
              <p className="text-slate-400 text-sm">
                When not coding, I'm lifting weights 🏋️ or crafting stories for the college newspaper ✍️
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
