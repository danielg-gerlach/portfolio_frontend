// src/components/ThemeToggle/ThemeToggle.jsx
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle-btn" 
      onClick={toggleTheme} 
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
    </button>
  );
}

export default ThemeToggle;