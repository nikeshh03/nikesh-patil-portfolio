import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => (
  <section id="hero" style={styles.section} className="hero-section">
    <div className="hero-bg">
      <div className="hero-grid" />
      <div className="hero-glow" />
    </div>

    <div style={styles.container}>
      <motion.div
        style={styles.textContent}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="hero-title"
          style={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hey... I&apos;m Nikesh<br />
          Helping systems evolve <br />
          a little better.
        </motion.h1>

        <motion.p
          style={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          AI Engineer &amp; Developer
        </motion.p>

        <motion.div
          className="hero-buttons"
          style={styles.buttonRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a href="#contact" className="btn btn-primary">Contact Me</a>
          <a
            href="https://github.com/nikeshh03"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            View Github
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '80px',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'var(--bg-main)',
  },
  container: {
    width: '100%',
    maxWidth: '1300px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2,
  },
  textContent: {
    maxWidth: '1000px',
    width: '100%',
    zIndex: 10,
  },
  title: {
    fontFamily: '"Outfit", sans-serif',
    fontWeight: '900',
    letterSpacing: '-0.04em',
    color: 'var(--primary)',
    lineHeight: '1.1',
    fontSize: 'clamp(1.5rem, 7vw, 6rem)',
    marginBottom: '1.5rem',
    whiteSpace: 'nowrap',
  },
  tagline: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: '#e5e7eb',
    lineHeight: '1.7',
    maxWidth: '480px',
    marginBottom: '1rem',
  },
  buttonRow: {
    marginTop: '2.5rem',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
};

export default HeroSection;
