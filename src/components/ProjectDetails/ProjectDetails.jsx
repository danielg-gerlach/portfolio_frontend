import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetails.css'
import { projectsData } from '../Projects/projectsData'

/**
 * ProjectDetails - Detailed page for a single project
 * 
 * This component displays detailed information about a specific project,
 * including extended description, technologies, challenges, and solutions.
 * 
 * @returns {JSX.Element} The project details page
 */
function ProjectDetails() {
  // Get the id parameter from the URL
  const { id } = useParams()
  
  // State to store the current project
  const [project, setProject] = useState(null)
  
  // Load project data when component mounts or id changes
  useEffect(() => {
    // Find the project with the matching id
    const foundProject = projectsData.find(p => p.id === parseInt(id))
    
    if (foundProject) {
      // Set document title
      document.title = `${foundProject.title} | Portfolio`
      
      // Set the project in state
      setProject(foundProject)
      
      // Scroll to top when loading new project
      window.scrollTo(0, 0)
    }
  }, [id])

  // If project is not found or still loading
  if (!project) {
    return (
      <div className="container project-not-found">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">
          <span>Back to Home</span>
        </Link>
      </div>
    )
  }

  return (
    <div className="project-details-container">
      <div className="container">
        {/* Back link */}
        <Link to="/" className="back-link">
          <svg className="back-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Back to Projects</span>
        </Link>
        
        {/* Project header */}
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
        
        {/* Project image */}
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
        
        {/* Project content */}
        <div className="project-content-wrapper">
          {/* Overview */}
          <section className="project-section">
            <h2 className="section-heading">Overview</h2>
            <p className="project-description">{project.description}</p>
            
            {/* Only show full description if it exists */}
            {project.fullDescription && (
              <div className="full-description">
                {project.fullDescription.map((paragraph, index) => (
                  <p key={index} className="description-paragraph">{paragraph}</p>
                ))}
              </div>
            )}
          </section>
          
          {/* Technologies */}
          <section className="project-section">
            <h2 className="section-heading">Technologies Used</h2>
            <div className="tech-grid">
              {project.technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <span className="tech-name">{tech}</span>
                </div>
              ))}
            </div>
          </section>
          
          {/* Features */}
          {project.features && (
            <section className="project-section">
              <h2 className="section-heading">Key Features</h2>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index} className="feature-item">{feature}</li>
                ))}
              </ul>
            </section>
          )}
          
          {/* Challenges */}
          {project.challenges && (
            <section className="project-section">
              <h2 className="section-heading">Challenges & Solutions</h2>
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
            </section>
          )}
          
          {/* Outcomes */}
          {project.outcomes && (
            <section className="project-section">
              <h2 className="section-heading">Outcomes & Learnings</h2>
              <p className="outcomes-text">{project.outcomes}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails