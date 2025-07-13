"use client"

import { useState } from "react"
import "./Styles/Skills.css"

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [hoveredSkill, setHoveredSkill] = useState(null)

    const skills = [
        // --- Existing skills ---

        {
            name: "C++",
            category: "Programming",
            level: "Advanced",
            color: "#3b82f6",
            description: "System programming and algorithms",
            icon: "💻",
        },
        {
            name: "C",
            category: "Programming",
            level: "Advanced",
            color: "#6b7280",
            description: "Low-level programming",
            icon: "⚡",
        },
        {
            name: "Java",
            category: "Programming",
            level: "Intermediate",
            color: "#f97316",
            description: "Object-oriented programming",
            icon: "☕",
        },
        {
            name: "JavaScript",
            category: "Programming",
            level: "Advanced",
            color: "#eab308",
            description: "Dynamic web development",
            icon: "⚡",
        },
        {
            name: "TypeScript",
            category: "Programming",
            level: "Intermediate",
            color: "#1d4ed8",
            description: "Type-safe JavaScript",
            icon: "📘",
        },
        {
            name: "Go",
            category: "Programming",
            level: "Beginner",
            color: "#10b981",
            description: "Concurrency and system programming",
            icon: "🐹",
        },
        {
            name: "Python",
            category: "Programming",
            level: "Advanced",
            color: "#ffb703",
            description: "Scripting, automation, and machine learning",
            icon: "🐍",
        },
        {
            name: "HTML",
            category: "Frontend",
            level: "Advanced",
            color: "#ea580c",
            description: "Semantic markup",
            icon: "🌐",
        },
        {
            name: "CSS",
            category: "Frontend",
            level: "Advanced",
            color: "#2563eb",
            description: "Styling and animations",
            icon: "🎨",
        },
        {
            name: "React",
            category: "Frontend",
            level: "Advanced",
            color: "#06b6d4",
            description: "Component-based UI library",
            icon: "⚛️",
        },
        {
            name: "Next.js",
            category: "Frontend",
            level: "Intermediate",
            color: "#000000",
            description: "React framework for SSR & static sites",
            icon: "⏭️",
        },
        {
            name: "Tailwind CSS",
            category: "Frontend",
            level: "Advanced",
            color: "#38bdf8",
            description: "Utility-first CSS framework",
            icon: "🌬️",
        },
        {
            name: "Bootstrap",
            category: "Frontend",
            level: "Advanced",
            color: "#7c3aed",
            description: "CSS framework",
            icon: "🅱️",
        },
        {
            name: "React Native",
            category: "Mobile",
            level: "Intermediate",
            color: "#9333ea",
            description: "Cross-platform mobile apps",
            icon: "📱",
        },
        {
            name: "Node.js",
            category: "Backend",
            level: "Intermediate",
            color: "#16a34a",
            description: "Server-side JavaScript",
            icon: "🟢",
        },
        {
            name: "MySQL",
            category: "Database",
            level: "Intermediate",
            color: "#0891b2",
            description: "Relational database management",
            icon: "🗄️",
        },
        {
            name: "Firebase",
            category: "Backend",
            level: "Intermediate",
            color: "#ff6f00",
            description: "Realtime database and authentication",
            icon: "🔥",
        },
        {
            name: "Git",
            category: "DevOps",
            level: "Advanced",
            color: "#f05033",
            description: "Version control system",
            icon: "🔧",
        },
        {
            name: "Docker",
            category: "DevOps",
            level: "Intermediate",
            color: "#0db7ed",
            description: "Containerization platform",
            icon: "🐳",
        },
        {
            name: "Kubernetes",
            category: "DevOps",
            level: "Beginner",
            color: "#326ce5",
            description: "Container orchestration",
            icon: "☸️",
        },
        {
            name: "AWS",
            category: "DevOps",
            level: "Intermediate",
            color: "#ff9900",
            description: "Cloud infrastructure and deployment",
            icon: "☁️",
        },
    ]

    const categories = ["All", "Programming", "Frontend", "Backend", "Database", "Mobile", "DevOps"]

    const filteredSkills =
        selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)

    const getLevelClass = (level) => {
        switch (level) {
            case "Advanced":
                return "level-advanced"
            case "Intermediate":
                return "level-intermediate"
            case "Beginner":
                return "level-beginner"
            default:
                return "level-default"
        }
    }

    return (
        <section className="skills-section" id='skills'>
            <div className="skills-background">
                <div className="bg-decoration bg-decoration-1"></div>
                <div className="bg-decoration bg-decoration-2"></div>
            </div>

            <div className="skills-container">
                {/* Header */}
                <div className="skills-header">
                    <h2 className="skills-title">Technical Skills</h2>
                    <p className="skills-description">
                        Proficient in various programming languages and development tools, ensuring high-quality software solutions
                        across the full stack.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="category-filter">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="skills-grid">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`skill-card ${hoveredSkill === skill.name ? "hovered" : ""}`}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <div className="skill-icon" style={{ backgroundColor: skill.color }}>
                                <span className="icon-emoji">{skill.icon}</span>
                            </div>

                            <h3 className="skill-name">{skill.name}</h3>
                            <p className="skill-description">{skill.description}</p>

                            <div className="skill-badges">
                                <span className={`badge ${getLevelClass(skill.level)}`}>{skill.level}</span>
                                <span className="badge category-badge">{skill.category}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                    <div className="stat-item">
                        <div className="stat-number">12+</div>
                        <div className="stat-label">Technologies</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">5+</div>
                        <div className="stat-label">Categories</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">3+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Projects</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
