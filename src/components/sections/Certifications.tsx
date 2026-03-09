import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

const PythonLogo = () => (
    <svg viewBox="0 0 256 255" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="pyA" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
                <stop offset="0%" stopColor="#387EB8" />
                <stop offset="100%" stopColor="#366994" />
            </linearGradient>
            <linearGradient id="pyB" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
                <stop offset="0%" stopColor="#FFE052" />
                <stop offset="100%" stopColor="#FFC331" />
            </linearGradient>
        </defs>
        <path fill="url(#pyA)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" />
        <path fill="url(#pyB)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" />
    </svg>
);

const JavaLogo = () => (
    <svg viewBox="0 0 256 346" width="22" height="28" xmlns="http://www.w3.org/2000/svg">
        <path fill="#5382A1" d="M82.554 267.473s-13.198 7.675 9.393 10.272c27.369 3.122 41.356 2.675 71.517-3.034 0 0 7.93 4.972 19.003 9.279-67.611 28.977-153.019-1.679-99.913-16.517M74.292 229.659s-14.803 10.958 7.805 13.296c29.236 3.016 52.324 3.263 92.276-4.43 0 0 5.526 5.602 14.215 8.666-81.747 23.904-172.842 1.885-114.296-17.532" />
        <path fill="#E76F00" d="M143.942 165.515c16.66 19.18-4.377 36.44-4.377 36.44s42.301-21.837 22.874-49.183c-18.144-25.5-32.059-38.172 43.268-81.858 0 0-118.238 29.53-61.765 94.6" />
        <path fill="#5382A1" d="M233.364 295.442s9.767 8.047-10.757 14.273c-39.026 11.823-162.432 15.393-196.714.471-12.323-5.36 10.787-12.8 18.056-14.362 7.581-1.644 11.914-1.337 11.914-1.337-13.705-9.655-88.583 18.957-38.034 27.15 137.853 22.356 251.292-10.066 215.535-26.195M88.9 190.48s-62.771 14.908-22.228 20.323c17.118 2.292 51.243 1.774 83.03-.89 25.978-2.19 52.063-6.85 52.063-6.85s-9.16 3.923-15.787 8.448c-63.744 16.765-186.886 8.966-151.435-8.183 29.981-14.492 54.358-12.848 54.358-12.848M201.506 253.422c64.8-33.672 34.839-66.03 13.927-61.67-5.126 1.066-7.411 1.99-7.411 1.99s1.903-2.98 5.537-4.27c41.37-14.545 73.187 42.897-13.355 65.647 0 0 1.003-.895 1.302-1.697" />
        <path fill="#E76F00" d="M162.439.371s35.887 35.9-34.037 91.101c-56.071 44.282-12.786 69.53-.023 98.377-32.73-29.53-56.75-55.526-40.635-79.72C111.395 74.612 176.918 57.393 162.439.37" />
        <path fill="#5382A1" d="M95.268 344.665c62.199 3.982 157.712-2.209 159.974-31.64 0 0-4.348 11.158-51.404 20.018-53.088 9.99-118.564 8.824-157.399 2.421 0 0 7.95 6.58 48.829 9.201" />
    </svg>
);

interface Certification {
    icon: ReactNode;
    title: string;
    issuer: string;
}

const certifications: Certification[] = [
    {
        icon: '📊',
        title: 'Power BI Data Analyst',
        issuer: 'Microsoft Certified',
    },
    {
        icon: <PythonLogo />,
        title: 'Python Programming',
        issuer: 'Cisco Certified',
    },
    {
        icon: <JavaLogo />,
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
