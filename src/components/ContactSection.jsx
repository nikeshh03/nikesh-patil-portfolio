import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import XIcon from './shared/XIcon';
import './ContactSection.css';

const SOCIAL_LINKS = [
  { href: 'https://github.com/nikeshh03',                 Icon: Github,   label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/nikeshpatil/',     Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/nikeshh03',                Icon: XIcon,    label: 'X / Twitter' },
];

const HOVER_STYLE = {
  y: -4,
  borderColor: 'var(--primary)',
  color: 'var(--primary)',
  backgroundColor: 'rgba(0,230,118,0.05)',
};

const ContactSection = () => (
  <section id="contact" style={styles.section}>
    <div style={styles.container}>
      <motion.div
        style={styles.content}
        className="card contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div style={styles.ctaWrapper}>
          <h2 style={styles.title}>Let&apos;s build together.</h2>
          <p style={styles.subtitle}>
            Whether you need scalable machine learning web applications or are looking to add a
            passionate Data Scientist to your team, I am ready to collaborate.
          </p>

          <div className="contact-socials" style={styles.socialsRow}>
            {SOCIAL_LINKS.map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={styles.socialIcon}
                aria-label={label}
                whileHover={HOVER_STYLE}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} aria-hidden="true" />
              </motion.a>
            ))}

            <a
              href="mailto:nikeshmpatil248@gmail.com"
              className="btn btn-primary"
              style={styles.emailBtn}
            >
              <Mail size={20} aria-hidden="true" /> Drop an Email
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const styles = {
  section: {
    // marginBottom moved here from container — section controls outer spacing
    padding: '100px 0 100px 0',
    backgroundColor: 'var(--bg-main)',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  content: {
    padding: '5rem 3rem',
    background: 'linear-gradient(135deg, rgba(20,22,28,0.8) 0%, rgba(0,230,118,0.05) 100%)',
    border: '1px solid rgba(0,230,118,0.2)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(0,230,118,0.05)',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  ctaWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '750px',
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
    flexWrap: 'wrap',
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
    textDecoration: 'none',
  },
};

export default ContactSection;
