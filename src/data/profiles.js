import { Github, Linkedin, Code2, ChefHat } from 'lucide-react';
import XIcon from '../components/shared/XIcon';

/** @type {{ name: string; Icon: any; url: string; stat: string; color: string; size: number }[]} */
export const profiles = [
  { name: 'GitHub',   Icon: Github,   url: 'https://github.com/nikeshh03',              stat: '15+ Repositories', color: 'rgba(255, 255, 255, 1)', size: 48 },
  { name: 'LinkedIn', Icon: Linkedin,  url: 'https://linkedin.com/in/nikesh-patil',      stat: '500+ Connections', color: 'rgba(10, 102, 194, 1)',  size: 48 },
  { name: 'X',        Icon: XIcon,     url: 'https://twitter.com/nikeshh03',             stat: 'Daily Active',     color: 'rgba(255, 255, 255, 1)', size: 40 },
  { name: 'LeetCode', Icon: Code2,     url: 'https://leetcode.com/nikeshh03',            stat: '250+ Solved',      color: 'rgba(255, 161, 22, 1)',  size: 48 },
  { name: 'CodeChef', Icon: ChefHat,   url: 'https://codechef.com/users/nikeshh03',      stat: '3★ Rated',         color: 'rgba(91, 70, 56, 1)',    size: 48 },
];
