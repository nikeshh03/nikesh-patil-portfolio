import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const navLinks = [
  { label: 'Journey', href: '#about' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Network', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav style={{
        ...styles.navbar,
        background: scrolled ? 'rgba(6, 6, 8, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
      }}>
        <div style={styles.logoContainer}>
          <Zap size={28} color="var(--primary)" aria-hidden="true" />
          <span style={styles.logoText}>Nikesh Patil</span>
        </div>

        {/* Desktop nav links */}
        <div className="nav-desktop-links" style={styles.navLinks} role="navigation" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} style={styles.link}>{label}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="nav-desktop-cta" style={styles.navRight}>
          <a
            href="https://drive.google.com/file/d/your-resume-file-id/view"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            style={{ fontSize: '0.9rem', padding: '0.6rem 1.4rem' }}
            aria-label="Open resume in new tab"
          >
            Resume
          </a>
        </div>

        {/* Hamburger — visible on mobile */}
        <button
          className="nav-hamburger"
          style={styles.hamburger}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span style={{ ...styles.bar, transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ ...styles.bar, opacity: menuOpen ? 0 : 1 }} />
          <span style={{ ...styles.bar, transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav-mobile-menu" style={styles.mobileMenu} role="navigation" aria-label="Mobile navigation">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} style={styles.mobileLink} onClick={closeMenu}>{label}</a>
          ))}
          <a
            href="https://drive.google.com/file/d/your-resume-file-id/view"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
            onClick={closeMenu}
          >
            Resume
          </a>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-desktop-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-menu { display: none !important; }
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </>
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
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  bar: {
    display: 'block',
    width: '24px',
    height: '2px',
    backgroundColor: '#fff',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
  },
  mobileMenu: {
    position: 'fixed',
    top: '64px',
    left: 0,
    right: 0,
    background: 'rgba(6, 6, 8, 0.97)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border-color)',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem 2rem',
    gap: '1.2rem',
    zIndex: 999,
  },
  mobileLink: {
    fontSize: '1.1rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'var(--text-muted)',
    fontWeight: '500',
    padding: '0.5rem 0',
    borderBottom: '1px solid var(--border-color)',
    transition: 'color 0.3s ease',
  },
};

export default Navbar;
