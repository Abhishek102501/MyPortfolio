import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Shield, Car, Eye, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Blockchain-Based Academic Certification System',
    tagline: 'Tamper-proof credentials on the chain',
    description:
      'A decentralised system that issues and verifies academic certificates on a blockchain network. Smart contracts ensure immutability while an admin dashboard lets institutions mint and validate credentials — eliminating fraud.',
    tech: ['Java', 'Spring Boot', 'Blockchain', 'MySQL', 'REST APIs', 'Smart Contracts'],
    icon: Shield,
    color: '#00f5ff',
    accent: 'rgba(0,245,255,0.08)',
    border: 'rgba(0,245,255,0.25)',
    github: 'https://github.com/Abhishek102501/Blockchain_Based_Academic_Certification.git',
    demo: '#',
    badge: 'FLAGSHIP',
  },
  {
    id: 2,
    title: 'Car Rental System',
    tagline: 'Full-stack rental platform',
    description:
      'A complete car rental management platform built with Spring Boot and MySQL. Features include vehicle inventory, booking workflows, payment tracking, and admin analytics — backed by RESTful APIs and JUnit test coverage.',
    tech: ['Spring Boot', 'MySQL', 'JUnit', 'Mockito', 'REST APIs', 'Hibernate', 'Maven'],
    icon: Car,
    color: '#00ff87',
    accent: 'rgba(0,255,135,0.08)',
    border: 'rgba(0,255,135,0.25)',
    github: 'https://github.com/Abhishek102501/Car-Rental-System.git',
    demo: '#',
    badge: 'BACKEND',
  },
  {
    id: 3,
    title: 'Deepfake Detection System',
    tagline: 'AI-powered media authenticity',
    description:
      'A hybrid Java + Python system that analyses video frames for deepfake artefacts using AI/ML models. The Java backend orchestrates video processing pipelines while Python handles inference, serving results via REST endpoints.',
    tech: ['Java', 'Python', 'AI/ML', 'Spring Boot', 'OpenCV', 'REST APIs', 'MySQL'],
    icon: Eye,
    color: '#bf00ff',
    accent: 'rgba(191,0,255,0.08)',
    border: 'rgba(191,0,255,0.25)',
    github: 'https://github.com/Abhishek102501/Deepfake-Detection-System.git',
    demo: '#',
    badge: 'AI + JAVA',
  },
];

function TiltCard({ project, inView, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -8;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * 8;
    setTilt({ x: rx, y: ry });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      // style={{
      //  
      // }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="glass-card relative overflow-hidden flex flex-col"
      style={{
        background: project.accent,
        border: `1px solid ${hovered ? project.border : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.6), 0 0 30px ${project.color}20` : '0 4px 20px rgba(0,0,0,0.3)',
        transition: hovered ? 'border-color 0.2s, box-shadow 0.2s' : 'all 0.5s ease',
         transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? 'transform 0.1s ease' : 'transform 0.5s ease',
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 w-full h-0.5"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${project.color}20, transparent 60%)`,
          opacity: hovered ? 1 : 0.5,
          transition: 'opacity 0.3s',
        }}
      />

      <div className="p-7 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="p-3 rounded-xl"
            style={{
              background: `${project.color}15`,
              border: `1px solid ${project.color}40`,
            }}
          >
            <Icon size={22} style={{ color: project.color }} />
          </div>
          <span
            className="text-[9px] font-mono tracking-[0.2em] px-3 py-1 rounded-full"
            style={{
              background: `${project.color}15`,
              border: `1px solid ${project.color}30`,
              color: project.color,
            }}
          >
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold leading-tight mb-1"
          style={{ fontFamily: 'Syne, sans-serif', color: '#e2e8f0' }}
        >
          {project.title}
        </h3>
        <p className="text-xs font-mono mb-4" style={{ color: project.color }}>
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#94a3b8',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#94a3b8',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = project.color;
              e.currentTarget.style.borderColor = project.color + '50';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
            }}
          >
            <Github size={13} />
            GitHub
          </a>
          <a
            href={project.demo}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono flex-1 justify-center transition-all"
            style={{
              background: `${project.color}20`,
              border: `1px solid ${project.color}50`,
              color: project.color,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = project.color + '30';
              e.currentTarget.style.boxShadow = `0 0 15px ${project.color}30`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = project.color + '20';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ExternalLink size={13} />
            Live Demo
            <ChevronRight size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-24 grid-bg" style={{ paddingLeft: '6rem' }}>
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
          className="mb-16"
        >
          <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-2">03 / Projects</p>
          <h2 className="section-heading text-3xl md:text-4xl text-white">
            Things I've Built<span style={{ color: '#00f5ff' }}>.</span>
          </h2>
          <p className="text-slate-500 mt-4 text-sm font-mono">
            // Hover over cards for 3D tilt effect
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <TiltCard key={project.id} project={project} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
