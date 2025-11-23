import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Saket Gupta. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/saketg0210" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/saket-gupta97" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://twitter.com/saketg0210" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
