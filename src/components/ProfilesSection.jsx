import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, ChefHat, ArrowUpRight } from 'lucide-react';

const XIcon = ({ size, color }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color || 'currentColor'} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const profiles = [
  { name: 'GitHub',    Icon: Github,   url: 'https://github.com/nikeshh03',                         stat: '15+ Repositories', color: 'rgba(255, 255, 255, 1)',  size: 48 },
  { name: 'LinkedIn',  Icon: Linkedin,  url: 'https://linkedin.com/in/nikesh-patil',                 stat: '500+ Connections', color: 'rgba(10, 102, 194, 1)',   size: 48 },
  { name: 'X',         Icon: XIcon,     url: 'https://twitter.com/nikeshh03',                        stat: 'Daily Active',     color: 'rgba(255, 255, 255, 1)',  size: 40 },
  { name: 'LeetCode',  Icon: Code2,     url: 'https://leetcode.com/nikeshh03',                       stat: '250+ Solved',      color: 'rgba(255, 161, 22, 1)',   size: 48 },
  { name: 'CodeChef',  Icon: ChefHat,   url: 'https://codechef.com/users/nikeshh03',                 stat: '3★ Rated',         color: 'rgba(91, 70, 56, 1)',     size: 48 },
];

const ProfilesSection = () => {
  return (
    <section id="profiles" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Around The Web</span>
          <h2 style={styles.title}>
            Connect &amp; <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-main)' }}>Follow</span>
          </h2>
        </div>

        <div style={styles.grid}>
          {profiles.map((profile, i) => (
            <motion.a
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              key={profile.name}
              className="card"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={styles.profileCard}
              aria-label={`Visit ${profile.name} profile`}
            >
              {/* overlay is purely decorative — pointer-events off */}
              <div style={styles.cardOverlay}></div>

              <div style={{ ...styles.iconBox, color: profile.color }}>
                <profile.Icon size={profile.size} />
              </div>

              <div style={styles.textContent}>
                <h3 style={styles.name}>{profile.name}</h3>
                <p style={styles.stat}>{profile.stat}</p>
              </div>

              <div style={styles.arrowIcon} aria-hidden="true">
                <ArrowUpRight size={24} color={profile.color} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 0',
    backgroundColor: 'var(--bg-main)',
    position: 'relative'
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '5rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '900',
    marginTop: '0.5rem',
    letterSpacing: '-1px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
    gap: '2rem',
  },
  profileCard: {
    padding: '2.5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'inherit',
    position: 'relative',
    overflow: 'hidden',
    transition: 'border-color 0.3s ease',
  },
  cardOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0) 100%)',
    zIndex: 0,
    pointerEvents: 'none'
  },
  iconBox: {
    position: 'relative',
    zIndex: 1,
    marginBottom: '1.5rem',
    transition: 'transform 0.3s ease',
  },
  textContent: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  name: {
    fontSize: '1.4rem',
    fontWeight: '800',
    letterSpacing: '-0.5px'
  },
  stat: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    fontFamily: 'JetBrains Mono, monospace',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  arrowIcon: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    opacity: 0.5,
  }
};

export default ProfilesSection;
