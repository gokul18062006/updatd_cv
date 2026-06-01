import { useRef } from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        icon: '🤖',
        title: 'AI Code Review Agent',
        image: '/project-codereview.png',
        description:
            'AI-powered system to analyze source code and generate intelligent improvement suggestions. Uses LLM-based analysis to detect logical errors, inefficiencies, and poor coding practices with a modular, scalable architecture for multi-language evaluation.',
        tech: ['Python', 'LangChain', 'LLMs', 'APIs'],
        github: 'https://github.com/gokul18062006/code_review_agent',
        color: '#10b981',
    },
    {
        icon: '🔐',
        title: 'Legal Document Analyzer',
        image: '/project-legal.png',
        description:
            'AI-based application to summarize legal documents and extract key clauses using NLP. Implements automated summarization pipelines, Named Entity Recognition (NER), and backend APIs for real-time document processing.',
        tech: ['Python', 'NLP', 'FastAPI', 'React', 'TypeScript', 'RAG', 'LLaMA'],
        github: 'https://github.com/gokul18062006',
        color: '#8b5cf6',
    },
    {
        icon: '🛍️',
        title: 'Artisan Connect Marketplace',
        image: '/project-artisan.png',
        description:
            'Full-stack marketplace platform connecting artisans with customers through digital storefronts. Implemented authentication, dynamic product listings, and responsive UI to help small-scale artisans reach wider audiences.',
        tech: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'MongoDB'],
        github: 'https://github.com/gokul18062006',
        color: '#3b82f6',
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

function TiltCard({ project }: { project: typeof projects[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        const spotlight = spotlightRef.current;
        if (!card || !spotlight) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(139, 92, 246, 0.15), transparent 60%)`;
        spotlight.style.opacity = '1';
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        const spotlight = spotlightRef.current;
        if (!card || !spotlight) return;

        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        spotlight.style.opacity = '0';
    };

    return (
        <motion.div
            className="project-card tilt-card"
            ref={cardRef}
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                borderTopColor: project.color,
            }}
        >
            <div className="tilt-spotlight" ref={spotlightRef} />
            <div className="project-image-wrapper">
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                />
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
    );
}

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
                        <TiltCard key={project.title} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
