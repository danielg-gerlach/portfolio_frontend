// src/components/Certifications/Certifications.jsx
import React from 'react';
import { FaCheck, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';
import CourseraImage from "../../assets/images2/certifications/coursera.png";
import DataCampImage from "../../assets/images2/certifications/logo.png";

function Certifications() {
  // Zertifikatsdaten
  const certifications = [
    {
      id: 1,
      name: "Data Engineer",
      issuer: "DataCamp",
      date: "January 2024",
      expiryDate: null, // Doppeltes Feld entfernt
      credentialId: "#434,995",
      verificationUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/65dd19f5f70bdb960136a32de88b0817694909dc",
      skills: ["Data Engineering", "Python", "SQL", "Data Pipelines", "Data Warehousing"],
      logo: DataCampImage
    },
    {
      id: 2,
      name: "DevOps & Software Engineering",
      issuer: "Coursera",
      date: "Januar 2024",
      expiryDate: null,
      credentialId: "EFGH5678",
      verificationUrl: "https://coursera.org/share/6aa1d04db46bc341e8106735ac5bed65",
      skills: ["DevOps", "Software Engineering", "Microservices", "Git", "Shell Scripting"],
      logo: CourseraImage
    }
    // Drittes Zertifikat auskommentiert oder entfernt für dein Szenario mit nur 2 Zertifikaten
  ];

  // Bestimme die passende Klasse basierend auf der Anzahl der Zertifikate
  const getGridClass = () => {
    const count = certifications.length;
    if (count <= 2) {
      return "certifications-grid certifications-grid-centered";
    }
    return "certifications-grid";
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <p className="certifications-description">
          During my studies, I've also gained some experience through certifications & online courses. 
        </p>
        
        <div className={getGridClass()}>
          {certifications.map(cert => (
            <div key={cert.id} className="certification-card">
              <div className="certification-header">
                {cert.logo ? (
                  <img src={cert.logo} alt={cert.issuer} className="certification-logo" />
                ) : (
                  <div className="certification-logo-placeholder">
                    {cert.issuer.charAt(0)}
                  </div>
                )}
                <div className="certification-title-container">
                  <h3 className="certification-name">{cert.name}</h3>
                  <p className="certification-issuer">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="certification-body">
                <div className="certification-dates">
                  <span>Issued: {cert.date}</span>
                  {cert.expiryDate && <span>Expiry date: {cert.expiryDate}</span>}
                </div>
                
                <p className="certification-id">Credential ID: {cert.credentialId}</p>
                
                <div className="certification-skills">
                  <h4 className="skills-title">Skills</h4>
                  <div className="skills-list">
                    {cert.skills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <FaCheck className="check-icon" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="certification-footer">
                <a 
                  href={cert.verificationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="verification-link"
                >
                  <span>Verify</span>
                  <FaExternalLinkAlt className="link-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;