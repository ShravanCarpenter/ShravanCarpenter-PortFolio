import React from 'react';
import './Projects.css';
import CollabRoomImage from '../../assets/CollabRoomImage.png';
import ProfitImage from '../../assets/ProfitImage.png';

// Project data structure
const projectsData = [
    {
        id: 1,
        title: "CollabRoom - A Collaborative Learning Platform",
        description: "A collaborative online learning platform that connects students via join virtual study rooms, real-time messaging, document editing, and video conferencing for seamless interactive learning.",
        image: CollabRoomImage,
        tags: ["ReactJS", "NodeJS", "Redux", "CSS"],
        githubLink: "https://github.com/ShravanCarpenter/CollabRoom",
        detailsLink: "#"
    },
    {
        id: 2,
        title: "Solar - Solar & Renewable Website Solution",
        description: "A Yoga Pose Detection and Correction Application that detects and provide feedback based on the pose captured and help users improve their yoga practice.",
        image: ProfitImage,
        tags: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/ShravanCarpenter/Profit",
        detailsLink: "#"
    }
];

// Tag component
const Tag = ({ text }) => (
    <span className="tag">{text}</span>
);

const ProjectCard = ({ project, isEven }) => (
    <div className="project-card">
        <div className={`project-container ${isEven ? 'even' : 'odd'}`}>
            <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                </div>
            </div>
            <div className="project-details">
                <div className="tags">
                    {project.tags.map((tag, index) => (
                        <Tag key={index} text={tag} />
                    ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-actions">
                    <a href={project.githubLink} className="github-btn" target="_blank" rel="noopener noreferrer">
                        <button class="button">
                            <span class="text">Check on GitHub</span>
                            <svg
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 47.94 47.94"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20px"
                                height="20px"
                                class="icon"
                            >
                                <path
                                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
      c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
      c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
      c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
      c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
      C22.602,0.567,25.338,0.567,26.285,2.486z"
                                ></path>
                            </svg>
                        </button>

                    </a>
                </div>
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id='projects' className="portfolio-section">
            <div className="container">
                <div className="section-header">
                    <h2>Let's Have a Look at <span className="highlight">My Portfolio</span></h2>
                    <a href="https://github.com/ShravanCarpenter" className="view-all-btn">View All Projects</a>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            isEven={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;