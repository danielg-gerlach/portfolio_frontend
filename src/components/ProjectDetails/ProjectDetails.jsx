import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ProjectDetails.css'
import { projectsData } from '../Projects/projectsData'

/**
 * ProjectDetails - Modulare Karten-basierte Ansicht für Projektdetails
 * 
 * Modernes, minimalistisches Design mit Karten für jede Sektion, 
 * optimierten Abständen und sanfter Hover-Animation.
 * 
 * @returns {JSX.Element} Die Projektdetailseite
 */
function ProjectDetails() {
  // URL-Parameter für Projekt-ID
  const { id } = useParams()
  
  // State für das aktuelle Projekt
  const [project, setProject] = useState(null)

  // Navigate Hook für programmgesteuerte Navigation
  const navigate = useNavigate();
  
  // Lade Projektdaten beim Mounten oder ID-Änderung
  useEffect(() => {
    // Suche das Projekt mit der passenden ID
    const foundProject = projectsData.find(p => p.id === parseInt(id))
    
    if (foundProject) {
      // Setze Dokumenttitel
      document.title = `${foundProject.title} | Portfolio`
      
      // Setze Projekt im State
      setProject(foundProject)
      
      // Scrolle zum Seitenanfang
      window.scrollTo(0, 0)
    }
  }, [id])

  // Funktion für Navigation zurück zur Projektübersicht
  const navigateToProjects = () => {
    navigate('/');
    // Timeout um sicherzustellen, dass Navigation abgeschlossen ist
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Falls Projekt nicht gefunden oder noch lädt
  if (!project) {
    return (
      <div className="container project-not-found">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <button onClick={navigateToProjects} className="back-link">
          <span>Back to Projects</span>
        </button>
      </div>
    )
  }

  return (
    <div className="project-details-container">
      <div className="container">
        {/* Back Link als Button */}
        <button 
          onClick={navigateToProjects} 
          className="back-link"
        >
          <svg className="back-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Back to Projects</span>
        </button>
        
        {/* Projektkopf */}
        <div className="project-header">
          <h1 className="project-title">{project.title}</h1>
          
          {/* Links - nur GitHub */}
          <div className="project-links">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                <svg className="link-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Repository
              </a>
            )}
          </div>
        </div>
        
        {/* Projektbild */}
        <div className="project-image-container">
          {project.image ? (
            <img 
              src={project.image} 
              alt={`${project.title} project`} 
              className="project-full-image"
            />
          ) : (
            <div className="project-image-placeholder">
              Project Image
            </div>
          )}
        </div>
        
        {/* Neues Karten-Layout für Projektinhalt */}
        <div className="project-content-cards">
          {/* Übersicht-Karte */}
          <div className="project-card card-overview">
            <div className="card-content">
              <h2 className="card-heading">Overview</h2>
              <p className="project-description">{project.description}</p>
              
              {/* Vollständige Beschreibung, falls vorhanden */}
              {project.fullDescription && (
                <div className="full-description">
                  {project.fullDescription.map((paragraph, index) => (
                    <p key={index} className="description-paragraph">{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Technologien-Karte */}
          <div className="project-card">
            <div className="card-content">
              <h2 className="card-heading">Technologies Used</h2>
              <div className="tech-grid">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-name">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Features-Karte */}
          {project.features && (
            <div className="project-card">
              <div className="card-content">
                <h2 className="card-heading">Key Features</h2>
                <ul className="features-list">
                  {project.features.map((feature, index) => (
                    <li key={index} className="feature-item">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Herausforderungen-Karte */}
          {project.challenges && (
            <div className="project-card">
              <div className="card-content">
                <h2 className="card-heading">Challenges & Solutions</h2>
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="challenge-item">
                    <h3 className="challenge-title">{challenge.title}</h3>
                    <p className="challenge-description">{challenge.description}</p>
                    {challenge.solution && (
                      <div className="solution">
                        <h4 className="solution-title">Solution:</h4>
                        <p className="solution-description">{challenge.solution}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Outcomes-Karte */}
          {project.outcomes && (
            <div className="project-card">
              <div className="card-content">
                <h2 className="card-heading">Outcomes & Learnings</h2>
                <p className="outcomes-text">{project.outcomes}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails