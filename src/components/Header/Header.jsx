import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

/**
 * Header - Navigation component
 * 
 * This component provides navigation links to different sections of the portfolio.
 * It includes a mobile-responsive menu with smooth scrolling to anchor points.
 * The header becomes sticky on scroll for better user experience.
 * 
 * @param {Object} props - Component props
 * @param {number} props.scrollPosition - Current scroll position for styles
 * @returns {JSX.Element} The header with navigation
 */
function Header({ scrollPosition }) {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Check if scrolled for styling
  const isScrolled = scrollPosition > 10

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Handle smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Close menu if open (mobile)
      setIsMenuOpen(false)
      
      // Scroll to the element with smooth behavior
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }
    
    window.addEventListener('keydown', handleEsc)
    
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo/Name */}
        <div className="header-logo">
          <Link to="/" className="logo-link">
            <span className="logo-highlight">Daniel</span>Gerlach
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <Link to="/" 
            className="nav-item"
            onClick={() => scrollToSection('about')}
          >
            About Me
          </Link>
          <Link to="/" 
            className="nav-item"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </Link>
          <Link to="/" 
            className="nav-item"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-toggle">
          <button
            onClick={toggleMenu}
            className={`menu-button ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
          >
            <span className="menu-icon"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav-container">
          <nav className="mobile-nav">
            <Link to="/" 
              className="mobile-nav-item"
              onClick={() => scrollToSection('about')}
            >
              About Me
            </Link>
            <Link to="/" 
              className="mobile-nav-item"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Link>
            <Link to="/" 
              className="mobile-nav-item"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header