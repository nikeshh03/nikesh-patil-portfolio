# Nikesh Patil — Personal Portfolio

A fast, responsive, and visually polished personal portfolio built with **React + Vite**. Showcasing my journey as an AI/ML Engineer — featuring projects, skills, certifications, work experience, and contact details.

Live at → **[nikesh-patil-portfolio.vercel.app](https://nikesh-patil-portfolio.vercel.app)**

---

## ✨ Features

- **Dark-mode first** — deep black background with a vibrant neon green accent system
- **Smooth animations** — powered by Framer Motion for scroll-triggered reveals and micro-interactions
- **Fully responsive** — mobile-friendly layout with a hamburger menu on small screens
- **Real tech icons** — SimpleIcons CDN + Lucide React for skill and project tag icons
- **Vercel Analytics** — production traffic insights with zero configuration
- **Sections:**
  - Hero — headline and CTA buttons
  - Technical Arsenal — skill categories with icons
  - Current Focus — what I'm learning and building right now
  - My Journey — work experience and education timeline
  - Certifications & Awards — credentials in a clean list layout
  - Featured Projects — project cards with bullet-point breakdowns and tech tags
  - Contact — social links and email CTA

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Animations | Framer Motion |
| Icons | Lucide React + SimpleIcons |
| Analytics | Vercel Analytics |
| Deployment | Vercel |
| Styling | Vanilla CSS (inline + scoped `<style>` blocks) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/nikeshh03/nikesh-patil-portfolio.git
cd nikesh-patil-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Responsive nav with mobile hamburger
│   ├── HeroSection.jsx         # Landing headline + CTA
│   ├── SkillsSection.jsx       # Technical skills with live icons
│   ├── CurrentFocusSection.jsx # Learning & building highlights
│   ├── ExperienceSection.jsx   # Timeline-based work/education history
│   ├── CertificationsSection.jsx # Credential list
│   ├── ProjectsSection.jsx     # Featured projects with tech tags
│   ├── BlogsSection.jsx        # Blog / writing section
│   ├── ContactSection.jsx      # Social links & email CTA
│   └── Footer.jsx
├── index.css                   # Global design tokens & utility classes
├── App.jsx                     # Root component + Analytics
└── main.jsx
```

---

## 🎨 Design System

Defined via CSS custom properties in `index.css`:

| Token | Value | Usage |
|---|---|---|
| `--bg-main` | `#060608` | Page background |
| `--bg-surface` | `#0f1115` | Card backgrounds |
| `--primary` | `#00e676` | Neon green accent |
| `--primary-glow` | `rgba(0,230,118,0.3)` | Glow effects & shadows |
| `--text-muted` | `#8b949e` | Secondary text |
| `--border-color` | `rgba(255,255,255,0.05)` | Subtle borders |

---

## 📊 Analytics

This portfolio uses **Vercel Analytics** for privacy-friendly, real-time traffic insights. Analytics are active only in production deployments — there is no tracking in local development.

---

## 📬 Contact

- **Email** — nikeshmpatil248@gmail.com
- **LinkedIn** — [linkedin.com/in/nikesh-patil](https://linkedin.com/in/nikesh-patil)
- **GitHub** — [github.com/nikeshh03](https://github.com/nikeshh03)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
