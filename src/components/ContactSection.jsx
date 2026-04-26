import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import XIcon from './shared/XIcon';

const ContactSection = () => {
  return (
    <section id="contact" style={styles.section}>
      <style>{`
        @media (max-width: 768px) {
          .contact-content { padding: 2.5rem 1.5rem !important; }
          .contact-socials { flex-direction: column !important; align-items: stretch !important; }
          .contact-socials a { justify-content: center; }
        }
      `}</style>
      <div style={styles.container}>
        <motion.div
          style={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card contact-content"
        >
          <div style={styles.ctaWrapper}>
            <h2 style={styles.title}>Let's build together.</h2>
            <p style={styles.subtitle}>
              Whether you need scalable machine learning web applications or are looking to add a passionate Data Scientist to your team, I am ready to collaborate.
            </p>

            <div className="contact-socials" style={styles.socialsRow}>
              <motion.a
                href="https://github.com/nikeshh03"
                target="_blank"
                rel="noreferrer"
                style={styles.socialIcon}
                aria-label="GitHub"
                whileHover={{ y: -4, borderColor: 'var(--primary)', color: 'var(--primary)', backgroundColor: 'rgba(0,230,118,0.05)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/nikeshpatil/"
                target="_blank"
                rel="noreferrer"
                style={styles.socialIcon}
                aria-label="LinkedIn"
                whileHover={{ y: -4, borderColor: 'var(--primary)', color: 'var(--primary)', backgroundColor: 'rgba(0,230,118,0.05)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com/nikeshh03"
                target="_blank"
                rel="noreferrer"
                style={styles.socialIcon}
                aria-label="X / Twitter"
                whileHover={{ y: -4, borderColor: 'var(--primary)', color: 'var(--primary)', backgroundColor: 'rgba(0,230,118,0.05)' }}
                whileTap={{ scale: 0.95 }}
              >
                <XIcon size={24} />
              </motion.a>
              <a
                href="mailto:nikeshmpatil248@gmail.com"
                className="btn btn-primary"
                style={styles.emailBtn}
              >
                <Mail size={20} /> Drop an Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 0 0 0',
    backgroundColor: 'var(--bg-main)',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 2rem',
    marginBottom: '100px',
  },
  content: {
    padding: '5rem 3rem',
    background: 'linear-gradient(135deg, rgba(20,22,28,0.8) 0%, rgba(0,230,118,0.05) 100%)',
    border: '1px solid rgba(0,230,118,0.2)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(0,230,118,0.05)',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  ctaWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '750px'
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '800',
    lineHeight: '1.2',
    letterSpacing: '-1px',
    marginBottom: '1.5rem',
  },
  subtitle: {
    color: 'var(--text-muted)',
    fontSize: '1.15rem',
    lineHeight: '1.7',
    marginBottom: '3rem',
  },
  socialsRow: {
    display: 'flex',
    gap: '1.2rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  socialIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff',
    transition: 'all 0.3s ease',
  },
  emailBtn: {
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 2.5rem',
    gap: '10px',
    fontSize: '1.1rem',
    fontWeight: '600',
    textDecoration: 'none'
  }
};

export default ContactSection;
