import { Link } from 'react-router-dom'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.css'
import { projectsData } from './projectsData'

/**
 * Projects - Project showcase section
 * 
 * This component displays a collection of projects the portfolio
 * owner has worked on. Projects are displayed in a responsive grid.
 * 
 * @returns {JSX.Element} The Projects section
 */
function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        {/* Project description */}
        <p className="projects-description">
          Here are some of the data engineering and analytics projects I've worked on. 
          These showcase my skills in data pipeline development, analytics, and visualization.
          Click on any project to see more details.
        </p>
        
        {/* Projects grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              github={project.github}
            />
          ))}
        </div>
        
        {/* Additional projects link */}
        <div className="more-projects">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="more-link"
          >
            <span>View more projects on GitHub</span>
            <svg className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects