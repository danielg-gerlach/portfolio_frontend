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
          These showcase my skills in data pipeline development, analytics, visualization & data warehousing.
          Click on any project to see more details!
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
      </div>
    </section>
  )
}

export default Projects