import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Apply theme to document root and save to localStorage
  useEffect(() => {
    // Apply theme class to body
    document.body.className = theme;
    
    // Set CSS variables based on theme
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--bg-color', '#1a1a1a');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--text-secondary', '#b0b0b0');
      root.style.setProperty('--navbar-bg', '#2d2d2d');
      root.style.setProperty('--card-bg', '#2d2d2d');
      root.style.setProperty('--toggle-bg', '#4a4a4a');
      root.style.setProperty('--toggle-slider', '#ffffff');
    } else {
      root.style.setProperty('--bg-color', '#f5f5f5');
      root.style.setProperty('--text-color', '#333333');
      root.style.setProperty('--text-secondary', '#666666');
      root.style.setProperty('--navbar-bg', '#ffffff');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--toggle-bg', '#ccc');
      root.style.setProperty('--toggle-slider', '#ffffff');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>MyWebsite</h1>
        </div>
        
        <div className="navbar-menu">
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          {/* Theme Toggle Switch */}
          <div className="theme-toggle-wrapper">
            <label className="theme-toggle" htmlFor="theme-checkbox">
              <input
                type="checkbox"
                id="theme-checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                aria-label="Toggle dark mode"
              />
              <span className="toggle-slider">
                <span className="toggle-icon sun">☀️</span>
                <span className="toggle-icon moon">🌙</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
