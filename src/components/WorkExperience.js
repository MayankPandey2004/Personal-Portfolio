import mercariLogo from "../assets/img/mercari-logo.png";
import rngplayLogo from "../assets/img/rngplay-logo.png";
import simpechLogo from "../assets/img/simpech-logo.png";
import reingamesLogo from "../assets/img/reingames-logo.png";
import "./Styles/WorkExperience.css";

const experiences = [
  {
    company: "Mercari Software Technology India",
    role: "iOS Engineer Intern",
    period: "Jan 2026 – Jun 2026",
    logo: mercariLogo,
    highlights: [
      "Delivered an ASDD-kit internal AI plugin for the Yuyu Mercari iOS project, streamlining development and shortening dev cycles.",
      "Presented technical outcomes at India all-hands, translating engineering work into clear business value.",
      "Built an n8n-based workflow to automate TDD review checks, improving review consistency.",
      "Implemented end-to-end (E2E) testing on iOS for stronger release confidence through automated regression coverage.",
      "Delivered an ActiveSDK PoC for 3DS credit-card payment authentication.",
    ],
  },
  {
    company: "RNGPlay",
    role: "Full Stack Development Intern",
    period: "May 2025 – Jun 2025",
    logo: rngplayLogo,
    highlights: [
      "Built Spring Boot APIs for slot and cluster-matching games with RTP, wildcards, and simulation tools.",
      "Developed a secure, modular backend for a journal app with CRUD operations.",
    ],
  },
  {
    company: "Simpech",
    role: "Software Development Intern",
    period: "Mar 2025 – Apr 2025",
    logo: simpechLogo,
    highlights: [
      "Built a Certificate Generator Dashboard micro-service for a Virtual Classroom platform.",
      "Developed backend in Go with MongoDB for scalable data handling.",
      "Created responsive frontend using React, Vite, and Tailwind CSS.",
    ],
  },
  {
    company: "Rein Games Pvt Ltd",
    role: "Mobile Development Intern",
    period: "Jun 2024 – Jul 2024",
    logo: reingamesLogo,
    highlights: [
      "Created the frontend for the Leads Management System on web and mobile using React Native CLI and Expo.",
      "Designed responsive, interactive user interfaces for a smooth cross-platform experience.",
    ],
  },
];

function TimelineEntry({ job, align, index }) {
  return (
    <div
      className={`timeline-entry timeline-entry--${align}`}
      style={{ "--entry-delay": `${index * 140}ms` }}
    >
      <div className="timeline-entry-marker">
        <div className="timeline-node">
          <span className="timeline-node-ring" aria-hidden="true" />
          <div className="experience-logo-wrap">
            <span className="logo-glow logo-glow--inner" aria-hidden="true" />
            <span className="logo-glow logo-glow--outer" aria-hidden="true" />
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="experience-logo"
            />
          </div>
        </div>
      </div>

      <article className="timeline-entry-body">
        <span className="timeline-period">{job.period}</span>
        <h3 className="timeline-role">{job.role}</h3>
        <h4 className="timeline-company">{job.company}</h4>
        <ul className="timeline-highlights">
          {job.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <section className="experience-section" id="experience">
      <div className="skills-background">
        <div className="bg-decoration bg-decoration-1"></div>
        <div className="bg-decoration bg-decoration-2"></div>
      </div>

      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Work Experience</h2>
          <p className="skills-description">
            I&apos;ve learned the most by building with real teams, shipping iOS features, game backends,
            and tools people actually use. Here&apos;s a look at where that journey has taken me so far.
          </p>
        </div>

        <div className="experience-timeline">
          <div className="timeline-rail" aria-hidden="true">
            <div className="timeline-rail-glow" />
            <div className="timeline-rail-line" />
          </div>

          <div className="timeline-entries">
            {experiences.map((job, index) => (
              <TimelineEntry
                key={job.company}
                job={job}
                align={index % 2 === 0 ? "left" : "right"}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
