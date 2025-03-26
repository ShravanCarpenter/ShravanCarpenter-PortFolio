import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = {
    "Web Technologies": [
      { name: "HTML", percentage: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", percentage: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", percentage: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", percentage: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node JS", percentage: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
    ],
    "Core Technologies": [
      { name: "C++", percentage: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "SQL", percentage: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ],
    "Tools": [
      { name: "Git", percentage: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Github", percentage: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", percentage: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
    ]
  };

  // The text content for the ribbons
  const skillsText = "C++ • OOPM • Git & Github • SQL • MongoDB • React.JS • Redux Toolkit • Node.JS • HTML5 • CSS3 • JavaScript • ";

  // Check visibility for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Create duplicate content for seamless looping
  const repeatedText = Array(4).fill(skillsText).join('');

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      {/* Top Ribbon - Full Width */}
      <div className="ribbon-container top-ribbon">
        <div className="running-text">
          {repeatedText}
        </div>
      </div>

      <div className="skill-container">
        <h1 className="skill-title">Skills I Have</h1>
        <p className="skill-subtitle">
          These skills represent my current toolkit—built through dedication and hard work, but my greatest skill remains an unwavering curiosity and commitment to continuous growth.
        </p>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillsList], index) => (
            <div key={category} className="skills-column">
              <h2 className="category-title">{category}</h2>
              <div className="skills-container">
                {skillsList.map((skill, i) => (
                  <div
                    key={skill.name}
                    className={`skill-card ${isVisible ? 'visible' : ''}`}
                    style={{ '--percentage': `${skill.percentage}%`, '--delay': `${i * 0.1}s` }}
                  >
                    <div className="skill-icon">
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                    <h3 className="skill-name">{skill.name}</h3>
                    <div className="skill-percentage">{skill.percentage}%</div>
                  </div>
                ))}
              </div>
              {index !== Object.keys(skills).length - 1 && <div className="vertical-line"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Ribbon - Full Width */}
      <div className="ribbon-container bottom-ribbon">
        <div className="running-text opposite">
          {repeatedText}
        </div>
      </div>
    </section>
  );
};

export default Skills;