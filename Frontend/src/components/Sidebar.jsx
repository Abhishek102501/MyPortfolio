import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, User, Zap, FolderOpen, Code2, Briefcase, Mail, Menu, X, Terminal
} from 'lucide-react';

const navItems = [
  { id: 'hero',       label: 'Home',       icon: Home },
  { id: 'about',      label: 'About',      icon: User },
  { id: 'skills',     label: 'Skills',     icon: Zap },
  { id: 'projects',   label: 'Projects',   icon: FolderOpen },
  { id: 'dsa',        label: 'DSA',        icon: Code2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact',    label: 'Contact',    icon: Mail },
];

export default function Sidebar({ active }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 md:hidden glass-card p-2 rounded-lg neon-border"
      >
        {open ? <X size={20} className="text-cyan-400" /> : <Menu size={20} className="text-cyan-400" />}
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-30 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
          fixed left-0 top-0 h-full z-40 flex flex-col
          w-20 md:w-20
          transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style={{
          background: 'rgba(2, 4, 8, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRight: '1px solid rgba(0, 245, 255, 0.12)',
        }}
      >
        {/* Logo */}
        <div className="flex justify-center items-center h-20 border-b border-cyan-500/10">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="relative"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #00f5ff22, #00ff8722)',
                border: '1px solid rgba(0,245,255,0.4)',
                boxShadow: '0 0 15px rgba(0,245,255,0.3)',
              }}
            >
              <Terminal size={18} className="text-cyan-400" />
            </div>
          </motion.div>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col items-center gap-2 py-6 flex-1">
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <div key={id} className="relative group w-full flex justify-center">
                <motion.button
                  onClick={() => scrollTo(id)}
                  onHoverStart={() => setHovered(id)}
                  onHoverEnd={() => setHovered(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    relative flex flex-col items-center justify-center w-14 h-14 rounded-xl
                    transition-all duration-300
                    ${isActive
                      ? 'bg-cyan-500/15 text-cyan-400'
                      : 'text-slate-500 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }
                  `}
                  style={isActive ? {
                    boxShadow: '0 0 15px rgba(0,245,255,0.2)',
                    border: '1px solid rgba(0,245,255,0.3)',
                  } : {}}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 rounded-r"
                      style={{ background: '#00f5ff', boxShadow: '0 0 8px #00f5ff' }}
                    />
                  )}
                  <Icon
                    size={18}
                    style={isActive ? { filter: 'drop-shadow(0 0 6px #00f5ff)' } : {}}
                  />
                  <span className="text-[9px] mt-1 font-mono tracking-wider uppercase opacity-70">
                    {label.slice(0, 4)}
                  </span>
                </motion.button>

                {/* Tooltip */}
                <AnimatePresence>
                  {hovered === id && (
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="absolute left-[72px] top-1/2 -translate-y-1/2 z-50 pointer-events-none"
                    >
                      <div
                        className="px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-400 whitespace-nowrap"
                        style={{
                          background: 'rgba(2,4,8,0.95)',
                          border: '1px solid rgba(0,245,255,0.3)',
                          boxShadow: '0 0 15px rgba(0,245,255,0.15)',
                        }}
                      >
                        {label}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Status dot */}
        <div className="flex justify-center pb-6">
          <div className="flex flex-col items-center gap-1">
            <div className="relative">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"
                style={{ boxShadow: '0 0 8px #34d399' }} />
              <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30" />
            </div>
            <span className="text-[8px] font-mono text-emerald-400/70 tracking-widest">LIVE</span>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
