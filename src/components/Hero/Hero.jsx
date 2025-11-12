import React, { useEffect, useState } from 'react';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import './Hero.css';
import Profilepicture from '../../assets/profilepicture.avif';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Fade in animation on mount
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    // Ribbon text content - repeated for continuous animation
    const ribbonText = "Hi I am Shravan Carpenter, an enthusiastic human being, who wants to do everything in his life. ";
    const repeatedText = Array(4).fill(ribbonText).join('');

    return (
        <div id="home" className={`hero-container ${isVisible ? 'fade-in' : ''}`}>
            <div className="hero-content">
                <h2 className="hero-subtitle">Hello world!</h2>
                <h1 className="hero-title">I'm Shravan Carpenter</h1>

                <div className="hero-description">
                    <div className="description-text">
                        <span className="description-line">
                            Passionate{' '}
                            <span className="loader">
                                <span className="words">
                                    <span className="word">MERN Developer</span>
                                    <span className="word">Software Developer</span>
                                    <span className="word">Creative Developer</span>
                                    <span className="word">Backend Developer</span>
                                    <span className="word">Frontend Developer</span>
                                </span>
                            </span>
                        </span>
                        <span className="description-line">
                            crafting pixel-perfect, responsive interfaces. Focused on clean code, smooth UX, and modern web solutions. Always learning, innovating, and bringing ideas to life.
                        </span>
                    </div>
                </div>

                <div className="hero-links">
                    <a href="#projects" className="get-started-btn">
                        <span className='get-started-btn-text'>View My Work</span>
                        <span className="get-started-btn-arrow-icon">
                            <BsArrowUpRightCircleFill />
                        </span>
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1d6vQwF_ldsRRqTWZ-lq3oyGU1xF4UDH-/view?usp=drivesdk"
                        className="get-started-btn-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className='get-started-btn-text-1'>Download Resume</span>
                        <span className="get-started-btn-arrow-icon-1">
                            <GoDownload />
                        </span>
                    </a>
                </div>
            </div>

            <div className="hero-image-container">
                <div className="browser-content">
                    <div className="image-wrapper">
                        <img
                            src={Profilepicture}
                            alt='Profile'
                        />
                    </div>
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