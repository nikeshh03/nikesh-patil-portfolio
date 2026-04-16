import { motion } from 'framer-motion';
import { ArrowUpRight, Camera, BrainCircuit, FileSearch, Database, Eye } from 'lucide-react';
const simpleIconsMap = {
  'Python': 'python',
  'Scikit-learn': 'scikitlearn',
  'Pandas': 'pandas',
  'Streamlit': 'streamlit',
  'OpenCV': 'opencv',
  'HuggingFace': 'huggingface'
};

const lucideIconsMap = {
  'YOLOv8': Camera,
  'Computer Vision': Eye,
  'LLMs': BrainCircuit,
  'RAG': FileSearch,
  'FAISS': Database
};

const SkillIcon = ({ name }) => {
  if (simpleIconsMap[name]) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${simpleIconsMap[name]}/00e676`}
        alt={`${name} icon`}
        className="skill-logo"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    );
  }
  const LucideIcon = lucideIconsMap[name] || Database;
  return <LucideIcon className="skill-logo-svg" aria-hidden="true" />;
};

const projects = [
  {
    title: 'HR Decision Engine',
    description: 'An advanced predictive analytics system for enterprise workforce management.',
    features: [
      'Engineered an attrition prediction model achieving 85% accuracy.',
      'Developed interactive dashboard for real-time HR insights.',
      'Optimized robust data pipelines using Pandas and NumPy.'
    ],
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    metric: '85% Accuracy',
    link: 'https://github.com/nikeshh03'
  },
  {
    title: 'Real-Time Face Recognition',
    description: 'A high-performance computer vision pipeline for identity verification.',
    features: [
      'Implemented YOLOv8 for rapid object detection and localization.',
      'Achieved 20-25 FPS real-time processing on standard CPU hardware.',
      'Integrated vector similarity matching for facial embeddings.'
    ],
    tags: ['YOLOv8', 'OpenCV', 'Computer Vision'],
    metric: '20-25 FPS',
    link: 'https://github.com/nikeshh03'
  },
  {
    title: 'RAG Research Paper Analyzer',
    description: 'An intelligent document assistant designed to eliminate AI hallucinations during research.',
    features: [
      'Built a robust QA system utilizing Retrieval-Augmented Generation.',
      'Integrated HuggingFace embeddings with FAISS for rapid vector search.',
      'Containerized and deployed as a lightweight standalone web application.'
    ],
    tags: ['LLMs', 'RAG', 'HuggingFace', 'FAISS'],
    metric: 'Zero Hallucinations',
    link: 'https://github.com/nikeshh03'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" style={styles.section}>
      <style>{`
        .project-card-ref {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
        }
        .project-card-ref:hover .arrow-icon {
          color: #fff !important;
          transform: translate(2px, -2px);
        }
        @media (max-width: 768px) {
          .project-footer {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem;
          }
          .project-card-ref {
            padding: 1.5rem !important;
          }
          .section-title {
            font-size: 2rem !important;
          }
        }
        .skill-logo {
          width: 14px;
          height: 14px;
          opacity: 0.9;
        }
        .skill-logo-svg {
          width: 14px;
          height: 14px;
          color: var(--primary);
          opacity: 0.9;
        }
      `}</style>
      
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="section-title" style={styles.sectionTitle}>Featured Projects</h2>
        </div>

        <div style={styles.list}>
          {projects.map((project, i) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              className="card project-card-ref"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div style={styles.cardHeader}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <ArrowUpRight className="arrow-icon" size={20} color="var(--text-muted)" style={{ transition: 'all 0.3s' }} />
              </div>

              <div style={styles.descriptionContainer}>
                <p style={styles.description}>{project.description}</p>
                {project.features && (
                  <ul style={styles.featuresList}>
                    {project.features.map((feature, idx) => (
                      <li key={idx} style={styles.featureItem}>
                        <span style={styles.bullet}>▹</span> {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="project-footer" style={styles.footer}>
                <div style={styles.tagsContainer}>
                  {project.tags.map(tag => (
                    <span key={tag} style={styles.tag}>
                      <SkillIcon name={tag} />
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={styles.metric}>
                  {project.metric}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: 'var(--bg-main)',
  },
  container: {
    maxWidth: '1000px', // Perfect width for a nice single column reading experience
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--primary)', // Green text from the mockup
    letterSpacing: '-0.5px'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem', // Margin between cards
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.2rem'
  },
  projectTitle: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.3px',
    lineHeight: '1.2'
  },
  descriptionContainer: {
    marginBottom: '2rem',
  },
  description: {
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
    maxWidth: '92%' // Leaves a little room on the right side
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  featureItem: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.8rem',
    lineHeight: '1.5',
  },
  bullet: {
    color: 'var(--primary)',
    fontWeight: 'bold',
    marginTop: '2px', // Align with text
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto'
  },
  tagsContainer: {
    display: 'flex',
    gap: '0.8rem',
    flexWrap: 'wrap',
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.4rem 0.8rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '6px', // Slight rounding
    fontSize: '0.85rem',
    color: '#e5e7eb',
    fontWeight: '500',
    fontFamily: '"Plus Jakarta Sans", sans-serif'
  },
  metric: {
    color: 'var(--primary)',
    fontSize: '0.95rem',
    fontWeight: '500',
    fontFamily: '"Plus Jakarta Sans", sans-serif'
  }
};

export default ProjectsSection;
