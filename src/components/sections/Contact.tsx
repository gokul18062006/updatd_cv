import { motion } from 'framer-motion';

const contactLinks = [
    {
        icon: '📧',
        label: 'Email',
        value: 'gokulp1806official@gmail.com',
        href: 'mailto:gokulp1806official@gmail.com',
    },
    {
        icon: '📱',
        label: 'Phone',
        value: '+91-6382253529',
        href: 'tel:+916382253529',
    },
    {
        icon: '🐙',
        label: 'GitHub',
        value: 'github.com/gokul18062006',
        href: 'https://github.com/gokul18062006',
    },
    {
        icon: '💼',
        label: 'LinkedIn',
        value: 'linkedin.com/in/gokul-p',
        href: 'https://www.linkedin.com/in/gokul-p-772850361/',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
    return (
        <section className="section" id="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">Contact</p>
                    <h2 className="section-title">
                        Let's <span>Connect</span>
                    </h2>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                    >
                        <p className="contact-info-text">
                            I'm always open to discussing new opportunities, collaborations,
                            hackathons, or just chatting about AI and technology. Feel free to
                            reach out through any of the channels below!
                        </p>
                        {contactLinks.map((link) => (
                            <motion.a
                                className="contact-link-item"
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                variants={itemVariants}
                                whileHover={{ x: 8 }}
                            >
                                <div className="contact-link-icon">{link.icon}</div>
                                <div>
                                    <div className="contact-link-label">{link.label}</div>
                                    <div className="contact-link-value">{link.value}</div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.form
                        className="contact-form glass-card"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert('Thank you for your message! I\'ll get back to you soon.');
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-input"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="form-textarea"
                                placeholder="Tell me about your project or idea..."
                                required
                            />
                        </div>
                        <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            ✉️ Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
