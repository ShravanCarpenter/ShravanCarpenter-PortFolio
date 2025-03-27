import React, { useEffect } from 'react';
import './Hero.css';
import FrontImage from '../../assets/profilepicture.avif';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { GoDownload } from "react-icons/go";

const Hero = () => {
    useEffect(() => {
        // Animation for the skills banner
        const skills = document.querySelectorAll('.skill-item');
        skills.forEach((skill, index) => {
            skill.style.animationDelay = `${index * 0.2}s`;
        });
    }, []);

    // Ribbon text content - repeated for continuous animation
    const ribbonText = "Hii I am Shravan Carpenter, an enthusiastic human being, who want's to do everything in his life. ";
    const repeatedText = Array(4).fill(ribbonText).join('');

    return (
        <div id="home" className="hero-container">
            <div className="hero-content">
                <h2 className="hero-subtitle">Hello world!</h2>
                <h1 className="hero-title">I'm Shravan Carpenter</h1>
                <div className="hero-description">
                    <div className="card">
                        Passionate
                        <div className="loader">
                            <div className="words">
                                <span className="word">Frontend Developer</span>
                                <span className="word">Software Developer</span>
                                <span className="word">Creative Developer</span>
                                <span className="word">Backend Developer</span>
                                <span className="word">Frontend Developer</span>
                            </div>
                        </div>
                        crafting pixel-perfect, responsive
                    </div>
                    interfaces. Focused on clean code, smooth UX, and modern web solutions.
                    Always learning, innovating, and bringing ideas to life.
                </div>

                <div className="hero-links">
                    <a href="#projects" className="get-started-btn">
                        <div className='get-started-btn-text'>View My Work</div>
                        <div className="get-started-btn-arrow-icon"><BsArrowUpRightCircleFill /></div>
                    </a>

                    <a href="https://drive.google.com/file/d/1I2diKRH_FgnW5C3VSXc7QEWSC69VE17z/view?usp=drive_link"
                        className="get-started-btn-1"
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className='get-started-btn-text-1'>Download Resume</div>
                        <div className="get-started-btn-arrow-icon-1"><GoDownload /></div>
                    </a>
                </div>
            </div>

            <div className="hero-image-container">
                <div className="browser-content">
                    <img src={FrontImage} alt='Profile' />
                </div>
            </div>

            {/* Hero Bottom Ribbon */}
            <div className="hero-ribbon-container">
                <div className="hero-running-text">
                    {repeatedText}
                </div>
            </div>
        </div>
    );
};

export default Hero;