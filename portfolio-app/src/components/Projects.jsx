import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      gradient: 'var(--gradient-1)',
      github: '#',
      live: '#'
    },
    {
      title: 'Design Portfolio',
      description: 'A stunning portfolio website showcasing UI/UX design projects with interactive animations and modern layouts.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      gradient: 'var(--gradient-2)',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
      gradient: 'var(--gradient-3)',
      github: '#',
      live: '#'
    },
    {
      title: 'DevOps Dashboard',
      description: 'An infrastructure monitoring dashboard for managing cloud resources, deployments, and system health metrics.',
      technologies: ['React', 'Docker', 'Kubernetes', 'GraphQL'],
      gradient: 'var(--gradient-1)',
      github: '#',
      live: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Advanced analytics platform for social media metrics with data visualization and reporting capabilities.',
      technologies: ['Python', 'React', 'D3.js', 'Flask'],
      gradient: 'var(--gradient-2)',
      github: '#',
      live: '#'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot powered by machine learning for customer support and automated responses.',
      technologies: ['Python', 'TensorFlow', 'React', 'WebSocket'],
      gradient: 'var(--gradient-3)',
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header fade-in">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
      </div>

      <div className="projects-grid fade-in">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card glass-effect">
            <div className="project-header" style={{ background: project.gradient }}>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
