import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
    {
        title: 'Programming',
        icon: '💻',
        color: 'linear-gradient(135deg, #3b82f6, #6366f1)',
        skills: ['Python', 'Java', 'SQL', 'TypeScript', 'JavaScript'],
    },
    {
        title: 'Databases',
        icon: '🗄️',
        color: 'linear-gradient(135deg, #10b981, #059669)',
        skills: ['PostgreSQL', 'MongoDB'],
    },
    {
        title: 'Tools & Platforms',
        icon: '🛠️',
        color: 'linear-gradient(135deg, #f59e0b, #d97706)',
        skills: ['Power BI', 'Tableau', 'Git', 'VS Code', 'Postman'],
    },
    {
        title: 'AI / ML Concepts',
        icon: '🧠',
        color: 'linear-gradient(135deg, #ec4899, #a855f7)',
        skills: ['CNNs', 'LLMs', 'RAG', 'NLP', 'Deep Learning', 'Data Analysis'],
    },
    {
        title: 'Frameworks',
        icon: '⚡',
        color: 'linear-gradient(135deg, #eab308, #f97316)',
        skills: ['React', 'Next.js', 'FastAPI', 'Tailwind CSS', 'Bootstrap', 'LangChain'],
    },
    {
        title: 'Soft Skills',
        icon: '🤝',
        color: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
        skills: ['Communication', 'Problem Solving', 'Team Collaboration', 'Leadership'],
    },
];

const filterTabs = ['All', ...skillCategories.map((c) => c.title)];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5 },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: { duration: 0.3 },
    },
};

const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredCategories =
        activeFilter === 'All'
            ? skillCategories
            : skillCategories.filter((c) => c.title === activeFilter);

    return (
        <section className="section" id="skills">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">Skills & Tools</p>
                    <h2 className="section-title">
                        My <span>Technical</span> Arsenal
                    </h2>
                </motion.div>

                {/* Filter Tabs */}
                <div className="skill-filter-tabs">
                    {filterTabs.map((tab) => (
                        <button
                            key={tab}
                            className={`skill-filter-tab ${activeFilter === tab ? 'active' : ''}`}
                            onClick={() => setActiveFilter(tab)}
                        >
                            {tab}
                            {activeFilter === tab && (
                                <motion.div
                                    className="skill-filter-indicator"
                                    layoutId="skillFilterIndicator"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCategories.map((category) => (
                            <motion.div
                                className="skill-category"
                                key={category.title}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                layout
                            >
                                <div className="skill-category-header">
                                    <div className="skill-category-icon" style={{ background: category.color }}>{category.icon}</div>
                                    <h3 className="skill-category-title">{category.title}</h3>
                                </div>
                                <motion.div
                                    className="skill-items"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {category.skills.map((skill) => (
                                        <motion.span
                                            className="skill-pill"
                                            key={skill}
                                            variants={pillVariants}
                                            whileHover={{ scale: 1.08, y: -3 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
