import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <motion.div 
          style={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card"
        >
          <div style={styles.leftCol}>
            <h2 style={styles.title}>Let's build intelligence together.</h2>
            <p style={styles.subtitle}>
              Whether you need scalable machine learning web applications or looking to add a passionate Data Scientist to your team, I am ready to collaborate.
            </p>
            
            <div style={styles.socialsRow}>
              <a href="#" style={styles.socialIcon}><Github size={24} /></a>
              <a href="#" style={styles.socialIcon}><Linkedin size={24} /></a>
              <a href="#" style={styles.socialIcon}><Twitter size={24} /></a>
              <a href="mailto:nikeshmpatil248@gmail.com" style={styles.socialIcon}><Mail size={24} /></a>
            </div>
          </div>

          <div style={styles.rightCol}>
            <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" style={styles.input} />
              <input type="email" placeholder="Email Address" style={styles.input} />
              <textarea placeholder="Tell me about your project or opportunity..." style={styles.textarea} rows={4}></textarea>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', fontSize: '1.1rem', padding: '1rem' }}>
                Send Message
              </button>
            </form>
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
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    marginBottom: '100px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '4rem',
    padding: '4rem',
    background: 'linear-gradient(135deg, rgba(20,22,28,0.8) 0%, rgba(0,230,118,0.05) 100%)',
    border: '1px solid rgba(0,230,118,0.2)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(0,230,118,0.05)'
  },
  leftCol: {
    flex: '1 1 400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '800',
    lineHeight: '1.1',
    letterSpacing: '-1px',
    marginBottom: '1.5rem',
  },
  subtitle: {
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    marginBottom: '3rem',
  },
  socialsRow: {
    display: 'flex',
    gap: '1.5rem',
  },
  socialIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255,255,255,0.1)',
    transition: 'all 0.3s ease',
  },
  rightCol: {
    flex: '1 1 400px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  input: {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '1.2rem',
    color: 'var(--text-main)',
    fontFamily: 'Outfit',
    fontSize: '1.05rem',
    outline: 'none',
    transition: 'border-color 0.3s'
  },
  textarea: {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '1.2rem',
    color: 'var(--text-main)',
    fontFamily: 'Outfit',
    fontSize: '1.05rem',
    outline: 'none',
    resize: 'vertical',
    transition: 'border-color 0.3s'
  }
};

export default ContactSection;
