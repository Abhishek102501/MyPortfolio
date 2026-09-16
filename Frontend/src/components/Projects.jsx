import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Github, ExternalLink, Mountain, FileSearch, ArrowRight,
  Satellite, Waves, TrendingUp, Upload, Scissors, Sparkles,
  Database, MessageSquare, Shirt, Sparkle,
} from 'lucide-react';

const featured = {
  title: 'NER-SHIELD',
  subtitle: 'AI Landslide Risk Intelligence & Early Warning Platform',
  description:
    "An AI-driven landslide risk, early-warning and emergency-response platform for India's North Eastern Region, built for Smart India Hackathon 2026 (SIH26001, Ministry of DoNER).",
  tech: ['Next.js', 'React', 'TypeScript', 'MapLibre GL', 'Three.js', 'Spring Boot', 'FastAPI', 'PostgreSQL/PostGIS'],
  pipeline: [
    { icon: Satellite, label: 'U-Net', sub: 'Satellite image segmentation' },
    { icon: Waves, label: 'LSTM', sub: 'Rainfall forecasting' },
    { icon: TrendingUp, label: 'XGBoost', sub: 'Risk scoring' },
  ],
  stack: [
    { label: 'Frontend', value: 'Next.js + MapLibre GL risk maps + Three.js terrain visualization' },
    { label: 'Backend', value: 'Java 21 + Spring Boot' },
    { label: 'AI Microservice', value: 'Python + FastAPI' },
    { label: 'Data', value: 'PostgreSQL / PostGIS geospatial storage' },
  ],
  github: 'https://github.com/Abhishek102501/NER-SHIELD',
  demo: 'https://frontend1-six-xi.vercel.app',
};

const inquora = {
  title: 'Inquora',
  subtitle: 'Retrieval-Augmented PDF Q&A Application',
  description:
    'Full-stack RAG application where users upload a PDF and ask questions, returning grounded answers with page-level citations.',
  tech: ['Python', 'FastAPI', 'Next.js', 'MongoDB Atlas Vector Search', 'Gemini API'],
  architecture: [
    { icon: Upload, label: 'PyMuPDF Extraction' },
    { icon: Scissors, label: 'Recursive Chunking' },
    { icon: Sparkles, label: 'Gemini Embeddings' },
    { icon: Database, label: 'MongoDB Atlas Vector Search' },
    { icon: MessageSquare, label: 'Gemini Generation' },
  ],
  details: [
    '~10 REST endpoints',
    'Document upload & management',
    'Chat with conversation history',
    'JWT per-user access control',
  ],
  github: 'https://github.com/Abhishek102501/Inquora',
  demo: 'https://inquora-puce.vercel.app',
};

const otherProjects = [
  {
    title: 'BrandVerse',
    icon: Shirt,
    color: '#bf00ff',
    description:
      'A fashion discovery platform for exploring brands, comparing collections, and tracking trends, with a service-layer architecture that swaps cleanly between mock and live backends.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL'],
    github: 'https://github.com/Abhishek102501/BrandVerse',
    demo: 'https://brand-verse-ten.vercel.app/',
  },
  {
    title: 'orbit.ai',
    icon: Sparkle,
    color: '#00ff87',
    description:
      'An AI tool discovery platform for finding, exploring, and comparing AI tools, built as a React port with context-based state management and persisted user preferences.',
    tech: ['React', 'Vite', 'Context API'],
    github: 'https://github.com/Abhishek102501/orbit.ai',
    demo: 'https://orbit-ai-git-main-abhishek102501s-projects.vercel.app/',
  },
];

function LinkRow({ github, demo, color }) {
  if (!github && !demo) {
    return (
      <p className="text-[11px] font-mono text-slate-600 italic">
        Source private — hackathon / academic project
      </p>
    );
  }
  return (
    <div className="flex gap-3">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all text-slate-400 hover:text-white"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <Github size={13} />
          GitHub
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono flex-1 justify-center transition-all"
          style={{ background: `${color}20`, border: `1px solid ${color}50`, color }}
        >
          <ExternalLink size={13} />
          Live Demo
          <ArrowRight size={12} />
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl mb-10"
      style={{
        border: '1px solid rgba(0,245,255,0.25)',
        background: 'linear-gradient(160deg, rgba(0,245,255,0.06), rgba(6,18,30,0.6))',
      }}
    >
      {/* Terrain-inspired backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,245,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black, transparent 90%)',
        }}
      />
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.15), transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,255,135,0.08), transparent)',
          clipPath: 'polygon(0 100%, 0 60%, 15% 40%, 30% 65%, 45% 30%, 60% 55%, 75% 20%, 90% 50%, 100% 35%, 100% 100%)',
        }}
      />

      <div className="relative p-8 md:p-12">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span
            className="text-[10px] font-mono tracking-[0.25em] px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(0,245,255,0.15)', border: '1px solid rgba(0,245,255,0.4)', color: '#00f5ff' }}
          >
            FEATURED PROJECT
          </span>
          <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500">
            SIH26001 · MINISTRY OF DoNER
          </span>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div
            className="p-3.5 rounded-xl flex-shrink-0"
            style={{ background: 'rgba(0,245,255,0.12)', border: '1px solid rgba(0,245,255,0.35)' }}
          >
            <Mountain size={26} style={{ color: '#00f5ff' }} />
          </div>
          <div>
            <h3
              className="text-2xl md:text-3xl font-black text-white"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              {featured.title}
            </h3>
            <p className="text-sm md:text-base font-mono mt-1" style={{ color: '#00f5ff' }}>
              {featured.subtitle}
            </p>
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed max-w-3xl mb-8">
          {featured.description}
        </p>

        {/* ML pipeline */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {featured.pipeline.map(({ icon: Icon, label, sub }, i) => (
            <div key={label} className="flex items-center gap-3">
              <div
                className="flex items-center gap-3 p-4 rounded-xl glass-card flex-1"
                style={{ border: '1px solid rgba(0,245,255,0.2)' }}
              >
                <Icon size={18} style={{ color: '#00ff87' }} className="flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white font-mono">{label}</p>
                  <p className="text-[11px] text-slate-500">{sub}</p>
                </div>
              </div>
              {i < featured.pipeline.length - 1 && (
                <ArrowRight size={16} className="hidden sm:block text-slate-700 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Stack breakdown */}
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {featured.stack.map(({ label, value }) => (
            <div key={label} className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-[10px] font-mono tracking-widest uppercase mb-1" style={{ color: '#00f5ff' }}>{label}</p>
              <p className="text-slate-300 text-sm">{value}</p>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {featured.tech.map(t => (
            <span
              key={t}
              className="text-[11px] font-mono px-3 py-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#94a3b8' }}
            >
              {t}
            </span>
          ))}
        </div>

        <LinkRow github={featured.github} demo={featured.demo} color="#00f5ff" />
      </div>
    </motion.div>
  );
}

function InquoraCard({ inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card relative overflow-hidden hover-glow"
      style={{ border: '1px solid rgba(0,255,135,0.2)' }}
    >
      <div
        className="absolute top-0 left-0 w-full h-0.5"
        style={{ background: 'linear-gradient(90deg, #00ff87, transparent)' }}
      />
      <div className="p-7 md:p-8">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-start gap-4">
            <div
              className="p-3 rounded-xl flex-shrink-0"
              style={{ background: 'rgba(0,255,135,0.12)', border: '1px solid rgba(0,255,135,0.35)' }}
            >
              <FileSearch size={22} style={{ color: '#00ff87' }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                {inquora.title}
              </h3>
              <p className="text-xs font-mono mt-1" style={{ color: '#00ff87' }}>{inquora.subtitle}</p>
            </div>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-2xl">
          {inquora.description}
        </p>

        {/* Architecture flow */}
        <div className="mb-6">
          <p className="text-[10px] font-mono text-slate-600 tracking-widest uppercase mb-3">Architecture</p>
          <div className="flex flex-wrap items-center gap-2">
            {inquora.architecture.map(({ icon: Icon, label }, i) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-slate-300"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Icon size={13} style={{ color: '#00ff87' }} />
                  {label}
                </div>
                {i < inquora.architecture.length - 1 && (
                  <ArrowRight size={12} className="text-slate-700 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {inquora.details.map(d => (
            <span key={d} className="text-slate-500 text-xs font-mono flex items-center gap-2">
              <ArrowRight size={10} style={{ color: '#00ff87', flexShrink: 0 }} />
              {d}
            </span>
          ))}
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {inquora.tech.map(t => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}
            >
              {t}
            </span>
          ))}
        </div>

        <LinkRow github={inquora.github} demo={inquora.demo} color="#00ff87" />
      </div>
    </motion.div>
  );
}

function OtherProjectCard({ project, inView, index }) {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 + 0.25, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="glass-card relative overflow-hidden hover-glow flex flex-col"
      style={{ border: `1px solid ${project.color}25` }}
    >
      <div
        className="absolute top-0 left-0 w-full h-0.5"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />
      <div className="p-6 md:p-7 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="p-2.5 rounded-xl flex-shrink-0"
            style={{ background: `${project.color}15`, border: `1px solid ${project.color}40` }}
          >
            <Icon size={20} style={{ color: project.color }} />
          </div>
          <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}
            >
              {t}
            </span>
          ))}
        </div>

        <LinkRow github={project.github} demo={project.demo} color={project.color} />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-24 grid-bg pl-6 sm:pl-10 md:pl-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 90% 20%, rgba(191,0,255,0.05) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="mb-12"
        >
          <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-2">03 / Projects</p>
          <h2 className="section-heading text-3xl md:text-4xl text-white">
            Things I've Built<span style={{ color: '#00f5ff' }}>.</span>
          </h2>
        </motion.div>

        <FeaturedProject inView={inView} />
        <InquoraCard inView={inView} />

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {otherProjects.map((project, i) => (
            <OtherProjectCard key={project.title} project={project} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
