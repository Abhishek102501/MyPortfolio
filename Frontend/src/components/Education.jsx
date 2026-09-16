import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, ShieldCheck, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    org: 'KIET Group of Institutions, Ghaziabad',
    period: 'October 2025 — May 2027',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    org: 'Anand Engineering College, Agra',
    period: 'September 2022 — May 2025',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-24 grid-bg pl-6 sm:pl-10 md:pl-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 50% at 85% 60%, rgba(0,255,135,0.04) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="mb-16"
        >
          <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-2">06 / Education</p>
          <h2 className="section-heading text-3xl md:text-4xl text-white">
            Education &amp; Certification<span style={{ color: '#00f5ff' }}>_</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Education timeline */}
          <div className="space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card p-6 relative overflow-hidden hover-glow"
                style={{ border: '1px solid rgba(0,255,135,0.2)' }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-0.5"
                  style={{ background: 'linear-gradient(90deg, #00ff87, transparent)' }}
                />
                <div className="flex items-start gap-4">
                  <div
                    className="p-2.5 rounded-xl flex-shrink-0"
                    style={{ background: 'rgba(0,255,135,0.12)', border: '1px solid rgba(0,255,135,0.35)' }}
                  >
                    <GraduationCap size={20} style={{ color: '#00ff87' }} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {edu.degree}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">{edu.org}</p>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 mt-2">
                      <Calendar size={11} />
                      {edu.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card p-7 relative overflow-hidden hover-glow"
            style={{
              border: '1px solid rgba(255,161,22,0.3)',
              background: 'linear-gradient(160deg, rgba(255,161,22,0.06), rgba(6,18,30,0.6))',
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-0.5"
              style={{ background: 'linear-gradient(90deg, #FFA116, transparent)' }}
            />
            <div className="flex items-start gap-4 mb-4">
              <div
                className="p-3 rounded-xl flex-shrink-0"
                style={{ background: 'rgba(255,161,22,0.15)', border: '1px solid rgba(255,161,22,0.4)' }}
              >
                <ShieldCheck size={24} style={{ color: '#FFA116' }} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="text-xs font-mono mt-1" style={{ color: '#FFA116' }}>Amazon Web Services</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Covers cloud concepts, core AWS services, security, architecture, pricing and support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
