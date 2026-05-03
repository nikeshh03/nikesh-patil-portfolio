import { BrainCircuit, Bot, Code2, Layers } from 'lucide-react';

/**
 * Real project categories.
 * Each project must have a stable `id` for use as a React key.
 */
const baseCategories = [
  {
    id: 'ml',
    label: 'Data Science & ML',
    icon: BrainCircuit,
    description: 'Classical machine learning, deep learning, CNNs, and predictive analytics projects.',
    accent: '#00e676',
    projects: [
      {
        id: 'hr-decision-engine',
        title: 'HR Decision Engine',
        description: 'An advanced predictive analytics system for enterprise workforce management.',
        features: [
          'Engineered an attrition prediction model achieving 85% accuracy.',
          'Developed interactive dashboard for real-time HR insights.',
          'Optimized robust data pipelines using Pandas and NumPy.',
        ],
        tags: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
        metric: '85% Accuracy',
        link: 'https://github.com/nikeshh03',
      },
      {
        id: 'face-recognition',
        title: 'Real-Time Face Recognition',
        description: 'A high-performance computer vision pipeline for identity verification.',
        features: [
          'Implemented YOLOv8 for rapid object detection and localization.',
          'Achieved 20-25 FPS real-time processing on standard CPU hardware.',
          'Integrated vector similarity matching for facial embeddings.',
        ],
        tags: ['YOLOv8', 'OpenCV', 'Computer Vision'],
        metric: '20-25 FPS',
        link: 'https://github.com/nikeshh03',
      },
    ],
  },
  {
    id: 'agents',
    label: 'AI Agents & RAG',
    icon: Bot,
    description: 'Autonomous AI agents, retrieval-augmented generation pipelines, and LLM-powered systems.',
    accent: '#818cf8',
    projects: [
      {
        id: 'rag-paper-analyzer',
        title: 'RAG Research Paper Analyzer',
        description: 'An intelligent document assistant designed to eliminate AI hallucinations during research.',
        features: [
          'Built a robust QA system utilizing Retrieval-Augmented Generation.',
          'Integrated HuggingFace embeddings with FAISS for rapid vector search.',
          'Containerized and deployed as a lightweight standalone web application.',
        ],
        tags: ['LLMs', 'RAG', 'HuggingFace', 'FAISS'],
        metric: 'Zero Hallucinations',
        link: 'https://github.com/nikeshh03',
      },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full Stack',
    icon: Code2,
    description: 'End-to-end web applications, APIs, and modern full-stack vibe-coded builds.',
    accent: '#38bdf8',
    projects: [],
  },
];

/**
 * Virtual "All" category — derived at module load time from baseCategories.
 * Each project carries its source category's accent so cards can be colored correctly.
 */
const allCategory = {
  id: 'all',
  label: 'All Projects',
  icon: Layers,
  description: 'Every project across all categories — ML, AI agents, and full-stack builds.',
  accent: '#ffffff',
  projects: baseCategories.flatMap((cat) =>
    cat.projects.map((project) => ({ ...project, accent: cat.accent }))
  ),
};

/** Full ordered list: All tab first, then real categories. */
export const categories = [allCategory, ...baseCategories];
