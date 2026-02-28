import { motion } from 'framer-motion';

const projects = [
    {
        icon: '🔐',
        title: 'Legal Document Analyzer',
        description:
            'AI-based system to summarize legal documents, extract clauses, and perform named entity recognition using NLP and LLMs. Improved document understanding and reduced manual review effort through automated text analysis.',
        tech: ['Python', 'NLP', 'FastAPI', 'Pandas', 'React', 'TypeScript'],
        github: 'https://github.com/gokul18062006',
        color: '#8b5cf6',
    },
    {
        icon: '🤖',
        title: 'AI Code Review Agent',
        description:
            'AI-powered code review tool supporting 50+ programming languages with smart language detection, security analysis, complexity metrics, and auto-fix suggestions. Leverages Google Gemini for intelligent analysis with a clean dark UI.',
        tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'Gemini AI', 'Tailwind CSS'],
        github: 'https://github.com/gokul18062006/code_review_agent',
        color: '#10b981',
    },
    {
        icon: '🛍️',
        title: 'Artisan Connect',
        description:
            'Marketplace platform connecting artisans and customers with secure authentication and product listings. Designed to support small-scale artisans by enabling digital product visibility and wider customer reach.',
        tech: ['React', 'JavaScript', 'Tailwind CSS', 'Next.js', 'MongoDB'],
        github: 'https://github.com/gokul18062006',
        color: '#3b82f6',
    },
    {
        icon: '🎓',
        title: 'Student Connect',
        description:
            'Student collaboration hub enabling peer-to-peer connections, project collaboration, and knowledge sharing. Built to foster academic community engagement and streamline student interactions.',
        tech: ['JavaScript', 'React', 'Node.js'],
        github: 'https://github.com/gokul18062006/student-connect',
        color: '#f59e0b',
    },
    {
        icon: '📊',
        title: 'Data Analytics Dashboards',
        description:
            'Interactive dashboards for business insights with KPIs, trends, and visual analytics. Built with Power BI and Python to transform raw data into compelling visual stories for stakeholder decision-making.',
        tech: ['Power BI', 'Python', 'Excel', 'Data Visualization'],
        github: 'https://github.com/gokul18062006',
        color: '#06b6d4',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -5 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

export default function Projects() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">Projects</p>
                    <h2 className="section-title">
                        Featured <span>Work</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {projects.map((project) => (
                        <motion.div
                            className="project-card"
                            key={project.title}
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            style={{
                                borderTopColor: project.color,
                            }}
                        >
                            <div
                                className="project-icon"
                                style={{
                                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                                }}
                            >
                                {project.icon}
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t) => (
                                    <span className="tech-badge" key={t}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    ⭐ GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
