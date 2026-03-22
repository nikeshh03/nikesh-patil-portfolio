import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "John consistently delivered high-quality NLP models for our platform. His ability to understand business needs and translate them into robust python code is unmatched.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow AI",
    company: "(Freelance Client)"
  },
  {
    text: "Working with John was a breeze. He refactored our entire data pipeline, cutting down our AWS costs by 40%. A truly brilliant engineer.",
    author: "David Chang",
    role: "Head of Engineering",
    company: "(Freelance Client)"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Testimonials</span>
          <h2 style={styles.title}>
            Client <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-main)' }}>Feedback</span>
          </h2>
        </div>

        <div style={styles.grid}>
          {testimonials.map((item, i) => (
            <motion.div 
              style={styles.card}
              className="surface"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Quote size={40} color="var(--primary)" style={{ opacity: 0.2, position: 'absolute', top: '2rem', left: '2rem' }} />
              <p style={styles.quoteText}>"{item.text}"</p>
              
              <div style={styles.authorSection}>
                <div style={styles.avatar}></div>
                <div>
                  <h4 style={styles.author}>{item.author}</h4>
                  <p style={styles.role}>{item.role} <span style={{color: 'var(--text-muted)'}}>{item.company}</span></p>
                </div>
              </div>
            </motion.div>
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
    fontWeight: '900',
    marginTop: '0.5rem',
    letterSpacing: '-1px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
  },
  card: {
    padding: '3rem',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '280px',
  },
  quoteText: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#e5e7eb',
    fontStyle: 'italic',
    marginBottom: '2rem',
    position: 'relative',
    zIndex: 2,
    marginTop: '1.5rem'
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    paddingTop: '1.5rem'
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--bg-surface) 0%, rgba(0, 230, 118, 0.2) 100%)',
    border: '2px solid var(--border-color)'
  },
  author: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '0.2rem'
  },
  role: {
    fontSize: '0.9rem',
    color: 'var(--primary)',
    fontFamily: 'JetBrains Mono'
  }
};

export default TestimonialsSection;
