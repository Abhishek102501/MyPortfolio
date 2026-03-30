import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageSquare, User, AtSign } from 'lucide-react';

const links = [
  {
    label: 'Email',
    value: 'abhi.shek.897984@gmail.com',
    href: 'mailto:abhi.shek.897984@gmail.com',
    icon: Mail,
    color: '#00f5ff',
  },
  {
    label: 'LinkedIn',
    value: 'https://linkedin.com/in/abhishekdubey',
    href: 'https://linkedin.com/in/abhishekdubey',
    icon: Linkedin,
    color: '#0A66C2',
  },
  {
    label: 'GitHub',
    value: 'https://github.com/Abhishek102501',
    href: 'https://github.com/Abhishek102501',
    icon: Github,
    color: '#6e5494',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8081/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error("Failed to send");
    }

    setSent(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSent(false), 4000);

  } catch (error) {
    console.error(error);
    alert("Error sending message ❌");
  }
};

  return (
    <section id="contact" className="relative py-24 grid-bg" style={{ paddingLeft: '6rem' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(0,245,255,0.06) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="mb-16"
        >
          <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-2">06 / Contact</p>
          <h2 className="section-heading text-3xl md:text-4xl text-white">
            Let's Connect<span style={{ color: '#00f5ff' }}>_</span>
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-lg">
            Open to full-time roles, internships, and interesting collaborations. Drop a message — I typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Links */}
          <div className="space-y-5">
            {links.map(({ label, value, href, icon: Icon, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                whileHover={{ x: 8 }}
                className="glass-card p-5 flex items-center gap-5 block hover-glow group"
                style={{ border: `1px solid ${color}20` }}
              >
                <div
                  className="p-3 rounded-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    boxShadow: `0 0 0 0 ${color}`,
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 15px ${color}40`}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 0 ${color}`}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-600 tracking-widest uppercase mb-1">{label}</p>
                  <p className="text-slate-300 text-sm font-mono group-hover:text-white transition-colors">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass-card p-5"
              style={{ border: '1px solid rgba(0,255,135,0.2)' }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"
                    style={{ boxShadow: '0 0 8px #34d399' }} />
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30" />
                </div>
                <div>
                  <p className="text-emerald-400 font-mono text-sm font-semibold">Available for Opportunities</p>
                  <p className="text-slate-500 text-xs font-mono mt-0.5">
                    Actively looking for SDE roles & internships
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card p-7 relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 w-full h-0.5"
              style={{ background: 'linear-gradient(90deg, #00f5ff, transparent)' }}
            />

            <h3
              className="text-sm font-semibold mb-6 tracking-widest"
              style={{ fontFamily: 'Orbitron, monospace', color: '#00f5ff', fontSize: '0.7rem' }}
            >
              SEND A MESSAGE
            </h3>

            {sent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-5 p-4 rounded-lg text-center"
                style={{ background: 'rgba(0,255,135,0.1)', border: '1px solid rgba(0,255,135,0.3)' }}
              >
                <p className="text-emerald-400 font-mono text-sm">✓ Message sent! I'll be in touch soon.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="relative">
                <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-sm font-mono text-slate-300 placeholder-slate-600 outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,245,255,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <AtSign size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-sm font-mono text-slate-300 placeholder-slate-600 outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,245,255,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare size={14} className="absolute left-4 top-4 text-slate-600" />
                <textarea
                  placeholder="Your message..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-sm font-mono text-slate-300 placeholder-slate-600 outline-none resize-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,245,255,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg flex items-center justify-center gap-2 font-mono text-sm transition-all"
                style={{
                  background: 'linear-gradient(135deg, #00f5ff20, #00ff8720)',
                  border: '1px solid rgba(0,245,255,0.4)',
                  color: '#00f5ff',
                  boxShadow: '0 0 20px rgba(0,245,255,0.1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #00f5ff30, #00ff8730)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,245,255,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #00f5ff20, #00ff8720)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,255,0.1)';
                }}
              >
                <Send size={16} />
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
