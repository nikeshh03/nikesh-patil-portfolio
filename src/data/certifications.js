import { Award, ShieldCheck, Trophy, Cloud, Database } from 'lucide-react';

/** @type {{ id: string; Icon: import('lucide-react').LucideIcon; title: string; issuer: string; date: string; link: string }[]} */
export const certifications = [
  {
    id: 'anthropic-claude-api',
    Icon: ShieldCheck,
    title: 'Building with the Claude API',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    link: 'https://anthropic.com',
  },
  {
    id: 'anthropic-mcp',
    Icon: Database,
    title: 'Model Context Protocol (MCP)',
    issuer: 'Anthropic',
    date: 'Mar 2026',
    link: 'https://anthropic.com',
  },
  {
    id: 'oracle-oci-ai',
    Icon: Award,
    title: 'OCI AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'Feb 2026',
    link: 'https://catalog-education.oracle.com',
  },
  {
    id: 'aws-cloud-foundations',
    Icon: Cloud,
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy',
    date: 'Aug 2025',
    link: 'https://aws.amazon.com/training',
  },
  {
    id: 'udemy-ds-ml-bootcamp',
    Icon: Trophy,
    title: 'Data Science, Machine Learning Bootcamp',
    issuer: 'Udemy',
    date: '2025',
    link: 'https://udemy.com',
  },
  {
    id: 'ibm-data-science-pro',
    Icon: Database,
    title: 'IBM Data Science Professional',
    issuer: 'IBM',
    date: 'Jan 2025',
    link: 'https://www.credly.com',
  },
];
