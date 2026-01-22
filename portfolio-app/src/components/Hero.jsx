import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content fade-in">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Your Name</span>
          </h1>
          <h2 className="hero-subtitle">
            Software Engineer • Designer • IT Technical
          </h2>
          <p className="hero-description">
            I create elegant solutions through code and design, bridging technology and user experience.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
            <button className="btn btn-outline" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View Work
            </button>
          </div>
          <div className="hero-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="mailto:your.email@example.com" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1"></div>
          <div className="floating-card card-2"></div>
          <div className="floating-card card-3"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
