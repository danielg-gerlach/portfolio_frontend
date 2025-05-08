// src/components/HomePage/HomePage.jsx
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import ResumeDownload from '../ResumeDownload/ResumeDownload'
import BlogSection from '../BlogSection/BlogSection'
import Certifications from '../Certifications/Certifications'
import './HomePage.css'

/**
 * HomePage - Main landing page component
 * 
 * This component combines all sections of the portfolio
 * into a single home page view.
 * 
 * @returns {JSX.Element} The homepage component
 */
function HomePage() {
  return (
    <div className="homepage">
      <AboutMe />
      <Projects />
      <Certifications />
      <BlogSection />
      <ResumeDownload />
    </div>
  )
}

export default HomePage