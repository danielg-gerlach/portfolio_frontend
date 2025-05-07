import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import HomePage from './components/HomePage/HomePage'

/**
 * App - Main application component
 * 
 * This component serves as the entry point for our portfolio application.
 * It includes React Router for navigation between pages and maintains
 * the header and footer across all routes.
 * 
 * @returns {JSX.Element} The rendered application
 */
function App() {
  // State to track scroll position for animation effects
  const [scrollY, setScrollY] = useState(0)
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Router>
      <div className="app">
        {/* Header with navigation */}
        <Header scrollPosition={scrollY} />

        {/* Main content with routes */}
        <main className="main-content">
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Project details route with dynamic parameter */}
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App