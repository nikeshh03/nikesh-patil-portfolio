import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import CurrentFocusSection from './components/CurrentFocusSection'
import ExperienceSection from './components/ExperienceSection'
import CertificationsSection from './components/CertificationsSection'
import ProjectsSection from './components/ProjectsSection'
import BlogsSection from './components/BlogsSection'
import ProfilesSection from './components/ProfilesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <CurrentFocusSection />
        <ExperienceSection />
        <CertificationsSection />
        <ProjectsSection />
        <BlogsSection />
        <ProfilesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
