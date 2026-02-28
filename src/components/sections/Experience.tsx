import { motion } from 'framer-motion';

const experiences = [
    {
        company: 'Edify Techno Solutions',
        role: 'Data Science & Data Analysis Intern',
        period: 'Jun 2025 – Jul 2025',
        description:
            'Analyzed and processed real-world datasets, created meaningful visualizations, and generated business insights using Python and Power BI to support data-driven decision-making.',
    },
    {
        company: 'YBI Foundation',
        role: 'Data Science & Machine Learning Intern',
        period: 'Jun 2024 – Jul 2024',
        description:
            'Worked on building predictive machine learning models using Python and performed data cleaning, analysis, and visualization using Pandas to derive actionable insights from structured datasets.',
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">Experience</p>
                    <h2 className="section-title">
                        My <span>Professional</span> Journey
                    </h2>
                </motion.div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            className="timeline-item"
                            key={exp.company}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="timeline-content">
                                <h3 className="timeline-company">{exp.company}</h3>
                                <p className="timeline-role">{exp.role}</p>
                                <p className="timeline-date">📅 {exp.period}</p>
                                <p className="timeline-desc">{exp.description}</p>
                            </div>
                            <div className="timeline-dot" />
                            {/* Spacer for grid */}
                            <div />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
