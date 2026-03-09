import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
    {
        company: 'Edify Techno Solutions',
        role: 'Data Science & Data Analysis Intern',
        period: 'Jun 2025 – Jul 2025',
        description:
            'Analyzed and processed real-world datasets, created meaningful visualizations, and generated business insights using Python and Power BI to support data-driven decision-making.',
        highlights: [
            'Processed 10+ real-world business datasets',
            'Created interactive dashboards with Power BI',
            'Generated weekly analytics reports for stakeholders',
            'Applied data cleaning pipelines using Pandas',
        ],
    },
    {
        company: 'YBI Foundation',
        role: 'Data Science & Machine Learning Intern',
        period: 'Jun 2024 – Jul 2024',
        description:
            'Worked on building predictive machine learning models using Python and performed data cleaning, analysis, and visualization using Pandas to derive actionable insights from structured datasets.',
        highlights: [
            'Built predictive ML models with scikit-learn',
            'Performed EDA on structured datasets',
            'Created data visualizations with Matplotlib & Seaborn',
            'Implemented feature engineering techniques',
        ],
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

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
                            <div
                                className={`timeline-content ${expandedIndex === index ? 'expanded' : ''}`}
                                onClick={() => toggleExpand(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') toggleExpand(index);
                                }}
                            >
                                <h3 className="timeline-company">{exp.company}</h3>
                                <p className="timeline-role">{exp.role}</p>
                                <p className="timeline-date">📅 {exp.period}</p>
                                <p className="timeline-desc">{exp.description}</p>

                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            className="timeline-highlights"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                        >
                                            <div className="highlights-label">Key Highlights</div>
                                            <ul className="highlights-list">
                                                {exp.highlights.map((h) => (
                                                    <motion.li
                                                        key={h}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 }}
                                                    >
                                                        {h}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="timeline-expand-hint">
                                    {expandedIndex === index ? '▲ Collapse' : '▼ Click to expand'}
                                </div>
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
