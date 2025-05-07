// AboutMe.jsx - vereinfachte Version
import './AboutMe.css';
import { FaPython, FaJava, FaDocker, FaGithub } from 'react-icons/fa';
import { SiGooglebigquery, SiSnowflake } from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';
import { GoDatabase } from 'react-icons/go';

function AboutMe() {
  // Minimales Set an Icons zum Testen
  const skillIcons = {
    'Python': <FaPython className="skill-icon" />,
    'SQL': <DiSqllite className="skill-icon" />,
    'Java': <FaJava className="skill-icon" />,
    'Docker': <FaDocker className="skill-icon" />,
    'Git': <FaGithub className="skill-icon" />,
    'Data Modeling': <GoDatabase className="skill-icon" />,
    'BigQuery': <SiGooglebigquery className="skill-icon" />, 
    'Snowflake': <SiSnowflake className="skill-icon" />,
  };

  // Skills array für einfache Verwaltung und Anzeige
  const skills = [
    { category: 'Programming', items: ['Python', 'SQL', 'Java'] },
    { category: 'Other', items: ['Docker', 'Git', 'Data Modeling', 'BigQuery', 'Snowflake'] }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-profile">
            <div className="profile-image">
                <img src="images/Bild_Daniel_Gerlach_komp.jpg" alt="Daniel Gerlach" className="profile-image"/>
              <div className="profile-placeholder">
                Profile Image
              </div>
            </div>
            
            <div className="profile-info">
              <h3 className="profile-name">Daniel Gerlach</h3>
              <p className="profile-title">Master Student: Business Informatics</p>
              <p className="profile-subtitle">Data Engineering & Analytics</p>
            </div>
          </div>
          
          <div className="about-details">
            <div className="bio-section">
              <h3 className="bio-title">Biography</h3>
              <p className="bio-text">
              I am a passionate Master's student specializing in Data Engineering and Analytics. 
                With a background in [Your Background], I'm dedicated to transforming raw data into 
                actionable insights and building robust data pipelines. 
              </p>
              <p>
                This portfolio presents some of the projects that I have completed thorughout my studies. 
                Enjoy!
              </p>
            </div>
            
            <div className="skills-section">
              <h3 className="skills-title">Skills</h3>
              <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-group">
                    <h4 className="skill-category">{skillGroup.category}</h4>
                    <div className="skill-items">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skillIcons[skill] && skillIcons[skill]} {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;