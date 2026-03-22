import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, User, ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Background</span>
          <h2 style={styles.title}>
            My <span className="text-primary">Journey</span>
          </h2>
        </div>

        <div style={styles.content}>
          <motion.div 
            style={styles.aboutBox}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="surface"
          >
            <div style={styles.iconWrapper}><User size={24} /></div>
            <h3 style={styles.boxTitle}>About Me</h3>
            <p style={styles.text}>
              I am an AI/ML Engineer with a profound passion for extracting actionable insights from complex datasets and building intelligent systems. 
              Having recently graduated with a B.Tech in Artificial Intelligence and Machine Learning (Class of 2025), I have hands-on experience in <strong>computer vision</strong>, <strong>RAG-based LLMs</strong>, and end-to-end ML projects.
            </p>
            <p style={styles.text}>
              I am currently seeking an <strong>AI/ML or Data Scientist</strong> role where I can build practical, data-driven intelligent systems and grow as a technical professional.
            </p>
          </motion.div>

          <div style={styles.timeline}>

            {/* Freelance Experience */}
            <motion.div 
              style={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={styles.timelineDot}>
                <User size={16} />
              </div>
              <div style={styles.timelineContent} className="card">
                <span style={styles.date}>Past 6 Months</span>
                <h4 style={styles.role}>Freelance AI Developer</h4>
                <p style={styles.timelineDesc}>
                  Designed and deployed custom machine learning models, automated data pipelines, and intelligent web applications for independent clients.
                </p>
              </div>
            </motion.div>
            
            {/* Bachelor's Degree */}
            <motion.div 
              style={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div style={styles.timelineDot}>
                <GraduationCap size={16} />
              </div>
              <div style={styles.timelineContent} className="card">
                <span style={styles.date}>Dec 2021 - July 2025</span>
                <h4 style={styles.role}>B.Tech in AI and Machine Learning</h4>
                <p style={styles.timelineDesc}>
                  R. C. Patel Institute of Technology, Shirpur
                  <br/>
                  Hands-on experience building machine learning systems and deploying computer vision pipelines.
                </p>
              </div>
            </motion.div>

            {/* High School / General Education */}
            <motion.div 
              style={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div style={styles.timelineDot}>
                <GraduationCap size={16} />
              </div>
              <div style={styles.timelineContent} className="card">
                <span style={styles.date}>2019 - 2021</span>
                <h4 style={styles.role}>Higher Secondary Education</h4>
                <p style={styles.timelineDesc}>
                  Science Stream (PCM) • Excellence Award
                  <br/>
                  Graduated with top percentiles. Built a strong mathematical foundation crucial for algorithms and data science.
                </p>
              </div>
            </motion.div>

          </div>
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
    maxWidth: '1300px',
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
  content: {
    display: 'flex',
    gap: '4rem',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  aboutBox: {
    flex: '1 1 400px',
    padding: '3rem',
    height: 'fit-content'
  },
  iconWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    background: 'rgba(0, 230, 118, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--primary)',
    marginBottom: '1.5rem',
    border: '1px solid rgba(0, 230, 118, 0.2)'
  },
  boxTitle: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    fontWeight: '700'
  },
  text: {
    color: 'var(--text-muted)',
    lineHeight: '1.8',
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  timeline: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    position: 'relative',
    paddingLeft: '2rem',
    borderLeft: '2px solid rgba(255,255,255,0.05)'
  },
  timelineItem: {
    position: 'relative',
  },
  timelineDot: {
    position: 'absolute',
    left: '-40px', /* paddingLeft (2rem=32px) + half dot width */
    top: '20px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'var(--bg-surface)',
    border: '2px solid var(--primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--primary)',
    zIndex: 2,
    boxShadow: '0 0 15px rgba(0,230,118,0.3)'
  },
  timelineContent: {
    padding: '2rem',
  },
  date: {
    color: 'var(--primary)',
    fontSize: '0.85rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    display: 'block',
    marginBottom: '0.5rem'
  },
  role: {
    fontSize: '1.4rem',
    fontWeight: '700',
    marginBottom: '1rem'
  },
  timelineDesc: {
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    fontSize: '1rem'
  }
};

export default ExperienceSection;
