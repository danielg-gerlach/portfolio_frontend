import { Link } from 'react-router-dom'
import './Footer.css'

/**
 * Footer - Footer component
 * 
 * This component provides a simple footer with copyright information
 * and additional links if needed.
 * 
 * @returns {JSX.Element} The footer component
 */
function Footer() {
  // Get current year for copyright
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          {/* Copyright */}
          <div className="copyright">
            <p>
              &copy; {currentYear} Daniel Gerlach. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Built with info */}
        
      </div>
    </footer>
  )
}

export default Footer