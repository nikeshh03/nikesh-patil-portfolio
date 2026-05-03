import { motion } from 'framer-motion';
import SkillIcon from './shared/SkillIcon';
import { skillsData } from '../data/skills';
import './SkillsSection.css';

const SkillsSection = () => (
  <section id="skills" style={styles.section}>
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.label}>Expertise</span>
        <h2 style={styles.title}>
          Technical <span style={styles.outlineText}>Arsenal</span>
        </h2>
      </div>

      <div style={styles.listContainer}>
        {skillsData.map((group, idx) => (
          <motion.div
            key={group.category}
            className="skill-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="category-info">
              <h3 className="category-title">{group.category}</h3>
              <p className="category-desc">{group.desc}</p>
            </div>

            <div className="skills-list">
              {group.items.map((item) => (
                <motion.div
                  key={item}
                  className="skill-pill"
                  whileHover={{ scale: 1.02 }}
                >
                  <SkillIcon name={item} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: 'var(--bg-main)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    marginBottom: '3rem',
  },
  label: {
    color: 'var(--primary)',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
  },
  title: {
    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
    letterSpacing: '-1px',
    marginTop: '0.5rem',
  },
  outlineText: {
    color: 'transparent',
    WebkitTextStroke: '1px var(--text-main)',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default SkillsSection;
