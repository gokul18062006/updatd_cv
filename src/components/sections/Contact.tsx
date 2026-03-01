import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

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
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Note: You need to set these environment variables in a .env file
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS environment variables are missing.');
            alert('Please configure EmailJS in the .env file.');
            setIsSubmitting(false);
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, formRef.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    setIsSubmitting(false);
                    setSubmitStatus('success');
                    formRef.current?.reset();
                    setTimeout(() => setSubmitStatus('idle'), 5000);
                },
                (error: any) => {
                    console.error('FAILED...', error.text);
                    setIsSubmitting(false);
                    setSubmitStatus('error');
                    setTimeout(() => setSubmitStatus('idle'), 5000);
                },
            );
    };

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
                        ref={formRef}
                        className="contact-form glass-card"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        onSubmit={sendEmail}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
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
                                name="email"
                                className="form-input"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Tell me about your project or idea..."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn-primary"
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                backgroundColor: submitStatus === 'success' ? '#10b981' : submitStatus === 'error' ? '#ef4444' : ''
                            }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✅ Sent Successfully!' : submitStatus === 'error' ? '❌ Failed to Send' : '✉️ Send Message'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
