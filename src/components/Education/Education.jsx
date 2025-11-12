import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Education.css";

const Education = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="education-section" id="education">
            <h2 className="education-title" data-aos="fade-up">Education</h2>
            <p className="para" data-aos="fade-up">Here is my journey till now</p>

            <div className="education-item" data-aos="fade-up" data-aos-delay="150">
                <h3 className="education-institution">
                    Swami Vivekanand Vidhya Mandir, Hatpipliya <span>| 2019</span>
                </h3>
                <p className="education-degree">
                    10th Standard <br />
                    <span className="highlight-grade">Score: 93.60%</span>
                </p>
            </div>

            <div className="education-item" data-aos="fade-up" data-aos-delay="300">
                <h3 className="education-institution">
                    Shri Uma Vidhya Mandir H. S. School, Hatpipliya <span>| 2021</span>
                </h3>
                <p className="education-degree">
                    12th Standard <br />
                    <span className="highlight-grade">Score: 94.60%</span>
                </p>
            </div>

            <div className="education-item" data-aos="fade-up" data-aos-delay="450">
                <h3 className="education-institution">
                    Chameli Devi Group Of Institutions, Indore <span>| 2021 - 2025</span>
                </h3>
                <p className="education-degree">
                    B.Tech (Information Technology) <br />
                    <span className="highlight-grade">CGPA: 7.70</span>
                </p>
            </div>
        </section>
    );
};

export default Education;
