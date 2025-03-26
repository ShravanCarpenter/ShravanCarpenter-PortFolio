import { useState, useEffect } from 'react';
import gsap from 'gsap'; // Import GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { GoChevronUp } from "react-icons/go";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import ContactPage from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🚀 Apply GSAP Scroll Animations
  useEffect(() => {
    gsap.utils.toArray(".scroll-section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50, // Moves section upwards as you scroll
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Hero className="scroll-section" />
      <About className="scroll-section" />
      <Skills className="scroll-section" />
      <Projects className="scroll-section" />
      <Education className="scroll-section" />
      <ContactPage className="scroll-section" />
      <Footer />

      {/* Back to Top Button */}
      {showTopBtn && (
        <div className="back-to-top-wrapper" onClick={scrollToTop}>
          <div className="back-to-top">
            <GoChevronUp className="icon" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

