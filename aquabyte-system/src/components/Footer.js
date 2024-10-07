import React from 'react';
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Import the CSS file
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Before the line */}
            <div className="footer-top">
                <div className="footer-logo">
                    <h2>AquaByte</h2>
                </div>
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </div>

            {/* After the line */}
            <div className="footer-bottom">
                {/* Language select on the left */}
                <div className="footer-language">
                    <select>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                    </select>
                </div>

                {/* Copyright message in the middle */}
                <div className="footer-copyright">
                    <p>© {new Date().getFullYear()} AquaByte System. All rights reserved</p>
                </div>

                {/* Social media icons on the right */}
                <div className="footer-socials">
                    <a href="https://facebook.com">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://twitter.com">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://instagram.com">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://linkedin.com">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
