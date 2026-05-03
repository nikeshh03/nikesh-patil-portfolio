import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { profiles } from '../data/profiles';

const ProfilesSection = () => (
  <section id="profiles" style={styles.section}>
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.label}>Around The Web</span>
        <h2 style={styles.title}>
          Connect &amp; <span style={styles.outlineText}>Follow</span>
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
            {/* Decorative overlay — pointer-events off */}
            <div style={styles.cardOverlay} aria-hidden="true" />

            <div style={{ ...styles.iconBox, color: profile.color }}>
              <profile.Icon size={profile.size} aria-hidden="true" />
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

const styles = {
  section: {
    padding: '120px 0',
    backgroundColor: 'var(--bg-main)',
    position: 'relative',
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
  outlineText: {
    color: 'transparent',
    WebkitTextStroke: '1px var(--text-main)',
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
    pointerEvents: 'none',
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
    gap: '0.5rem',
  },
  name: {
    fontSize: '1.4rem',
    fontWeight: '800',
    letterSpacing: '-0.5px',
  },
  stat: {
    fontSize: '1rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  arrowIcon: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    opacity: 0.5,
  },
};

export default ProfilesSection;
