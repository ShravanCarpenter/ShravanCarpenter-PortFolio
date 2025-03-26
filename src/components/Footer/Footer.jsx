import React from 'react';
import {
    Instagram,
    Linkedin,
    Github,
    Heart,
    MessageCircle
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        {
            Icon: Instagram,
            link: 'https://www.instagram.com/_shrawnnn_',
            name: 'Instagram'
        },
        {
            Icon: Linkedin,
            link: 'https://linkedin.com/in/shravan-carpenter-26046b248',
            name: 'LinkedIn'
        },
        {
            Icon: Github,
            link: 'https://github.com/ShravanCarpenter',
            name: 'GitHub'
        }
    ];

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-bottom">
                    <div className="footer-social-icons">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                                aria-label={social.name}
                            >
                                <social.Icon size={24} />
                            </a>
                        ))}
                    </div>

                    <div className="footer-copyright">
                        <p>
                            Created with <Heart className="heart-icon" size={20} /> by Shravan Carpenter
                            <span className="copyright-year">© {currentYear}</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;