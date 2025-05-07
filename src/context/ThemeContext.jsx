// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Gespeicherte Einstellung aus dem localStorage abrufen oder System-Präferenz verwenden
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // System-Präferenz abfragen (falls verfügbar)
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Theme umschalten
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Theme anwenden und im localStorage speichern
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom Hook für einfachen Zugriff auf den Theme-Kontext
export function useTheme() {
  return useContext(ThemeContext);
}