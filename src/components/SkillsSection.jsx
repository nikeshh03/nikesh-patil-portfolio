import { motion } from 'framer-motion';
import SkillIcon from './shared/SkillIcon';

const skillsData = [
  {
    category: 'Data Science & CV',
    desc: 'Extracting patterns and building vision pipelines.',
    items: ['Python', 'SQL', 'NumPy', 'Pandas', 'OpenCV', 'YOLOv8', 'EDA', 'Feature Eng.']
  },
  {
    category: 'Machine & Deep Learning',
    desc: 'Training robust predictive AI models.',
    items: ['Scikit-learn', 'TensorFlow', 'Keras', 'Model Training', 'Cross-Validation', 'PyTorch']
  },
  {
    category: 'Generative AI & NLP',
    desc: 'Architecting intelligent language systems.',
    items: ['HuggingFace', 'LangChain', 'RAG', 'NLTK', 'Vector Search', 'LLMs']
  },
  {
    category: 'MLOps & Cloud',
    desc: 'Deploying and scaling machine learning.',
    items: ['Streamlit', 'MLflow', 'Databricks', 'AWS', 'PostgreSQL', 'Git', 'Matplotlib']
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" style={styles.section}>
      <style>{`
        .skill-row {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .skill-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .category-info {
          flex: 0 0 auto;
        }
        @media (min-width: 860px) {
          .skill-row {
            flex-direction: row;
            gap: 3rem;
            align-items: flex-start;
          }
          .category-info {
            flex: 0 0 240px;
          }
        }
        .category-title {
          font-size: 1.35rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
        }
        .category-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          flex: 1;
          align-content: flex-start;
        }
        .skill-pill {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.2rem;
          background: rgba(255,255,255,0.015);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
          user-select: text;
        }
        .skill-pill:hover {
          background: rgba(0, 230, 118, 0.05);
          border-color: rgba(0, 230, 118, 0.4);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 230, 118, 0.1);
        }
        .skill-logo {
          width: 20px;
          height: 20px;
          opacity: 0.9;
        }
        .skill-logo-svg {
          width: 20px;
          height: 20px;
          color: var(--primary);
          opacity: 0.9;
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.header}>
          <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Expertise</span>
          <h2 style={styles.title}>
            Technical <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-main)' }}>Arsenal</span>
          </h2>
        </div>

        <div style={styles.listContainer}>
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              className="skill-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="category-info">
                <h3 className="category-title">{group.category}</h3>
                <p className="category-desc">{group.desc}</p>
              </div>

              <div className="skills-list">
                {group.items.map((item) => (
                  <motion.div
                    key={item}
                    className="skill-pill"
                    whileHover={{ scale: 1.02 }}
                  >
                    <SkillIcon name={item} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: 'var(--bg-main)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    marginBottom: '3rem',
  },
  title: {
    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
    letterSpacing: '-1px',
    marginTop: '0.5rem'
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  }
};

export default SkillsSection;
