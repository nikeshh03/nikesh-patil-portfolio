import { motion } from 'framer-motion';
import { Code, BookOpen, BrainCircuit, Rocket } from 'lucide-react';
import './CurrentFocusSection.css';

const CurrentFocusSection = () => (
  <section id="focus" style={styles.section}>
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.label}>Present Activity</span>
        <h2 style={styles.title}>
          Current <span className="text-primary">Focus</span>
        </h2>
      </div>

      <div style={styles.grid}>
        <FocusCard
          icon={<BrainCircuit size={28} aria-hidden="true" />}
          title="Currently Learning"
          animateFrom="left"
          bulletIcon={<BookOpen size={18} color="var(--primary)" aria-hidden="true" />}
          items={[
            { label: 'Advanced RAG Pipelines:', text: 'Exploring GraphRAG, dense retrieval techniques, and highly-contextual LLM routing.' },
            { label: 'Distributed Training:', text: 'Implementing PyTorch FSDP (Fully Sharded Data Parallel) for training large-scale transformers.' },
            { label: 'Rust for AI:', text: 'Writing highly-performant data loaders and inference modules.' },
          ]}
        />

        <FocusCard
          icon={<Rocket size={28} aria-hidden="true" />}
          title="Currently Building"
          animateFrom="right"
          bulletIcon={<Code size={18} color="var(--primary)" aria-hidden="true" />}
          items={[
            { label: 'Personal LLM Agent Framework:', text: 'An open-source toolkit for connecting small local models (like Llama 3 8B) to daily workflow APIs.' },
            { label: 'Real-time Audio Processing Pipeline:', text: 'A passion project utilizing Whisper for live translation and transcription running on Edge devices.' },
            { label: 'Data Science Portfolio V2:', text: 'Continually refining the very site you are exploring!' },
          ]}
        />
      </div>
    </div>
  </section>
);

/** Reusable focus card — eliminates the two identical card structures. */
const FocusCard = ({ icon, title, animateFrom, bulletIcon, items }) => (
  <motion.div
    style={styles.card}
    className="surface focus-card"
    initial={{ opacity: 0, x: animateFrom === 'left' ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div style={styles.iconHeader}>
      <div style={styles.iconWrapper}>{icon}</div>
      <h3 style={styles.cardTitle}>{title}</h3>
    </div>
    <ul style={styles.list}>
      {items.map(({ label, text }) => (
        <li key={label} style={styles.listItem}>
          {bulletIcon}
          <span><strong style={styles.itemLabel}>{label}</strong> {text}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

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
  label: {
    color: 'var(--primary)',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '900',
    marginTop: '0.5rem',
    letterSpacing: '-1px',
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
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  iconWrapper: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: 'rgba(0,230,118,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--primary)',
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: 'var(--text-main)',
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
    lineHeight: '1.6',
  },
  itemLabel: {
    color: 'var(--text-main)',
  },
};

export default CurrentFocusSection;
