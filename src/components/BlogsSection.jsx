import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { blogs } from '../data/blogs';

const BlogsSection = () => (
  <section id="blogs" style={styles.section}>
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.label}>Publications</span>
        <h2 style={styles.title}>
          Medium <span style={styles.outlineText}>Articles</span>
        </h2>
      </div>

      <div style={styles.grid}>
        {blogs.map((blog, i) => (
          <motion.a
            href={blog.link}
            target="_blank"
            rel="noreferrer"
            className="card"
            key={blog.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            style={styles.blogCard}
            aria-label={`Read: ${blog.title}`}
          >
            <div style={styles.metaRow}>
              <span style={styles.metaData}>{blog.date}</span>
              <span style={styles.metaDot} aria-hidden="true" />
              <span style={styles.metaData}>{blog.readTime}</span>
            </div>
            <h3 style={styles.blogTitle}>{blog.title}</h3>
            <p style={styles.snippet}>{blog.snippet}</p>
            <div style={styles.readMore}>
              Read on Medium <BookOpen size={18} aria-hidden="true" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

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
  label: {
    color: 'var(--primary)',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '900',
    marginTop: '0.5rem',
    letterSpacing: '-1px',
  },
  outlineText: {
    color: 'transparent',
    WebkitTextStroke: '1px var(--text-main)',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  blogCard: {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
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
    fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
    textTransform: 'uppercase',
  },
  metaDot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: 'var(--text-muted)',
    display: 'inline-block',
  },
  blogTitle: {
    fontSize: '2rem',
    fontWeight: '800',
    marginBottom: '1rem',
    lineHeight: '1.3',
  },
  snippet: {
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  readMore: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'var(--primary)',
    fontWeight: '600',
    fontSize: '1.05rem',
    transition: 'gap 0.3s ease',
  },
};

export default BlogsSection;
