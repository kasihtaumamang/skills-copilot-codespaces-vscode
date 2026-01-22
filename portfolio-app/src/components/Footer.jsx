import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="gradient-text">Portfolio</h3>
          <p className="footer-text">
            Building elegant solutions through code and design.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <FaTwitter />
            </a>
            <a href="mailto:your.email@example.com" className="footer-social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} All rights reserved. Made with <FaHeart className="heart-icon" /> by Your Name
        </p>
      </div>
    </footer>
  );
};

export default Footer;
