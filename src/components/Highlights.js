"use client"

import "./Styles/Highlights.css"

const highlights = [
    {
        title: "Work Experience",
        subtitle: "Interned at 3 Companies",
        description: "Acquired hands-on experience in full-stack development, game development, and mobile app development through internships at three companies.",
        icon: "💼",
    },
    {
        title: "AWS-SAA",
        subtitle: "AWS Certified Solutions Architect – Associate",
        description: "Achieved the AWS Solutions Architect – Associate certification, demonstrating expertise in designing distributed systems on AWS.",
        icon: "☁️",
        button: { text: "View Certificate", link: "https://www.credly.com/badges/6efe0873-f368-45e6-80cb-9b822ce9426c/linked_in_profile" },
    },
      {
        title: "AI-900",
        subtitle: "Microsoft Certified: AI Fundamentals",
        description: "Earned the Microsoft AI-900 certification, showcasing foundational knowledge in AI and machine learning concepts on Azure.",
        icon: "🤖",
        button: { text: "View Certificate", link: "https://learn.microsoft.com/api/credentials/share/en-gb/MayankPandey-6719/5B3CBFB01A7A3EE8?sharingId=4631F69937ADB8FB" },
      },
    {
        title: "Top 10",
        subtitle: "Hackathon Finalist",
        description: "Recognized as one of the Top 10 finalists in the Code4Change 2.0 Hackathon at VIT for developing a Deadstock app that promotes sustainability by repurposing unused inventory through community exchange.",
        icon: "🏆",
    },
];

export default function Highlights() {
    return (
        <section className="highlights-section" id="highlights">
            <div className="skills-background">
                <div className="bg-decoration bg-decoration-1"></div>
                <div className="bg-decoration bg-decoration-2"></div>
            </div>

            <div className="skills-container">
                <div className="skills-header">
                    <h2 className="skills-title">Highlights</h2>
                    <p className="skills-description">
                        A few key accomplishments and certifications that showcase my technical capabilities and experience.
                    </p>
                </div>

                <div className="highlights-grid">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="highlight-card"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="highlight-icon">
                                <span className="icon-emoji">{item.icon}</span>
                            </div>
                            <h3 className="highlight-title">{item.title}</h3>
                            <h4 className="highlight-subtitle">{item.subtitle}</h4>
                            <p className="highlight-description">{item.description}</p>
                            {item.button && (
                                <a className="highlight-btn" href={item.button.link}>
                                    {item.button.text}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
