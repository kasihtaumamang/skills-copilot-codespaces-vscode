import React from 'react';
import './About.css';
import { FaCode, FaPaintBrush, FaServer } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header fade-in">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
      </div>

      <div className="about-content fade-in">
        <div className="about-text">
          <p className="about-description">
            I'm a passionate professional with expertise in software engineering, design, and IT technical solutions. 
            I love creating innovative solutions that bridge the gap between technology and user experience.
          </p>
          <p className="about-description">
            With a keen eye for aesthetics and a deep understanding of technical architecture, 
            I bring ideas to life through clean code and elegant design.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card glass-effect">
            <div className="card-icon" style={{ background: 'var(--gradient-1)' }}>
              <FaCode />
            </div>
            <h3>Software Engineer</h3>
            <p>Building robust and scalable applications with modern technologies and best practices.</p>
          </div>

          <div className="about-card glass-effect">
            <div className="card-icon" style={{ background: 'var(--gradient-2)' }}>
              <FaPaintBrush />
            </div>
            <h3>Designer</h3>
            <p>Creating beautiful and intuitive user interfaces that provide exceptional experiences.</p>
          </div>

          <div className="about-card glass-effect">
            <div className="card-icon" style={{ background: 'var(--gradient-3)' }}>
              <FaServer />
            </div>
            <h3>IT Technical</h3>
            <p>Managing infrastructure and solving complex technical challenges with efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
