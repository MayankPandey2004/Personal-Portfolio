import "./ProjectCard.css"

const ProjectCard = ({ title, description, imgUrl, demoUrl, githubUrl, index }) => {
  return (
    <div
      className="project-card"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="project-img-container">
        <img src={imgUrl || "/placeholder.svg"} alt={title} className="project-img" />
        <div className="project-overlay">
          <div className="project-content">
            <h4 className="project-title">{title}</h4>
            <span className="project-description">{description}</span>
            <div className="project-links">
              {demoUrl !== "none" && <a href={demoUrl} className="project-link demo-link">
                <span>🔗</span> Live Demo
              </a>}
              {githubUrl !== "none" && <a href={githubUrl} className="project-link github-link">
                <span>📁</span> GitHub
              </a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
