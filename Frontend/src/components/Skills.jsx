import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, FlaskConical, Database, BrainCircuit } from 'lucide-react';

const categories = [
  {
    label: 'Backend',
    icon: Server,
    color: '#00f5ff',
    gradient: 'linear-gradient(90deg, #00f5ff, #0088cc)',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'Microservices', level: 75 },
    ],
  },
  {
    label: 'Testing',
    icon: FlaskConical,
    color: '#00ff87',
    gradient: 'linear-gradient(90deg, #00ff87, #00cc66)',
    skills: [
      { name: 'JUnit', level: 82 },
      { name: 'Mockito', level: 78 },
      { name: 'TDD Practices', level: 75 },
      { name: 'Integration Testing', level: 70 },
    ],
  },
  {
    label: 'Database',
    icon: Database,
    color: '#bf00ff',
    gradient: 'linear-gradient(90deg, #bf00ff, #8800cc)',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'SQL Queries', level: 88 },
      { name: 'Database Design', level: 80 },
      { name: 'JPA / Hibernate', level: 78 },
    ],
  },
  {
    label: 'Problem Solving',
    icon: BrainCircuit,
    color: '#ff6b35',
    gradient: 'linear-gradient(90deg, #ff6b35, #cc4400)',
    skills: [
      { name: 'DSA', level: 85 },
      { name: 'Arrays & Strings', level: 90 },
      { name: 'Trees & Graphs', level: 80 },
      { name: 'DP & Recursion', level: 78 },
    ],
  },
];

const techChips = [
  'Java', 'Spring Boot', 'MySQL', 'JUnit', 'Mockito',
  'REST APIs', 'DSA', 'HTML', 'CSS', 'JavaScript',
  'Git', 'Maven', 'Hibernate', 'JPA', 'Postman',
];

function SkillBar({ name, level, color, gradient, inView, delay }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 text-sm font-mono">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full skill-bar-fill"
          style={{
            background: gradient,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-24 grid-bg" style={{ paddingLeft: '6rem' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 60% at 10% 40%, rgba(0,245,255,0.05) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="mb-16"
        >
          <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-2">02 / Skills</p>
          <h2 className="section-heading text-3xl md:text-4xl text-white">
            Tech Arsenal<span style={{ color: '#00f5ff' }}>_</span>
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.15, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 relative overflow-hidden hover-glow"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 w-full h-0.5"
                  style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
                />
                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${cat.color}15, transparent 60%)`,
                  }}
                />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{
                      background: `${cat.color}15`,
                      border: `1px solid ${cat.color}40`,
                    }}
                  >
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <h3
                    className="font-semibold tracking-widest text-xs uppercase"
                    style={{ fontFamily: 'Orbitron, monospace', color: cat.color }}
                  >
                    {cat.label}
                  </h3>
                </div>

                {/* Skill bars */}
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={cat.color}
                    gradient={cat.gradient}
                    inView={inView}
                    delay={ci * 0.1 + si * 0.15 + 0.3}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Tech chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xs font-mono text-slate-600 tracking-widest uppercase mb-4">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {techChips.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.04 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full text-xs font-mono cursor-default transition-all"
                style={{
                  background: 'rgba(0,245,255,0.06)',
                  border: '1px solid rgba(0,245,255,0.15)',
                  color: '#94a3b8',
                }}
                onMouseEnter={e => {
                  e.target.style.color = '#00f5ff';
                  e.target.style.borderColor = 'rgba(0,245,255,0.5)';
                  e.target.style.boxShadow = '0 0 12px rgba(0,245,255,0.2)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = '#94a3b8';
                  e.target.style.borderColor = 'rgba(0,245,255,0.15)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
