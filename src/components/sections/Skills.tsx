import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Programming',
        icon: '💻',
        skills: ['Python', 'Java', 'SQL', 'TypeScript', 'JavaScript'],
    },
    {
        title: 'Databases',
        icon: '🗄️',
        skills: ['PostgreSQL', 'MongoDB'],
    },
    {
        title: 'Tools & Platforms',
        icon: '🛠️',
        skills: ['Power BI', 'Tableau', 'Git', 'VS Code', 'Postman'],
    },
    {
        title: 'AI / ML Concepts',
        icon: '🧠',
        skills: ['CNNs', 'LLMs', 'RAG', 'NLP', 'Deep Learning', 'Data Analysis'],
    },
    {
        title: 'Frameworks',
        icon: '⚡',
        skills: ['React', 'Next.js', 'FastAPI', 'Tailwind CSS', 'Bootstrap', 'LangChain'],
    },
    {
        title: 'Soft Skills',
        icon: '🤝',
        skills: ['Communication', 'Problem Solving', 'Team Collaboration', 'Leadership'],
    },
];

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
};

const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
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

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            className="skill-category"
                            key={category.title}
                            variants={cardVariants}
                        >
                            <div className="skill-category-header">
                                <div className="skill-category-icon">{category.icon}</div>
                                <h3 className="skill-category-title">{category.title}</h3>
                            </div>
                            <motion.div
                                className="skill-items"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
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
                </motion.div>
            </div>
        </section>
    );
}
