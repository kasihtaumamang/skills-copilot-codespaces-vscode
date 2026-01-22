import React from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ scrolled, theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="gradient-text">Portfolio</span>
        </div>
        
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')} className="nav-link">Home</a>
          <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a onClick={() => scrollToSection('skills')} className="nav-link">Skills</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </div>

        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
