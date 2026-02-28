import { motion } from 'framer-motion';

const education = [
    {
        degree: 'B.Tech in Artificial Intelligence & Data Science',
        school: 'Karunya Institute of Technology and Sciences, Coimbatore',
        period: 'Aug 2023 – May 2027',
        details: 'CGPA: 7.9',
    },
    {
        degree: 'HSC (12th Grade)',
        school: 'Brindhavan Matriculation Higher Secondary School',
        period: '2022 – 2023',
        details: 'Percentage: 84%',
    },
    {
        degree: 'SSLC (10th Grade)',
        school: 'Brindhavan Matriculation Higher Secondary School',
        period: '2021',
        details: '',
    },
];

const stats = [
    { number: '24+', label: 'Repositories' },
    { number: '2', label: 'Internships' },
    { number: '4', label: 'Certifications' },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">About Me</p>
                    <h2 className="section-title">
                        Turning <span>Data</span> into Intelligence
                    </h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="profile-photo-wrapper">
                            <img
                                src="/profile.jpg"
                                alt="Gokul P"
                                className="profile-photo"
                            />
                        </div>
                        <p>
                            I'm a B.Tech student specializing in <strong>Artificial Intelligence and Data Science</strong> at Karunya Institute of Technology and Sciences, Coimbatore. With a
                            strong foundation in machine learning, deep learning, and NLP, I build intelligent applications that create real impact.
                        </p>
                        <p>
                            From analyzing complex datasets with Power BI to developing full-stack AI-driven platforms,
                            I enjoy every step of turning raw data into actionable insights. I'm currently exploring LLMs, RAG architectures, and advanced Python development.
                        </p>

                        <div className="about-stats">
                            {stats.map((stat) => (
                                <motion.div
                                    className="stat-item"
                                    key={stat.label}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="education-list"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        {education.map((edu) => (
                            <motion.div className="edu-item" key={edu.degree} variants={itemVariants}>
                                <div className="edu-degree">{edu.degree}</div>
                                <div className="edu-school">{edu.school}</div>
                                <div className="edu-details">
                                    {edu.period} {edu.details && `• ${edu.details}`}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
