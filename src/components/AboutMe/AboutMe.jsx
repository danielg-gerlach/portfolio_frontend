// AboutMe.jsx
import './AboutMe.css';
import { FaPython, FaJava, FaDocker, FaGithub } from 'react-icons/fa';
import { SiGooglebigquery, SiSnowflake } from 'react-icons/si';
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
    { category: 'Other', items: ['Docker', 'Git', 'Data Modeling', 'BigQuery', 'Snowflake', 'InfluxDB', 'MongoDB', 'DuckDB', 'Pandas'] }
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
            </div>
          </div>
          
          <div className="about-details">
            <div className="bio-section">
              <h3 className="bio-title">About Me</h3>
              <p className="bio-text">
              I’m currently pursuing my Master’s in Data Engineering and Analytics, building on a background in IT Product Management and Business Informatics.
              I enjoy working at the intersection of data, systems, and real-world impact — whether it’s building data pipelines, automating workflows, or turning raw data into something meaningful. 
              Over the past year, I’ve gained hands-on experience at Robert Bosch GmbH, first as an intern in IT Product Management for Manufacturing, where I also wrote my Bachelor’s thesis on Generative AI in manufacturing. 
              I’m now continuing there as a working student in Data Engineering & Business Intelligence in Stuttgart.
              This portfolio highlights some of the projects I’ve worked on during my studies.
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