import React, { useState, useEffect } from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import '../Hero/Hero.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const sections = ["home", "about", "skills", "projects", "education", "contact"];
            let currentSection = "home";

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                <div className="logo-container">
                    <div className="logo-circle">
                        <span className="logo-text">SC</span>
                    </div>
                    <span className="logo-name">Shravan Carpenter</span>
                </div>

                {/* Hamburger Menu */}
                <div
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Navigation Links */}
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" className={`nav-link ${activeSection === "home" ? "active" : ""}`} onClick={closeMenu}>Home</a>
                    <a href="#about" className={`nav-link ${activeSection === "about" ? "active" : ""}`} onClick={closeMenu}>About</a>
                    <a href="#skills" className={`nav-link ${activeSection === "skills" ? "active" : ""}`} onClick={closeMenu}>Skills</a>
                    <a href="#projects" className={`nav-link ${activeSection === "projects" ? "active" : ""}`} onClick={closeMenu}>Projects</a>
                    <a href="#education" className={`nav-link ${activeSection === "education" ? "active" : ""}`} onClick={closeMenu}>Education</a>
                </div>

                {/* Button */}
                <a href="#contact" className="work-with-me-btn">
                    <button className="uiverse">
                        <div className="wrapper">
                            <span>Work with Me</span>
                            <div className="circle circle-12"></div>
                            <div className="circle circle-11"></div>
                            <div className="circle circle-10"></div>
                            <div className="circle circle-9"></div>
                            <div className="circle circle-8"></div>
                            <div className="circle circle-7"></div>
                            <div className="circle circle-6"></div>
                            <div className="circle circle-5"></div>
                            <div className="circle circle-4"></div>
                            <div className="circle circle-3"></div>
                            <div className="circle circle-2"></div>
                            <div className="circle circle-1"></div>
                            <div className="work-with-me-btn-arrow-icon">
                                <BsArrowRightCircleFill />
                            </div>
                        </div>
                    </button>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
