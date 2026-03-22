import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import hrDecisionImg from '../assets/projects/hr_decision.png';
import faceRecognitionImg from '../assets/projects/face_recognition.png';
import ragAnalyzerImg from '../assets/projects/rag_analyzer.png';

const projects = [
  {
    title: 'HR Decision Engine',
    description: 'Developed an end-to-end employee attrition prediction system (85% accuracy) using Pandas, NumPy, and Scikit-learn. Built an interactive Streamlit dashboard for workforce analytics.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    image: hrDecisionImg
  },
  {
    title: 'Real-Time Face Recognition',
    description: 'Implemented a high-speed computer vision pipeline using YOLOv8 and OpenCV for real-time localization and vector similarity matching (20-25 FPS on CPU).',
    tags: ['YOLOv8', 'OpenCV', 'Computer Vision'],
    image: faceRecognitionImg
  },
  {
    title: 'RAG Research Paper Analyzer',
    description: 'Built an AI-powered document QA assistant via vibe coding using HuggingFace embeddings and FAISS vector search to reduce hallucinations. Packaged in a lightweight Streamlit app.',
    tags: ['LLMs', 'RAG', 'HuggingFace', 'FAISS'],
    image: ragAnalyzerImg
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Portfolio</span>
          <h2 style={styles.title}>
            Featured <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-main)' }}>Projects</span>
          </h2>
        </div>

        <div style={styles.grid}>
          {projects.map((project, i) => (
            <motion.div 
              className="card" 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ padding: '0', display: 'flex', flexDirection: 'column' }}
            >
              <div style={styles.imagePlaceholder}>
                <img src={project.image} alt={project.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
                <div style={styles.overlay}></div>
                <h3 style={{ position: 'absolute', bottom: '20px', left: '25px', zIndex: 2, fontSize: '1.4rem', fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.5)', color: '#fff' }}>
                  {project.title}
                </h3>
              </div>
              
              <div style={styles.content}>
                <p style={styles.description}>{project.description}</p>
                
                <div style={styles.tagsContainer}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} style={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div style={styles.footer}>
                  <a href="#" style={styles.iconLink}><Github size={20} /></a>
                  <a href="#" style={styles.iconLink}><ExternalLink size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="https://github.com/nikeshh03" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', padding: '1rem 2rem', fontSize: '1.05rem', gap: '0.8rem' }}>
            <Github size={22} /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 0',
    backgroundColor: 'var(--bg-main)',
    position: 'relative'
  },
  container: {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    marginBottom: '4rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    marginTop: '0.5rem',
    letterSpacing: '-1px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
  },
  imagePlaceholder: {
    height: '220px',
    position: 'relative',
    background: 'linear-gradient(135deg, rgba(0, 230, 118, 0.2) 0%, rgba(0,0,0,0) 100%)',
    backgroundColor: 'var(--bg-surface)',
    borderBottom: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
    zIndex: 1
  },
  content: {
    padding: '2rem 1.75rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  description: {
    color: 'var(--text-muted)',
    fontSize: '1.05rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    flex: 1
  },
  tagsContainer: {
    display: 'flex',
    gap: '0.6rem',
    flexWrap: 'wrap',
    marginBottom: '2rem'
  },
  tag: {
    padding: '0.4rem 0.8rem',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '100px',
    fontSize: '0.85rem',
    color: 'var(--text-main)',
    fontFamily: 'JetBrains Mono',
  },
  footer: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    borderTop: '1px solid var(--border-color)',
    paddingTop: '1rem',
    position: 'relative',
    zIndex: 10
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-muted)',
    transition: 'all 0.3s ease',
  }
};

export default ProjectsSection;
