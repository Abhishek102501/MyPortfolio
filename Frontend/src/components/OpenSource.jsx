import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitBranch, Gamepad2, History, GitMerge, Award, ExternalLink } from 'lucide-react';

const contributions = [
  {
    icon: Gamepad2,
    color: '#00f5ff',
    title: 'Power-Food & Scared-Ghost Mechanics',
    project: 'Java-based Pac-Man Game',
    description: 'Implemented the power-food mechanic and scared-ghost state logic, with a score-display UI.',
  },
  {
    icon: History,
    color: '#00ff87',
    title: '"Clear All Search History" Feature',
    project: 'Eventra — React Event Platform',
    description: 'Built a feature allowing users to clear their entire search history in one action.',
  },
  {
    icon: GitMerge,
    color: '#bf00ff',
    title: 'Merged Pull Request',
    project: 'EaseMotion CSS',
    description: 'Contributed a merged PR to the EaseMotion CSS library.',
  },
];

export default function OpenSource() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="opensource" className="relative py-24 grid-bg pl-6 sm:pl-10 md:pl-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 15% 40%, rgba(191,0,255,0.05) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="mb-16"
        >
          <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-2">04 / Open Source</p>
          <h2 className="section-heading text-3xl md:text-4xl text-white">
            Open Source<span style={{ color: '#00f5ff' }}>_</span>
          </h2>
        </motion.div>

        {/* GSSoC banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-7 mb-8 relative overflow-hidden"
          style={{ border: '1px solid rgba(191,0,255,0.3)' }}
        >
          <div
            className="absolute top-0 left-0 w-full h-0.5"
            style={{ background: 'linear-gradient(90deg, #bf00ff, transparent)' }}
          />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="p-3 rounded-xl flex-shrink-0"
                style={{ background: 'rgba(191,0,255,0.12)', border: '1px solid rgba(191,0,255,0.35)' }}
              >
                <GitBranch size={22} style={{ color: '#bf00ff' }} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                  GirlScript Summer of Code 2026
                </h3>
                <p className="text-slate-500 text-xs font-mono mt-1">Contributor · May 2026 — Present</p>
              </div>
            </div>
            <span
              className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(191,0,255,0.15)', border: '1px solid rgba(191,0,255,0.4)', color: '#bf00ff' }}
            >
              <Award size={13} />
              Credited on GSSoC Leaderboard
            </span>
          </div>
        </motion.div>

        {/* Contribution cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contributions.map(({ icon: Icon, color, title, project, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 relative overflow-hidden hover-glow flex flex-col"
              style={{ border: `1px solid ${color}25` }}
            >
              <div
                className="absolute top-0 left-0 w-full h-0.5"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />
              <div
                className="p-2.5 rounded-xl mb-4 w-fit"
                style={{ background: `${color}15`, border: `1px solid ${color}40` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <h4 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                {title}
              </h4>
              <p className="text-xs font-mono mb-3" style={{ color }}>{project}</p>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{description}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="https://github.com/Abhishek102501"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="inline-flex items-center gap-2 mt-8 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors"
        >
          View more on GitHub
          <ExternalLink size={12} />
        </motion.a>
      </div>
    </section>
  );
}
