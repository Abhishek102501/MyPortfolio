import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Server, LayoutGrid, Database, BrainCircuit, Wrench, Layers } from 'lucide-react';

const categories = [
  {
    label: 'Languages',
    icon: Code2,
    color: '#00f5ff',
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    label: 'Backend',
    icon: Server,
    color: '#00ff87',
    skills: ['Spring Boot', 'Spring Security', 'Hibernate/JPA', 'JDBC', 'FastAPI', 'REST APIs', 'Lombok'],
  },
  {
    label: 'Frontend',
    icon: LayoutGrid,
    color: '#bf00ff',
    skills: ['React.js', 'Next.js', 'HTML', 'CSS'],
  },
  {
    label: 'Databases',
    icon: Database,
    color: '#ff6b35',
    skills: ['MySQL', 'MongoDB', 'MongoDB Atlas Vector Search', 'PostgreSQL', 'PostGIS'],
  },
  {
    label: 'AI / ML / RAG',
    icon: BrainCircuit,
    color: '#FFA116',
    skills: ['Gemini API', 'Embeddings', 'Vector Search', 'U-Net', 'LSTM', 'XGBoost', 'PyMuPDF'],
  },
  {
    label: 'Tools',
    icon: Wrench,
    color: '#00EA64',
    skills: ['JUnit 5', 'Mockito', 'Postman', 'Swagger', 'Git', 'GitHub', 'Maven', 'JaCoCo', 'AWS'],
  },
  {
    label: 'Concepts',
    icon: Layers,
    color: '#38bdf8',
    skills: ['OOP', 'Data Structures & Collections', 'Exception Handling', 'MVC', 'JWT Authentication'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-24 grid-bg pl-6 sm:pl-10 md:pl-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 60% at 10% 40%, rgba(0,245,255,0.05) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="mb-16"
        >
          <p className="text-xs font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-2">05 / Skills</p>
          <h2 className="section-heading text-3xl md:text-4xl text-white">
            Tech Arsenal<span style={{ color: '#00f5ff' }}>_</span>
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="glass-card p-6 relative overflow-hidden hover-glow"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 w-full h-0.5"
                  style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
                />
                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${cat.color}12, transparent 60%)`,
                  }}
                />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      background: `${cat.color}15`,
                      border: `1px solid ${cat.color}40`,
                    }}
                  >
                    <Icon size={16} style={{ color: cat.color }} />
                  </div>
                  <h3
                    className="font-semibold tracking-widest text-xs uppercase"
                    style={{ fontFamily: 'Orbitron, monospace', color: cat.color }}
                  >
                    {cat.label}
                  </h3>
                </div>

                {/* Skills — sophisticated tag row, no colorful pills */}
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-slate-300 text-sm font-mono relative pl-3"
                    >
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
                        style={{ background: cat.color }}
                      />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
