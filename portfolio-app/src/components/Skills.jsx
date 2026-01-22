import React from 'react';
import './Skills.css';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaFigma,
  FaHtml5, FaCss3Alt, FaJs, FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, 
  SiNextdotjs, SiExpress, SiRedux, SiGraphql 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, color: '#000000' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'Database', icon: <FaDatabase />, color: '#667eea' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header fade-in">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Tools and technologies I work with</p>
      </div>

      <div className="skills-content fade-in">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-card glass-effect">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
