import { motion } from 'framer-motion';

const certifications = [
    {
        icon: '📊',
        title: 'Power BI Data Analyst',
        issuer: 'Microsoft Certified',
    },
    {
        icon: '🐍',
        title: 'Python Programming',
        issuer: 'Cisco Certified',
    },
    {
        icon: '☕',
        title: 'Java Programming',
        issuer: 'Infosys Certified',
    },
    {
        icon: '🤖',
        title: 'Machine Learning',
        issuer: 'Infosys Certified',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function Certifications() {
    return (
        <section className="section" id="certifications">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">Certifications</p>
                    <h2 className="section-title">
                        Professional <span>Credentials</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="certs-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {certifications.map((cert) => (
                        <motion.div
                            className="cert-card"
                            key={cert.title}
                            variants={cardVariants}
                            whileHover={{ y: -6, scale: 1.03 }}
                        >
                            <div className="cert-icon">{cert.icon}</div>
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
