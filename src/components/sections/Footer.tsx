export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    © {currentYear} Gokul P. Crafted with ❤️ and React + Three.js
                </p>
                <div className="footer-socials">
                    <a
                        href="https://github.com/gokul18062006"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        aria-label="GitHub"
                    >
                        🐙
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gokul-p-772850361/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        aria-label="LinkedIn"
                    >
                        💼
                    </a>
                    <a
                        href="mailto:gokulp1806official@gmail.com"
                        className="footer-social-link"
                        aria-label="Email"
                    >
                        📧
                    </a>
                </div>
            </div>
        </footer>
    );
}
