import React from 'react';
import './About.css';
import AboutImage from '../../assets/Front.png';

const About = () => {
    return (
        <div id="about" className="about-container">
            <div className="about-content">
                <div className="about-content-description">
                    <h2 className="fade-in">About Me</h2>
                    <p className="slide-in">
                        I am a final year IT student, passionate front-end developer who loves building interactive and user-friendly web applications.
                        I enjoy creating visually appealing and responsive designs that enhance user experiences. Bringing ideas to life through clean and efficient
                        code excites me, and I am always eager to explore new technologies to improve my development skills.
                    </p>
                    <p className="slide-in delay-1">
                        In addition to front-end development, I have a strong foundation in programming languages like C++, JavaScript, and React. I am well-versed
                        in Data Structures and Algorithms (DSA), which helps me write optimized and scalable code.
                    </p>
                    <p className="slide-in delay-2">
                        I also have experience working with React.js, Node.js, MongoDB, and Git & Github, enabling me to develop full-stack applications efficiently.
                        Always eager to learn and grow, I strive to stay updated with the latest trends in web development.
                    </p>
                </div>
                <div className="about-content-image">
                    <img
                        src={AboutImage}
                        alt="About Me"
                        className="image-float"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;