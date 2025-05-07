import { Link } from 'react-router-dom'
import './ProjectCard.css'

/**
 * ProjectCard - Reusable component for displaying project information
 * 
 * This component displays details about a single project and acts as a
 * clickable link to the detailed project page.
 * 
 * @param {Object} props - Component props
 * @param {number} props.id - Project id used for routing
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string[]} props.technologies - Array of technologies used
 * @param {string} props.image - URL or path to project image
 * @param {string} props.github - GitHub repository URL
 * @returns {JSX.Element} Project card component
 */
function ProjectCard({ id, title, description, technologies, image, github }) {
  return (
    <div className="project-card">
      {/* Project content wrapped in Link for navigation */}
      <Link to={`/project/${id}`} className="project-card-link">
        {/* Project image */}
        <div className="project-image"> 
          {image ? (
            <img 
              src={image} 
              alt={`${title} project`} 
              className="project-img"
            />
          ) : (
            // Placeholder if no image is provided
            <div className="project-placeholder">
              Project Image
            </div>
          )}
        </div>
        
        {/* Project content */}
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          
          <p className="project-description">
            {description}
          </p>
          
          {/* Technologies used */}
          <div className="project-tech">
            <h4 className="tech-title">Technologies</h4>
            <div className="tech-tags">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* View details indicator */}
          <div className="view-details">
            <span>View Project Details</span>
            <svg className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </Link>
      
      {/* Project links - only GitHub now */}
      <div className="project-links">
        {github && (
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github-link"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="link-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard