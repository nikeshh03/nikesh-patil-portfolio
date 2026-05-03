import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderOpen, ArrowUpRight } from 'lucide-react';
import SkillIcon from './shared/SkillIcon';
import { categories } from '../data/projects';
import { FONT_SANS } from '../constants/tokens';
import './ProjectsSection.css';

// ── Sub-components ─────────────────────────────────────────────────────────────

/**
 * ProjectCard — renders a single project card.
 * `accent` may come from the category OR from project.accent (when in "All" tab).
 */
const ProjectCard = ({ project, accent, index }) => {
  const resolvedAccent = project.accent ?? accent;

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="card project-card-ref"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      aria-label={`View ${project.title} on GitHub`}
    >
      <div style={styles.cardHeader}>
        <h3 style={styles.projectTitle}>{project.title}</h3>
        <ArrowUpRight className="proj-arrow-icon" size={20} aria-hidden="true" />
      </div>

      <div style={styles.descriptionContainer}>
        <p style={styles.description}>{project.description}</p>
        {project.features && (
          <ul style={styles.featuresList}>
            {project.features.map((feature) => (
              <li key={feature} style={styles.featureItem}>
                <span style={{ ...styles.bullet, color: resolvedAccent }} aria-hidden="true">▹</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="project-footer">
        <div style={styles.tagsContainer}>
          {project.tags.map((tag) => (
            <span key={tag} style={styles.tag}>
              <SkillIcon name={tag} imgSize={14} />
              {tag}
            </span>
          ))}
        </div>
        <div style={{ ...styles.metric, color: resolvedAccent }}>{project.metric}</div>
      </div>
    </motion.a>
  );
};

/** EmptyState — shown when a category has no projects yet. */
const EmptyState = ({ accent, tabId }) => (
  <motion.div
    key={`empty-${tabId}`}
    style={styles.emptyState}
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.97 }}
    transition={{ duration: 0.3 }}
  >
    <div
      className="empty-state-icon-wrap"
      style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
    >
      <FolderOpen size={32} style={{ color: accent }} aria-hidden="true" />
    </div>
    <p style={styles.emptyTitle}>Coming Soon</p>
    <p style={styles.emptySubtitle}>Projects in this category are on the way. Check back soon!</p>
  </motion.div>
);

// ── Main Component ─────────────────────────────────────────────────────────────

const ProjectsSection = () => {
  // Default to the "All" tab so visitors immediately see all work
  const [activeTab, setActiveTab] = useState('all');

  // Fallback to first category if activeTab ever goes stale (e.g. data changes)
  const activeCategory = useMemo(
    () => categories.find((c) => c.id === activeTab) ?? categories[0],
    [activeTab]
  );

  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>

        {/* ── Header ── */}
        <div style={styles.header}>
          <motion.h2
            className="section-title"
            style={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <motion.p
            style={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A curated collection of things I&apos;ve built — from trained models to shipped products.
          </motion.p>
        </div>

        {/* ── Tab Bar ── */}
        <motion.div
          className="proj-tab-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                id={`proj-tab-${cat.id}`}
                className={`proj-tab-btn${isActive ? ' active' : ''}`}
                style={isActive ? {
                  background: cat.accent,
                  color: '#000',
                  boxShadow: `0 0 18px ${cat.accent}55`,
                } : undefined}
                onClick={() => setActiveTab(cat.id)}
                aria-selected={isActive}
                aria-controls={`proj-panel-${cat.id}`}
                role="tab"
              >
                <Icon size={15} aria-hidden="true" />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* ── Category description ── */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${activeTab}`}
            style={styles.categoryDesc}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            {activeCategory.description}
          </motion.p>
        </AnimatePresence>

        {/* ── Accent divider ── */}
        <div
          style={{
            ...styles.divider,
            background: `linear-gradient(90deg, ${activeCategory.accent}55 0%, transparent 100%)`,
          }}
        />

        {/* ── Projects grid / empty state ── */}
        <AnimatePresence mode="wait">
          {activeCategory.projects.length === 0 ? (
            <EmptyState accent={activeCategory.accent} tabId={activeTab} />
          ) : (
            <motion.div
              key={`grid-${activeTab}`}
              id={`proj-panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`proj-tab-${activeTab}`}
              style={styles.grid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeCategory.projects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  accent={activeCategory.accent}
                  index={i}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

// ── Styles ─────────────────────────────────────────────────────────────────────

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: 'var(--bg-main)',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    marginBottom: '2.5rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--primary)',
    letterSpacing: '-0.5px',
    marginBottom: '0.6rem',
  },
  subtitle: {
    color: 'var(--text-muted)',
    fontSize: '1.05rem',
    lineHeight: '1.6',
    maxWidth: '520px',
  },
  categoryDesc: {
    color: 'var(--text-muted)',
    fontSize: '0.92rem',
    lineHeight: '1.6',
    marginBottom: '1.2rem',
  },
  divider: {
    height: '1px',
    borderRadius: '2px',
    marginBottom: '2.5rem',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  emptyState: {
    textAlign: 'center',
    padding: '4rem 2rem',
    border: '1px dashed rgba(255,255,255,0.08)',
    borderRadius: '24px',
    background: 'rgba(255,255,255,0.02)',
  },
  emptyTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: 'var(--text-main)',
    marginBottom: '0.5rem',
  },
  emptySubtitle: {
    color: 'var(--text-muted)',
    fontSize: '0.92rem',
    maxWidth: '320px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.2rem',
  },
  projectTitle: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: 'var(--text-main)',
    letterSpacing: '-0.3px',
    lineHeight: '1.2',
  },
  descriptionContainer: {
    marginBottom: '2rem',
  },
  description: {
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
    maxWidth: '92%',
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  featureItem: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.8rem',
    lineHeight: '1.5',
  },
  bullet: {
    fontWeight: 'bold',
    marginTop: '2px',
    flexShrink: 0,
  },
  tagsContainer: {
    display: 'flex',
    gap: '0.8rem',
    flexWrap: 'wrap',
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.4rem 0.8rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '6px',
    fontSize: '0.85rem',
    color: '#e5e7eb',
    fontWeight: '500',
    fontFamily: FONT_SANS,
  },
  metric: {
    fontSize: '0.95rem',
    fontWeight: '500',
    fontFamily: FONT_SANS,
  },
};

export default ProjectsSection;
