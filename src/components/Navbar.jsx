import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      ...styles.navbar,
      background: scrolled ? 'rgba(6, 6, 8, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
      padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
    }}>
      <div style={styles.logoContainer}>
        <Zap size={28} color="var(--primary)" />
        <span style={styles.logoText}>Nikesh Patil</span>
      </div>
      <div style={styles.navLinks}>
        <a href="#about" style={styles.link}>Journey</a>
        <a href="#skills" style={styles.link}>Expertise</a>
        <a href="#projects" style={styles.link}>Portfolio</a>
        <a href="#profiles" style={styles.link}>Network</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
      <div>
        <button className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.6rem 1.4rem' }}>Resume</button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    transition: 'all 0.3s ease',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoText: {
    fontSize: '1.4rem',
    fontWeight: '800',
    letterSpacing: '-0.5px',
  },
  navLinks: {
    display: 'flex',
    gap: '2.5rem',
  },
  link: {
    fontSize: '0.95rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'var(--text-muted)',
    fontWeight: '500'
  }
};

export default Navbar;
