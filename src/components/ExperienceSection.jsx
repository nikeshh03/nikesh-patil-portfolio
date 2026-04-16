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
            className="card"
          >
            <div style={styles.iconWrapper}><User size={24} /></div>
            <h3 style={styles.boxTitle}>About Me</h3>
            <ul style={styles.bulletList}>
              <li><strong>AI/ML Engineer</strong> passionate about extracting actionable insights from complex datasets to build scalable intelligent systems.</li>
              <li>B.Tech in <strong>Artificial Intelligence and Machine Learning</strong> (Class of 2025).</li>
              <li>Hands-on experience developing <strong>computer vision</strong> pipelines, <strong>RAG-based LLMs</strong>, and end-to-end Machine Learning products.</li>
              <li>Currently seeking an <strong>AI/ML or Data Scientist</strong> role to engineer practical, data-driven solutions and continue growing as a technical professional.</li>
            </ul>
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
                <span style={styles.date}>March 2025 - Present</span>
                <h4 style={styles.role}>Freelance AI Developer</h4>
                <ul style={styles.bulletList}>
                  <li>Designed and deployed custom machine learning models for independent clients.</li>
                  <li>Automated complex data pipelines to streamline client workflows and enhance data visibility.</li>
                  <li>Engineered and maintained intelligent web applications integrating bleeding-edge AI APIs.</li>
                </ul>
              </div>
            </motion.div>

            {/* Data Science Intern */}
            <motion.div 
              style={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div style={styles.timelineDot}>
                <User size={16} />
              </div>
              <div style={styles.timelineContent} className="card">
                <span style={styles.date}>Feb 2026 - Present</span>
                <h4 style={styles.role}>Data Science Intern</h4>
                <ul style={styles.bulletList}>
                  <li>Designed and implemented a scalable <strong>Product Recommendation System</strong> from the ground up.</li>
                  <li>Leveraged collaborative filtering and content-based approaches to personalize user experiences.</li>
                  <li>Optimized overall user engagement and key platform metrics.</li>
                </ul>
              </div>
            </motion.div>
            
            {/* Bachelor's Degree */}
            <motion.div 
              style={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
    maxWidth: '1400px',
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
    gap: '5rem',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch'
  },
  aboutBox: {
    flex: '1 1 400px',
    padding: '3rem',
    height: 'auto',
    alignSelf: 'flex-start'
  },
  iconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: 'rgba(0, 230, 118, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--primary)',
    marginBottom: '2rem',
    border: '1px solid rgba(0, 230, 118, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 230, 118, 0.1)'
  },
  boxTitle: {
    fontSize: '2rem',
    marginBottom: '1.2rem',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    color: '#ffffff'
  },
  text: {
    color: 'var(--text-muted)',
    lineHeight: '1.8',
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
  },
  bulletList: {
    paddingLeft: '1.4rem',
    color: 'var(--text-muted)',
    lineHeight: '1.8',
    fontSize: '1.05rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    listStyleType: 'disc'
  },
  timeline: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    position: 'relative',
    paddingLeft: '3rem',
    borderLeft: '2px solid rgba(255,255,255,0.05)'
  },
  timelineItem: {
    position: 'relative',
  },
  timelineDot: {
    position: 'absolute',
    left: '-67px',
    top: '32px',
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
    padding: '2rem 2.5rem',
  },
  date: {
    color: 'var(--primary)',
    fontSize: '0.9rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    display: 'block',
    marginBottom: '0.5rem'
  },
  role: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    letterSpacing: '-0.01em',
    color: '#fff'
  },
  timelineDesc: {
    color: 'var(--text-muted)',
    lineHeight: '1.7',
    fontSize: '1.05rem'
  }
};

export default ExperienceSection;
