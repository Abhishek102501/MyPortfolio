import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Newspaper, Trophy, Calendar, MapPin, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: 'Editor — College Newspaper',
    org: 'KIET University',
    period: '2025 — Present',
    location: 'Ghaziabad, UP',
    description:
      "Leading editorial operations for the university's official student newspaper. Responsible for content strategy, article curation, proofreading, and managing a team of writers. Honed skills in communication, leadership, and deadline management.",
    highlights: [
      'Led team of 10+ writers',
      'Published 20+ editions',
      'Content strategy & editorial planning',
      'Improved readership by 40%',
    ],
    icon: Newspaper,
    color: '#00f5ff',
    badge: 'LEADERSHIP',
  },
  {
    title: 'Initiative Day — 1st Prize Winner',
    org: 'Anand Engineering College',
    period: '2024',
    location: 'Agra, UP',
    description:
      "Won first prize at the university's prestigious Initiative Day competition. Presented an innovative technical project to a panel of judges from industry, demonstrating both technical depth and strong presentation skills.",
    highlights: [
      '1st Prize among 50+ teams',
      'Technical presentation to industry panel',
      'Innovation & problem-solving recognition',
      'University-level competition',
    ],
    icon: Trophy,
    color: '#FFA116',
    badge: 'ACHIEVEMENT',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 grid-bg" style={{ paddingLeft: '6rem' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 50% at 20% 60%, rgba(0,245,255,0.04) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="mb-16"
        >
          <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-2">05 / Experience</p>
          <h2 className="section-heading text-3xl md:text-4xl text-white">
            Activities & Wins<span style={{ color: '#00f5ff' }}>_</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #00f5ff30, #00f5ff10, transparent)' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative md:w-[46%] ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -right-px top-8 w-3 h-3 rounded-full hidden md:block"
                    style={{
                      background: exp.color,
                      boxShadow: `0 0 12px ${exp.color}`,
                      right: isEven ? '-24px' : 'auto',
                      left: isEven ? 'auto' : '-24px',
                    }}
                  />

                  <div
                    className="glass-card p-7 relative overflow-hidden hover-glow"
                    style={{ border: `1px solid ${exp.color}25` }}
                  >
                    {/* Accent bar */}
                    <div
                      className="absolute top-0 left-0 w-full h-0.5"
                      style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
                    />

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className="p-3 rounded-xl flex-shrink-0"
                        style={{
                          background: `${exp.color}15`,
                          border: `1px solid ${exp.color}40`,
                        }}
                      >
                        <Icon size={20} style={{ color: exp.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3
                            className="font-bold text-white text-base leading-tight"
                            style={{ fontFamily: 'Syne, sans-serif' }}
                          >
                            {exp.title}
                          </h3>
                          <span
                            className="text-[9px] font-mono tracking-[0.15em] px-2 py-0.5 rounded flex-shrink-0"
                            style={{
                              background: `${exp.color}15`,
                              border: `1px solid ${exp.color}30`,
                              color: exp.color,
                            }}
                          >
                            {exp.badge}
                          </span>
                        </div>
                        <p className="text-slate-500 text-xs font-mono mt-1">{exp.org}</p>
                        <div className="flex gap-4 mt-2">
                          <span className="flex items-center gap-1 text-[10px] font-mono text-slate-600">
                            <Calendar size={10} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] font-mono text-slate-600">
                            <MapPin size={10} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-2">
                      {exp.highlights.map(h => (
                        <div key={h} className="flex items-center gap-2">
                          <ArrowRight size={10} style={{ color: exp.color, flexShrink: 0 }} />
                          <span className="text-slate-500 text-xs font-mono">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education card */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 glass-card p-7 relative overflow-hidden"
          style={{ border: '1px solid rgba(0,255,135,0.2)' }}
        >
          <div
            className="absolute top-0 left-0 w-full h-0.5"
            style={{ background: 'linear-gradient(90deg, #00ff87, transparent)' }}
          />
          <div className="flex flex-wrap gap-8 items-center">
            <div>
              <p className="text-xs font-mono text-emerald-400/70 tracking-widest uppercase mb-2">Education</p>
              <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-slate-500 font-mono text-sm mt-1">KIET Deemed to be University • 2025 – 2027</p>
            </div>
            <div className="flex gap-6">
              <div>
                <p className="text-2xl font-black font-mono" style={{ color: '#00ff87' }}>7.5+</p>
                <p className="text-xs font-mono text-slate-600">CGPA</p>
              </div>
              <div>
                <p className="text-2xl font-black font-mono" style={{ color: '#00f5ff' }}>First</p>
                <p className="text-xs font-mono text-slate-600">Year</p>
              </div>
            </div>
          </div>
        </motion.div>
                <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 glass-card p-7 relative overflow-hidden"
          style={{ border: '1px solid rgba(0,255,135,0.2)' }}
        >
          <div
            className="absolute top-0 left-0 w-full h-0.5"
            style={{ background: 'linear-gradient(90deg, #00ff87, transparent)' }}
          />
          <div className="flex flex-wrap gap-8 items-center">
            <div>
              <p className="text-xs font-mono text-emerald-400/70 tracking-widest uppercase mb-2">Education</p>
              <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                Bachelors of Computer Applications (BCA)
              </h3>
              <p className="text-slate-500 font-mono text-sm mt-1">Anand Engineering College, Agra • 2022 – 2025</p>
            </div>
            <div className="flex gap-6">
              <div>
                <p className="text-2xl font-black font-mono" style={{ color: '#00ff87' }}>7.0+</p>
                <p className="text-xs font-mono text-slate-600">CGPA</p>
              </div>
              <div>
                <p className="text-2xl font-black font-mono" style={{ color: '#00f5ff' }}>Completed</p>
                <p className="text-xs font-mono text-slate-600">Year</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
