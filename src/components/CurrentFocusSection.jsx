import { motion } from 'framer-motion';
import { Code, BookOpen, BrainCircuit, Rocket } from 'lucide-react';

const CurrentFocusSection = () => {
  return (
    <section id="focus" style={styles.section}>
      <style>{`
        @media (max-width: 768px) {
          .focus-card { padding: 1.5rem !important; }
        }
      `}</style>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Present Activity</span>
          <h2 style={styles.title}>
            Current <span className="text-primary">Focus</span>
          </h2>
        </div>

        <div style={styles.grid}>
          {/* Currently Learning */}
          <motion.div
            style={styles.card}
            className="surface focus-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={styles.iconHeader}>
              <div style={styles.iconWrapper}><BrainCircuit size={28} aria-hidden="true" /></div>
              <h3 style={styles.cardTitle}>Currently Learning</h3>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>
                <BookOpen size={18} color="var(--primary)" aria-hidden="true" />
                <span><strong style={{ color: '#fff' }}>Advanced RAG Pipelines:</strong> Exploring GraphRAG, dense retrieval techniques, and highly-contextual LLM routing.</span>
              </li>
              <li style={styles.listItem}>
                <BookOpen size={18} color="var(--primary)" aria-hidden="true" />
                <span><strong style={{ color: '#fff' }}>Distributed Training:</strong> Implementing PyTorch FSDP (Fully Sharded Data Parallel) for training large-scale transformers.</span>
              </li>
              <li style={styles.listItem}>
                <BookOpen size={18} color="var(--primary)" aria-hidden="true" />
                <span><strong style={{ color: '#fff' }}>Rust for AI:</strong> Writing highly-performant data loaders and inference modules.</span>
              </li>
            </ul>
          </motion.div>

          {/* Currently Building */}
          <motion.div
            style={styles.card}
            className="surface focus-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={styles.iconHeader}>
              <div style={styles.iconWrapper}><Rocket size={28} aria-hidden="true" /></div>
              <h3 style={styles.cardTitle}>Currently Building</h3>
            </div>

            <ul style={styles.list}>
              <li style={styles.listItem}>
                <Code size={18} color="var(--primary)" aria-hidden="true" />
                <span><strong style={{ color: '#fff' }}>Personal LLM Agent Framework:</strong> An open-source toolkit for connecting small local models (like Llama 3 8B) to daily workflow APIs.</span>
              </li>
              <li style={styles.listItem}>
                <Code size={18} color="var(--primary)" aria-hidden="true" />
                <span><strong style={{ color: '#fff' }}>Real-time Audio Processing Pipeline:</strong> A passion project utilizing Whisper for live translation and transcription running on Edge devices.</span>
              </li>
              <li style={styles.listItem}>
                <Code size={18} color="var(--primary)" aria-hidden="true" />
                <span><strong style={{ color: '#fff' }}>Data Science Portfolio V2:</strong> Continually refining the very site you are exploring!</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 0',
    backgroundColor: 'var(--bg-main)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '900',
    marginTop: '0.5rem',
    letterSpacing: '-1px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
    gap: '3rem',
  },
  card: {
    padding: '3rem',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
  },
  iconHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid rgba(255,255,255,0.05)'
  },
  iconWrapper: {
    width: '48px', height: '48px',
    borderRadius: '12px',
    background: 'rgba(0,230,118,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--primary)'
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#fff'
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    fontSize: '1.05rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6'
  }
};

export default CurrentFocusSection;
