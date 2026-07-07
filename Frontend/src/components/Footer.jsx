import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-10 border-t"
      style={{
        borderColor: 'rgba(0,245,255,0.08)',
        background: 'rgba(2,4,8,0.9)',
        paddingLeft: '5rem',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(0,255,135,0.1))',
                border: '1px solid rgba(0,245,255,0.3)',
              }}
            >
              <Terminal size={14} className="text-cyan-400" />
            </div>
            <div>
              <p
                className="text-white text-sm font-bold"
                style={{ fontFamily: 'Orbitron, monospace', letterSpacing: '0.1em' }}
              >
                ABHISHEK DUBEY
              </p>
              <p className="text-slate-600 text-[10px] font-mono">Java Developer • MCA 2025</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {[
              { href: 'https://github.com/Abhishek102501', icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com/in/abhishek-dubey-JD', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:abhi.shek.897984@gmail.com', icon: Mail, label: 'Email' },
              
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="p-2 rounded-lg transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#64748b',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#00f5ff';
                  e.currentTarget.style.borderColor = 'rgba(0,245,255,0.3)';
                  e.currentTarget.style.boxShadow = '0 0 12px rgba(0,245,255,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#64748b';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-[10px] font-mono text-center">
            © {year} Abhishek Dubey. Built with{' '}
            <Heart size={8} className="inline text-red-500/70" />{' '}
            React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
