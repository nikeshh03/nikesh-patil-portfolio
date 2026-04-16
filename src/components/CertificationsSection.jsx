import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, Cloud, Database, ArrowUpRight } from 'lucide-react';

const certifications = [
  {
    Icon: ShieldCheck,
    title: 'Building with the Claude API',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    link: 'https://anthropic.com'
  },
  {
    Icon: Database,
    title: 'Model Context Protocol (MCP)',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    link: 'https://anthropic.com'
  },
  {
    Icon: Award,
    title: 'OCI AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'Feb 2026',
    link: 'https://catalog-education.oracle.com'
  },
  {
    Icon: Cloud,
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    date: 'Aug 2025',
    link: 'https://aws.amazon.com/training'
  },
  {
    Icon: Trophy,
    title: 'Data Science, Machine Learning Bootcamp',
    issuer: 'Udemy',
    date: '2025',
    link: 'https://udemy.com'
  },
  {
    Icon: Database,
    title: 'IBM Data Science Professional',
    issuer: 'IBM',
    date: 'Jan 2025',
    link: 'https://www.credly.com'
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" style={styles.section}>
      <style>{`
        .cert-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          border-radius: 12px;
        }
        .cert-row:hover {
          background-color: rgba(255, 255, 255, 0.02);
        }
        .cert-row:hover .cert-title {
          color: var(--primary);
        }
        .cert-row:hover .cert-arrow {
          color: var(--primary) !important;
          transform: translate(2px, -2px);
        }
        .cert-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-muted);
          transition: all 0.3s ease;
        }
        .cert-row:hover .cert-icon-wrapper {
          background: rgba(0, 230, 118, 0.1);
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .cert-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
            padding: 1.5rem;
          }
          .cert-right {
            width: 100%;
            justify-content: space-between;
            align-items: center;
            flex-direction: row-reverse;
          }
        }
      `}</style>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Credentials</span>
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
              key={cert.title}
              className="cert-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              aria-label={`View ${cert.title} credential`}
            >
              <div style={styles.certLeft}>
                <div className="cert-icon-wrapper">
                  <cert.Icon size={24} />
                </div>
                <div style={styles.content}>
                  <div className="cert-title" style={styles.certTitle}>{cert.title}</div>
                  <p style={styles.issuer}>{cert.issuer}</p>
                </div>
              </div>
              <div className="cert-right" style={styles.certRight}>
                <ArrowUpRight size={20} className="cert-arrow" color="var(--text-muted)" style={{ transition: 'all 0.3s' }} />
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
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  certTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#fff',
    lineHeight: '1.3',
    transition: 'color 0.3s ease',
    letterSpacing: '-0.3px',
  },
  issuer: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontWeight: '500',
  },
  certRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  date: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    fontWeight: '500',
  }
};

export default CertificationsSection;
