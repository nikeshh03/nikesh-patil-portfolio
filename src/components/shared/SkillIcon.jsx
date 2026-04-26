/**
 * Shared SkillIcon component.
 * Renders a branded icon from simpleicons.org CDN when available,
 * falls back to a Lucide icon from the provided map, or Cpu as last resort.
 *
 * Used by: SkillsSection, ProjectsSection
 */
import {
  Database, LineChart, Cpu, Network,
  FileSearch, Camera, Settings, Braces,
  BrainCircuit, LayoutGrid, Eye
} from 'lucide-react';

/** Maps skill names to simpleicons.org slug */
export const simpleIconsMap = {
  'Python':       'python',
  'NumPy':        'numpy',
  'Pandas':       'pandas',
  'OpenCV':       'opencv',
  'Scikit-learn': 'scikitlearn',
  'TensorFlow':   'tensorflow',
  'Keras':        'keras',
  'PyTorch':      'pytorch',
  'HuggingFace':  'huggingface',
  'LangChain':    'langchain',
  'Streamlit':    'streamlit',
  'AWS':          'amazonaws',
  'PostgreSQL':   'postgresql',
  'Git':          'git',
  'Databricks':   'databricks',
};

/** Maps skill names to Lucide icon components (for skills with no simple icon) */
export const lucideIconsMap = {
  'SQL':              Database,
  'EDA':              LineChart,
  'Feature Eng.':    Settings,
  'YOLOv8':          Camera,
  'Computer Vision': Eye,
  'Model Training':  Cpu,
  'Cross-Validation':Network,
  'RAG':             FileSearch,
  'NLTK':            Braces,
  'Vector Search':   Database,
  'LLMs':            BrainCircuit,
  'MLflow':          LayoutGrid,
  'Matplotlib':      LineChart,
  'FAISS':           Database,
};

/**
 * @param {{ name: string, imgSize?: number }} props
 * imgSize defaults to 20 — pass 14 for the compact project tag pill.
 */
const SkillIcon = ({ name, imgSize = 20 }) => {
  if (simpleIconsMap[name]) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${simpleIconsMap[name]}/00e676`}
        alt={`${name} icon`}
        width={imgSize}
        height={imgSize}
        loading="lazy"
        className="skill-logo"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    );
  }
  const LucideIcon = lucideIconsMap[name] || Cpu;
  return <LucideIcon className="skill-logo-svg" aria-hidden="true" />;
};

export default SkillIcon;
