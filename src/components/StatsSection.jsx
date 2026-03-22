import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, Brain } from 'lucide-react';

const StatsSection = () => {
  const features = [
    {
      icon: <Network size={36} color="var(--primary)" strokeWidth={1.5} />,
      title: 'Scalable Models',
      desc: 'Architecting and deploying machine learning pipelines that scale to millions of requests seamlessly.'
    },
    {
      icon: <Database size={36} color="var(--primary)" strokeWidth={1.5} />,
      title: 'Data Engineering',
      desc: 'Building robust ETL workflows and optimizing large-scale data lakes for high-performance retrieval.'
    },
    {
      icon: <Brain size={36} color="var(--primary)" strokeWidth={1.5} />,
      title: 'Generative AI',
      desc: 'Integrating LLMs, fine-tuning foundation models, and crafting custom intelligent conversational agents.'
    }
  ];

  return (
    <section id="experience" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Features</span>
          <h2 style={styles.title}>
            Architect the future with <span className="text-primary">AI</span>
          </h2>
        </div>

        <div style={styles.cardsGrid}>
          {features.map((feature, i) => (
            <motion.div 
              className="card" 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div style={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 style={styles.cardTitle}>{feature.title}</h3>
              <p style={styles.cardDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div style={styles.statsRow}>
          {[
            { value: '30+', label: 'Models Deployed' },
            { value: '25M+', label: 'Data Points' },
            { value: '$40k+', label: 'Cloud Costs Saved' },
            { value: '99.9%', label: 'Uptime' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              style={styles.statBox}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
            >
              <h4 style={styles.statValue}>{stat.value}</h4>
              <p style={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '120px 0',
    background: 'radial-gradient(circle at center, rgba(0,230,118,0.03) 0%, transparent 70%)',
    position: 'relative'
  },
  container: {
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '5rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '700',
    marginTop: '1rem',
    letterSpacing: '-1px'
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
    marginBottom: '6rem'
  },
  iconWrapper: {
    marginBottom: '2rem',
    display: 'inline-block',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    fontWeight: '600'
  },
  cardDesc: {
    color: 'var(--text-muted)',
    fontSize: '1.05rem',
    lineHeight: '1.6'
  },
  statsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '2rem',
    padding: '3rem 0',
    borderTop: '1px solid var(--border-color)',
    borderBottom: '1px solid var(--border-color)',
  },
  statBox: {
    textAlign: 'center',
    minWidth: '150px'
  },
  statValue: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '0.5rem',
    letterSpacing: '-1px'
  },
  statLabel: {
    color: 'var(--primary)',
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }
};

export default StatsSection;
