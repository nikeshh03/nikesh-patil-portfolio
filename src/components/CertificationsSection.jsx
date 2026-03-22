import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, Cloud, Database } from 'lucide-react';

const certifications = [
  {
    icon: <ShieldCheck size={32} color="var(--primary)" />,
    title: 'Building with the Claude API',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    link: '#'
  },
  {
    icon: <Database size={32} color="var(--primary)" />,
    title: 'Model Context Protocol (MCP)',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    link: '#'
  },
  {
    icon: <Award size={32} color="var(--primary)" />,
    title: 'OCI AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'Feb 2026',
    link: '#'
  },
  {
    icon: <Cloud size={32} color="var(--primary)" />,
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    date: 'Aug 2025',
    link: '#'
  },
  {
    icon: <Trophy size={32} color="var(--primary)" />,
    title: 'Data Science, Machine Learning Bootcamp',
    issuer: 'Udemy',
    date: '2025',
    link: '#'
  },
  {
    icon: <Database size={32} color="var(--primary)" />,
    title: 'IBM Data Science Professional',
    issuer: 'IBM',
    date: 'Jan 2025',
    link: '#'
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" style={styles.section}>
      <div style={styles.container}>
         <div style={styles.header}>
          <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Credentials</span>
          <h2 style={styles.title}>
            Certifications & <span className="text-primary">Awards</span>
          </h2>
        </div>

        <div style={styles.grid}>
          {certifications.map((cert, i) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              key={i}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={styles.cardLink}
            >
              <div style={styles.iconWrapper}>{cert.icon}</div>
              <div style={styles.content}>
                <div style={styles.certTitle}>{cert.title}</div>
                <p style={styles.issuer}>{cert.issuer} <span style={styles.dateDot}>•</span> {cert.date}</p>
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
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    letterSpacing: '-1px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  cardLink: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
    textDecoration: 'none',
    color: 'inherit',
    padding: '2.5rem 2rem'
  },
  iconWrapper: {
    padding: '1rem',
    borderRadius: '16px',
    background: 'rgba(0, 230, 118, 0.05)',
    border: '1px solid rgba(0, 230, 118, 0.15)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1
  },
  certTitle: {
    fontSize: '1.15rem',
    marginBottom: '0.4rem',
    lineHeight: '1.4',
    color: '#fff'
  },
  issuer: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'JetBrains Mono'
  },
  dateDot: {
    color: 'var(--border-color)'
  }
};

export default CertificationsSection;
