import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Trophy, Target, Flame, ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'LeetCode',
    handle: 'abhishek_dubey',
    problems: '150+',
    rating: '1650+',
    rank: 'Top 25%',
    color: '#FFA116',
    bg: 'rgba(255,161,22,0.08)',
    border: 'rgba(255,161,22,0.25)',
    url: 'https://leetcode.com/AbhishekDubey2003',
    icon: '⚡',
  },
  {
    name: 'GeeksforGeeks',
    handle: 'abhishekdubey',
    problems: '80+',
    rating: '1200+',
    rank: 'Intermediate',
    color: '#2F8D46',
    bg: 'rgba(47,141,70,0.08)',
    border: 'rgba(47,141,70,0.25)',
    url: 'https://www.geeksforgeeks.org/profile/abhishek228l2?from=explore',
    icon: '🧠',
  },
  {
    name: 'HackerRank',
    handle: 'abhishek_dubey',
    problems: '50+',
    rating: '⭐⭐⭐',
    rank: '5 Star Java',
    color: '#00EA64',
    bg: 'rgba(0,234,100,0.08)',
    border: 'rgba(0,234,100,0.25)',
    url: 'https://www.hackerrank.com/@abhi_shek_897984',
    icon: '🏆',
  },
];

const dsaTopics = [
  { topic: 'Arrays & Strings', count: 35, color: '#00f5ff' },
  { topic: 'Linked Lists', count: 15, color: '#00ff87' },
  { topic: 'Trees & Graphs', count: 25, color: '#bf00ff' },
  { topic: 'Dynamic Programming', count: 20, color: '#ff6b35' },
  { topic: 'Sorting & Searching', count: 15, color: '#FFA116' },
  { topic: 'Stacks & Queues', count: 10, color: '#00EA64' },
];

export default function DSA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="dsa" className="relative py-24 grid-bg" style={{ paddingLeft: '6rem' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 80%, rgba(255,107,53,0.04) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="mb-16"
        >
          <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-2">04 / DSA</p>
          <h2 className="section-heading text-3xl md:text-4xl text-white">
            Coding Profile<span style={{ color: '#00f5ff' }}>_</span>
          </h2>
        </motion.div>

        {/* Hero stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 mb-8 relative overflow-hidden text-center"
          style={{ border: '1px solid rgba(255,161,22,0.3)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,161,22,0.06) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute top-0 left-0 w-full h-0.5"
            style={{ background: 'linear-gradient(90deg, transparent, #FFA116, transparent)' }}
          />

          <div className="flex justify-center items-center gap-4 mb-3">
            <Flame size={28} style={{ color: '#FFA116', filter: 'drop-shadow(0 0 8px #FFA116)' }} />
            <span
              className="text-6xl md:text-7xl font-black"
              style={{
                fontFamily: 'Orbitron, monospace',
                background: 'linear-gradient(135deg, #FFA116, #ff6b35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(255,161,22,0.4))',
              }}
            >
              150+
            </span>
            <Flame size={28} style={{ color: '#FFA116', filter: 'drop-shadow(0 0 8px #FFA116)' }} />
          </div>
          <p className="text-slate-400 font-mono tracking-widest text-sm">LEETCODE PROBLEMS SOLVED</p>
          <div className="flex justify-center gap-8 mt-6">
            {[
              { label: 'Easy', val: '75', color: '#00ff87' },
              { label: 'Medium', val: '60', color: '#FFA116' },
              { label: 'Hard', val: '15', color: '#ff4444' },
            ].map(({ label, val, color }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold font-mono" style={{ color }}>{val}</div>
                <div className="text-xs font-mono text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Platform cards */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-xs font-mono text-slate-600 tracking-widest uppercase mb-4"
            >
              // Coding Platforms
            </motion.p>
            {platforms.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.3 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="glass-card p-5 flex items-center gap-5 block hover-glow"
                style={{ background: p.bg, border: `1px solid ${p.border}` }}
              >
                <div className="text-2xl">{p.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-white text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {p.name}
                    </h4>
                    <ExternalLink size={11} style={{ color: p.color }} />
                  </div>
                  <p className="text-xs font-mono text-slate-500">@{p.handle}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold font-mono" style={{ color: p.color }}>{p.problems}</div>
                  <div className="text-[10px] font-mono text-slate-500">problems</div>
                  <div className="text-[10px] font-mono mt-1" style={{ color: p.color }}>{p.rank}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Topic breakdown */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-xs font-mono text-slate-600 tracking-widest uppercase mb-4"
            >
              // Topics Mastered
            </motion.p>
            <div className="space-y-4">
              {dsaTopics.map((item, i) => (
                <motion.div
                  key={item.topic}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.4 }}
                >
                  <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5">
                    <span>{item.topic}</span>
                    <span style={{ color: item.color }}>{item.count} problems</span>
                  </div>
                  <div
                    className="h-1.5 rounded-full w-full overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${(item.count / 35) * 100}%` } : {}}
                      transition={{ delay: i * 0.1 + 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                        boxShadow: `0 0 6px ${item.color}60`,
                        maxWidth: '100%',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Streak badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="mt-6 glass-card p-5 flex items-center gap-4"
              style={{ border: '1px solid rgba(0,245,255,0.2)' }}
            >
              <Trophy size={24} style={{ color: '#00f5ff', filter: 'drop-shadow(0 0 8px #00f5ff)' }} />
              <div>
                <p className="text-white text-sm font-semibold">Consistent Problem Solver</p>
                <p className="text-slate-500 text-xs font-mono mt-0.5">
                  Daily practice streak • Multiple contest participations
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
