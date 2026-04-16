import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.topSection}>
          <div style={styles.brand}>
            <Zap size={22} color="var(--primary)" aria-hidden="true" />
            <span style={styles.logoText}>Nikesh Patil</span>
          </div>

          <nav style={styles.links} aria-label="Footer navigation">
            <a href="#about"    style={styles.link}>Journey</a>
            <a href="#skills"   style={styles.link}>Expertise</a>
            <a href="#projects" style={styles.link}>Portfolio</a>
            <a href="#profiles" style={styles.link}>Network</a>
          </nav>
        </div>

        <div style={styles.bottomSection}>
          <p style={styles.copyright}>© {new Date().getFullYear()} Nikesh Patil. All rights reserved.</p>
          <p style={styles.credit}>Made with ☕ and Claude.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--bg-card)',
    borderTop: '1px solid var(--border-color)',
    padding: '2rem 0 1.5rem 0',
    marginTop: 'auto'
  },
  container: {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    paddingBottom: '1.5rem',
    marginBottom: '1rem'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: '700',
    letterSpacing: '-0.5px',
    color: '#fff'
  },
  links: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  link: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'color 0.3s',
    textDecoration: 'none'
  },
  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  copyright: {
    color: '#666',
    fontSize: '0.85rem',
    fontFamily: 'JetBrains Mono, monospace',
  },
  credit: {
    color: 'var(--text-muted)',
    fontSize: '0.85rem',
    fontFamily: 'JetBrains Mono, monospace',
  }
};

export default Footer;
