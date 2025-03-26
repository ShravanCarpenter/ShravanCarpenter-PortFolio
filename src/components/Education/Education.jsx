import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Education.css';

const educationData = [
    {
        id: 1,
        institution: "Swami Vivekanand Vidhya Mandir, Hatpipliya",
        degree: "10th",
        period: "2019",
        grade: "93.60%"
    },
    {
        id: 2,
        institution: "Shri Uma Vidhya Mandir H. S. School, Hatpipliya",
        degree: "12th",
        period: "2021",
        grade: "94.60%"
    },
    {
        id: 3,
        institution: "Chameli Devi Group Of Institutions, Indore",
        degree: "B.Tech - IT",
        period: "2021 - 2025",
        grade: "7.66 CGPA"
    }
];

const Education = () => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const timelineSection = document.getElementById('education');
            if (timelineSection) {
                const sectionTop = timelineSection.offsetTop;
                const sectionHeight = timelineSection.offsetHeight;

                if (
                    scrollPosition + windowHeight >= sectionTop + 100 &&
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    controls.start('visible');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <section id='education' className="education-section">
            <div className="education-container">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="education-section-title"
                >
                    <span className="highlight-text">Education</span> Timeline
                </motion.h2>

                <motion.div
                    className="timeline-container"
                    initial="hidden"
                    animate={controls}
                >
                    {educationData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left-appear' : 'right-appear'}`}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -50 : 50
                            }}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: index % 2 === 0 ? -50 : 50
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.6,
                                        delay: index * 0.2
                                    }
                                }
                            }}
                        >
                            <div className="left-column">
                                <motion.h3
                                    whileHover={{ scale: 1.05, color: '#4e6bff' }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {item.degree}
                                </motion.h3>
                            </div>

                            <div className="timeline-marker">
                                <motion.div
                                    className="dot"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                >
                                    <div className="pulse"></div>
                                </motion.div>
                                <div className="line"></div>
                            </div>

                            <div className="right-column">
                                <motion.p
                                    className="period"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {item.period}
                                </motion.p>
                                <motion.h3
                                    whileHover={{ scale: 1.05, color: '#4e6bff' }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {item.institution}
                                </motion.h3>
                                <motion.p
                                    className="period"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {item.grade}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;