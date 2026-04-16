import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section style={styles.section} className="hero-section">
      {/* Background Grid & Glow Overlay */}
      <div style={styles.bgOverlay}></div>

      <div style={styles.container}>
        <motion.div
          style={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            style={{ ...styles.title, textTransform: 'none', color: 'var(--primary)', lineHeight: '1.1', fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', marginBottom: '1.5rem', whiteSpace: 'nowrap' }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}
          >
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline">View Github</a>
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
    backgroundColor: 'var(--bg-main)'
  },
  bgOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundImage: `
      radial-gradient(ellipse at center, rgba(0,230,118,0.15) 0%, transparent 60%),
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '100% 100%, 40px 40px, 40px 40px',
    backgroundPosition: 'center center',
    zIndex: 1,
    opacity: 0.25
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
    fontWeight: '900',
    letterSpacing: '-0.04em',
    color: '#fff',
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
