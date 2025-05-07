import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import './HomePage.css'

/**
 * HomePage - Main landing page component
 * 
 * This component combines the main sections of the portfolio
 * (About, Projects, Contact) into a single home page view.
 * 
 * @returns {JSX.Element} The homepage component
 */
function HomePage() {
  return (
    <div className="homepage">
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default HomePage