import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const HeroSection = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

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
          <motion.div 
            style={styles.locationBadge}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <MapPin size={16} color="var(--primary)" /> Pune, India
          </motion.div>

          <motion.p 
            style={styles.greeting}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I am <span style={{ color: 'var(--primary)', fontWeight: '600' }}>Nikesh Patil</span>
          </motion.p>
          <motion.h1 
            style={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            DATA<br /> SCIENTIST
          </motion.h1>
          <motion.p 
            style={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Extracting signal from the noise, and building systems that make machines a whole lot smarter.
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
        
        <motion.div 
          style={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* 3D Code Editor Effect using CSS */}
          <div style={styles.codeWindow}>
            <div style={styles.windowHeader}>
              <div style={styles.dots}>
                <span style={{...styles.dot, background: '#ff5f56'}}></span>
                <span style={{...styles.dot, background: '#ffbd2e'}}></span>
                <span style={{...styles.dot, background: '#27c93f'}}></span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#8b949e', flex: 1, textAlign: 'center' }}>model.py</div>
            </div>
            <div style={styles.windowBody} className="font-mono">
              <p><span style={{color: '#ff7b72'}}>import</span> torch</p>
              <p><span style={{color: '#ff7b72'}}>import</span> torch.nn <span style={{color: '#ff7b72'}}>as</span> nn</p>
              <br/>
              <p><span style={{color: '#ff7b72'}}>class</span> <span style={{color: '#d2a8ff'}}>DigitalTwin</span>(nn.Module):</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#ff7b72'}}>def</span> <span style={{color: '#d2a8ff'}}>__init__</span>(self):</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#79c0ff'}}>super</span>().__init__()</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.brain = nn.Transformer(</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d_model=<span style={{color: '#79c0ff'}}>512</span>, nhead=<span style={{color: '#79c0ff'}}>8</span></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.knowledge = <span style={{color: '#a5d6ff'}}>"Infinite"</span></p>
              <br />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#ff7b72'}}>def</span> <span style={{color: '#d2a8ff'}}>forward</span>(self, data):</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#ff7b72'}}>return</span> self.brain(data)</p>
              <br/>
              <p style={{ color: '#8b949e' }}># Training in progress... {position}%</p>
              <div style={{ width: '100%', height: '4px', background: '#333', marginTop: '10px', borderRadius: '2px' }}>
                <div style={{ width: `${position}%`, height: '100%', background: 'var(--primary)', borderRadius: '2px', transition: 'width 0.1s linear' }}></div>
              </div>
            </div>
          </div>
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
    opacity: 0.6
  },
  container: {
    width: '100%',
    maxWidth: '1300px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
    gap: '2rem',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 2
  },
  textContent: {
    flex: '1 1 500px',
    zIndex: 10,
  },
  locationBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: 'var(--text-muted)',
    marginBottom: '1.5rem',
    fontFamily: 'JetBrains Mono',
    fontSize: '0.9rem',
    padding: '0.4rem 0.8rem',
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '100px',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  greeting: {
    fontSize: '1.4rem',
    marginBottom: '1rem',
    letterSpacing: '1px',
    color: 'var(--text-muted)'
  },
  title: {
    fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
    fontWeight: '900',
    lineHeight: '1',
    letterSpacing: '-0.04em',
    marginBottom: '1.5rem',
    color: '#fff',
    textTransform: 'uppercase'
  },
  description: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    lineHeight: '1.7',
    maxWidth: '480px',
    marginBottom: '1rem'
  },
  imageContainer: {
    flex: '1 1 500px',
    perspective: '1000px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  codeWindow: {
    width: '100%',
    maxWidth: '550px',
    background: '#0d1117',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '-20px 20px 60px rgba(0,0,0,0.8), 0 0 20px rgba(0,230,118,0.15)',
    transform: 'rotateY(-15deg) rotateX(8deg) scale(1.05)',
    transition: 'transform 0.5s ease',
    overflow: 'hidden',
  },
  windowHeader: {
    background: '#161b22',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  },
  dots: {
    display: 'flex',
    gap: '8px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
  },
  windowBody: {
    padding: '24px',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#c9d1d9',
  }
};

export default HeroSection;
