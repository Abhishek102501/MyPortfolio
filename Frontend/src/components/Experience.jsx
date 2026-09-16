import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experience = {
  title: 'Java Developer Intern',
  org: 'Xcentic Technologies',
  period: 'June 2026 — July 2026 · 45 days',
  location: 'Remote',
  description:
    'Worked as part of the backend engineering team, developing REST API endpoints and contributing to authentication within an existing Spring Security setup.',
  highlights: [
    'Developed REST API endpoints in Java and Spring Boot as part of the backend engineering team',
    'Contributed to JWT-based authentication within an existing Spring Security setup',
    'Validated APIs with Postman and documented them with Swagger',
    'Collaborated through Git/GitHub pull requests and code reviews',
  ],
  color: '#00f5ff',
  badge: 'INTERNSHIP',
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 grid-bg pl-6 sm:pl-10 md:pl-24">
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
          <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-2">02 / Experience</p>
          <h2 className="section-heading text-3xl md:text-4xl text-white">
            Professional Experience<span style={{ color: '#00f5ff' }}>_</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-7 md:p-8 relative overflow-hidden hover-glow max-w-3xl"
          style={{ border: `1px solid ${experience.color}25` }}
        >
          <div
            className="absolute top-0 left-0 w-full h-0.5"
            style={{ background: `linear-gradient(90deg, ${experience.color}, transparent)` }}
          />

          <div className="flex items-start gap-4 mb-5">
            <div
              className="p-3 rounded-xl flex-shrink-0"
              style={{
                background: `${experience.color}15`,
                border: `1px solid ${experience.color}40`,
              }}
            >
              <Briefcase size={20} style={{ color: experience.color }} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3
                  className="font-bold text-white text-lg leading-tight"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {experience.title}
                </h3>
                <span
                  className="text-[9px] font-mono tracking-[0.15em] px-2 py-0.5 rounded flex-shrink-0"
                  style={{
                    background: `${experience.color}15`,
                    border: `1px solid ${experience.color}30`,
                    color: experience.color,
                  }}
                >
                  {experience.badge}
                </span>
              </div>
              <p className="text-slate-300 text-sm font-mono mt-1">{experience.org}</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                  <Calendar size={11} />
                  {experience.period}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                  <MapPin size={11} />
                  {experience.location}
                </span>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            {experience.description}
          </p>

          <div className="space-y-2.5">
            {experience.highlights.map(h => (
              <div key={h} className="flex items-start gap-2.5">
                <CheckCircle2 size={14} style={{ color: experience.color, flexShrink: 0, marginTop: '2px' }} />
                <span className="text-slate-400 text-sm leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
