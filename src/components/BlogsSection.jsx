import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const blogs = [
  {
    title: 'Mastering RAG with Llama-3: A Practical Guide',
    date: 'Oct 12, 2023',
    readTime: '6 min read',
    snippet: 'Retrieval-Augmented Generation is transforming how we interact with LLMs. In this post, I break down how to implement a production-ready RAG pipeline using Llama-3 and vector databases from scratch...',
    link: '#'
  },
  {
    title: 'Deploying Scalable Machine Learning Models on AWS',
    date: 'Nov 05, 2023',
    readTime: '8 min read',
    snippet: 'Taking a model from a Jupiter notebook to a scalable API can be daunting. I share my architectural blueprint for deploying PyTorch models using AWS SageMaker, Lambda, and API Gateway for zero-downtime inference...',
    link: '#'
  }
];

const BlogsSection = () => {
  return (
    <section id="blogs" style={styles.section}>
      <div style={styles.container}>
         <div style={styles.header}>
          <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Publications</span>
          <h2 style={styles.title}>
            Medium <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-main)' }}>Articles</span>
          </h2>
        </div>

        <div style={styles.grid}>
          {blogs.map((blog, i) => (
            <motion.a 
              href={blog.link}
              className="card" 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              style={styles.blogCard}
            >
              <div style={styles.metaRow}>
                <span style={styles.metaData}>{blog.date}</span>
                <span style={styles.metaDot}></span>
                <span style={styles.metaData}>{blog.readTime}</span>
              </div>
              <h3 style={styles.blogTitle}>{blog.title}</h3>
              <p style={styles.snippet}>{blog.snippet}</p>
              
              <div style={styles.readMore}>
                Read on Medium <BookOpen size={18} />
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
    padding: '120px 0',
    backgroundColor: 'var(--bg-main)',
  },
  container: {
    maxWidth: '1000px',
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
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  blogCard: {
    display: 'block',
    textDecoration: 'none',
    padding: '3rem',
    color: 'inherit',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '1rem',
  },
  metaData: {
    color: 'var(--primary)',
    fontSize: '0.9rem',
    fontWeight: '600',
    fontFamily: 'JetBrains Mono',
    textTransform: 'uppercase',
  },
  metaDot: {
    width: '4px', height: '4px',
    borderRadius: '50%',
    backgroundColor: 'var(--text-muted)'
  },
  blogTitle: {
    fontSize: '2rem',
    fontWeight: '800',
    marginBottom: '1rem',
    lineHeight: '1.3'
  },
  snippet: {
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    marginBottom: '2rem'
  },
  readMore: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'var(--primary)',
    fontWeight: '600',
    fontSize: '1.05rem',
    transition: 'gap 0.3s ease',
  }
};

export default BlogsSection;
