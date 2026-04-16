import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" style={styles.section} className="hero-section">
      <style>{`
        @media (max-width: 768px) {
          .hero-section { padding-top: 100px !important; }
          .hero-title { white-space: normal !important; font-size: clamp(2.2rem, 10vw, 4rem) !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons a { width: 100%; justify-content: center; }
        }
      `}</style>
      <div style={styles.container}>
        <motion.div
          style={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            style={{ ...styles.title }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hey i,am Nikesh<br />
            Helping systems evolve <br />
            a little better.
          </motion.h1>
          <motion.p
            style={{ ...styles.description, fontWeight: '500', color: '#e5e7eb' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            AI Engineer & Developer
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="https://github.com/nikeshh03" target="_blank" rel="noreferrer" className="btn btn-outline">View Github</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '80px',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#060608' // Solid, deep black matching var(--bg-main)
  },
  container: {
    width: '100%',
    maxWidth: '1300px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2
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
    whiteSpace: 'nowrap'
  },
  description: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    lineHeight: '1.7',
    maxWidth: '480px',
    marginBottom: '1rem'
  }
};

export default HeroSection;
