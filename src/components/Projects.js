"use client"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import { useState } from "react"
import ProjectCard from "./ProjectCard"
import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      title: "AWS CloudLearn(LMS)",
      description: "using Next.js, AWS, Vercel, Clerk, Stripe",
      imgUrl: projImg4,
      demoUrl: "https://aws-cloud-learn.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "AskMe App",
      description: "using React.js and Go",
      imgUrl: projImg2,
      demoUrl: "none",
      githubUrl: "#",
    },
    {
      title: "Leads Management System",
      description: "using React Native and Go",
      imgUrl: projImg5,
      demoUrl: "none",
      githubUrl: "#",
    },
    {
      title: "Blockchain DKeeper",
      description: "using Motoko, Js and CSS",
      imgUrl: projImg7,
      demoUrl: "none",
      githubUrl: "#",
    },
    {
      title: "Realtime Finger Counter",
      description: "using Python and OpenCV",
      imgUrl: projImg8,
      demoUrl: "none",
      githubUrl: "#",
    },
    {
      title: "Realtime WebCam Drawing",
      description: "using Python and OpenCV",
      imgUrl: projImg9,
      demoUrl: "none",
      githubUrl: "#",
    },
    {
      title: "Custom Certificate Generator",
      description: "using Next.js and Go",
      imgUrl: projImg6,
      demoUrl: "none",
      githubUrl: "#",
    },
    {
      title: "Chat App",
      description: "using React Native and Firebase",
      imgUrl: projImg1,
      demoUrl: "none",
      githubUrl: "#",
    },
    {
      title: "Discord Music Bot",
      description: "using Python and discord.dev",
      imgUrl: projImg3,
      demoUrl: "none",
      githubUrl: "#",
    },
  ]

  const [activeTab, setActiveTab] = useState("all")
  const [visibleProjects, setVisibleProjects] = useState(6)

  const categories = ["all", "web", "mobile", "ai/ml", "other"]

  const filterProjects = (category) => {
    if (category === "all") return projects

    const categoryMap = {
      web: ["AWS CloudLearn(LMS)", "AskMe App", "DKeeper", "Custom Certificate Generator"],
      mobile: ["Leads Management System", "Chat App"],
      "ai/ml": ["Realtime Finger Counter", "Realtime WebCam Drawing"],
      other: ["Discord Music Bot"],
    }

    return projects.filter((project) => categoryMap[category]?.includes(project.title))
  }

  const filteredProjects = filterProjects(activeTab)
  const displayedProjects = filteredProjects.slice(0, visibleProjects)

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3)
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-background">
        <div className="bg-decoration bg-decoration-right"></div>
      </div>

      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-description">
            These are some of my recent projects that highlight my diverse skill set in developing responsive web
            layouts to handling dynamic components in mobile apps. These projects reflect my commitment to continuous
            learning and innovation in the field of software development.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="projects-tabs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category)
                setVisibleProjects(6)
              }}
              className={`tab-btn ${activeTab === category ? "active" : ""}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>


        {/* Projects Grid */}
        <div className="projects-grid">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="load-more-container">
            <button onClick={loadMore} className="load-more-btn">
              Load More Projects
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="projects-stats">
          <div className="stat-item">
            <div className="stat-number">{projects.length}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Technologies Used</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
