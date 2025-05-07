// src/App.jsx
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import HomePage from './components/HomePage/HomePage'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [scrollY, setScrollY] = useState(0)
  
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
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header scrollPosition={scrollY} />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </main>

          <Footer />
          <ThemeToggle />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App