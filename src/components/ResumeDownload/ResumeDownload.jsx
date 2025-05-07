// src/components/ResumeDownload/ResumeDownload.jsx
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './ResumeDownload.css';

function ResumeDownload() {
  // Google Docs-Link zum Lebenslauf
  const resumeDocLink = "https://drive.google.com/file/d/1BuwN37zrzeBeBoiiw9iJO_MrWJDc4337/view?usp=drive_link";

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2 className="section-title">Lebenslauf</h2>
        
        <div className="resume-container">
          <div className="resume-content">
            <h3 className="resume-title">My Resume for everyone who's interested!</h3>
            <p className="resume-description">
            My resume is available online in Google Drive. It contains  information about
              my education, professional experience, technical skills and projects.
              You can view it directly online or download it.
            </p>
            
            <a 
              href={resumeDocLink} 
              target="_blank"
              rel="noopener noreferrer" 
              className="resume-view-btn"
            >
              <FaExternalLinkAlt className="external-icon" />
              <span>Lebenslauf in Google Docs ansehen</span>
            </a>
          </div>
          
          <div className="resume-preview">
            <div className="resume-preview-inner">
              <img 
                src="/public/images2/resume/Resume_Daniel_Gerlach.png" 
                alt="Vorschau des Lebenslaufs" 
                className="resume-preview-img" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeDownload;