// AboutMe.jsx
import './AboutMe.css';
import { FaPython, FaJava, FaDocker, FaGithub } from 'react-icons/fa';
import { SiGooglebigquery, SiSnowflake} from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';
import { GoDatabase } from 'react-icons/go';
import {
    SiInfluxdb,
    SiMongodb,
    SiDuckdb,
    SiPandas,
  } from 'react-icons/si';
import ProfilePic from "../../assets/images/Bild_Daniel_Gerlach_komp.jpg";

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
    'InfluxDB': <SiInfluxdb className="skill-icon" />,
    'MongoDB': <SiMongodb className="skill-icon" />,
    'DuckDB': <SiDuckdb className="skill-icon" />,
    'Pandas': <SiPandas className="skill-icon" />,
  };

  // Skills array für einfache Verwaltung und Anzeige
  const skills = [
    { category: 'Programming', items: ['Python', 'SQL', 'Java'] },
    { category: 'Other', items: ['Docker', 'Git', 'Data Modeling', 'BigQuery', 'Snowflake', 'InfluxDB', 'MongoDB', 'DuckDB', 'Pandas', 'Microsoft Fabric'] }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-profile">
            <div className="profile-image">
              {ProfilePic ? (
                <img src={ProfilePic} alt="Daniel Gerlach" className="profile-img" />
              ) : (
                <div className="profile-placeholder">
                  Profile Image
                </div>
              )}
            </div>
            
            <div className="profile-info">
              <h3 className="profile-name">Daniel Gerlach</h3>
              <p className="profile-title">Master Student: Business Informatics</p>
              <p className="profile-subtitle">Data Engineering & Analytics</p>
              
              {/* Social Media Links direkt unter der Beschreibung */}
              <div className="profile-social-links">
                <a 
                  href="https://github.com/danielg-gerlach" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="profile-social-link"
                  aria-label="GitHub"
                >
                  <svg className="profile-social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/danielg-gerlach" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="profile-social-link"
                  aria-label="LinkedIn"
                >
                  <svg className="profile-social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:danielg-gerlach@outlook.de" 
                  className="profile-social-link"
                  aria-label="Email"
                >
                  <svg className="profile-social-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="about-details">
            <div className="bio-section">
              <h3 className="bio-title">About Me</h3>
              <p className="bio-text">
              I'm currently pursuing my Master's in Business Informatics, specializing in Data Engineering and Analytics, building on a background in IT Product Management and Business Informatics.
              I enjoy working at the intersection of data, systems, and real-world impact — whether it's building data pipelines, automating workflows, or turning raw data into something meaningful. 
              Over the past year, I've gained hands-on experience at Robert Bosch GmbH, first as an intern in IT Product Management for Manufacturing, where I also wrote my Bachelor's thesis on Generative AI in manufacturing. 
              I'm now continuing there as a working student in Data Engineering & Business Intelligence in Stuttgart.
              This portfolio highlights some of the projects I've worked on during my studies.
              Feel free to explore — Enjoy!
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