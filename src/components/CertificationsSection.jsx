import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { certifications } from '../data/certifications';
import './CertificationsSection.css';

const CertificationsSection = () => (
  <section id="certifications" style={styles.section}>
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.label}>Credentials</span>
        <h2 style={styles.title}>
          Certifications &amp; <span className="text-primary">Awards</span>
        </h2>
      </div>

      <div style={styles.list}>
        {certifications.map((cert, i) => (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            key={cert.id}
            className="cert-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            aria-label={`View ${cert.title} credential`}
          >
            <div style={styles.certLeft}>
              <div className="cert-icon-wrapper">
                <cert.Icon size={24} aria-hidden="true" />
              </div>
              <div style={styles.certContent}>
                <div className="cert-title" style={styles.certTitle}>{cert.title}</div>
                <p style={styles.issuer}>{cert.issuer}</p>
              </div>
            </div>

            <div className="cert-right" style={styles.certRight}>
              {/* No inline color prop — CSS class handles default + hover */}
              <ArrowUpRight size={20} className="cert-arrow" style={styles.certArrow} />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const styles = {
  section: {
    padding: '100px 0',
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
    letterSpacing: '-1px',
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(450px, 100%), 1fr))',
    columnGap: '4rem',
    rowGap: '0.5rem',
  },
  certLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  certContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  certTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'var(--text-main)',
    lineHeight: '1.3',
    transition: 'color 0.3s ease',
    letterSpacing: '-0.3px',
  },
  issuer: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    fontWeight: '500',
  },
  certRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  // Transition is here; color is handled by .cert-arrow CSS class
  certArrow: {
    transition: 'color 0.3s, transform 0.3s',
  },
};

export default CertificationsSection;
