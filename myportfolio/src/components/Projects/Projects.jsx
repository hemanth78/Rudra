import React, { useEffect } from "react";
import "./Projects.css";
import projectData from "./ProjectsData"; // Ensure this path is correct and that the file exports an array of project data objects

const Projects = () => {
  useEffect(() => {
    // Initialize Swiper after the component mounts
    const swiper = new window.Swiper(".swiper-container", {
      direction: "horizontal", // Horizontal slider
      loop: true,
      speed: 800, // Smoother transition speed
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      effect: "slide", // Use slide effect for smoothness
    });

    // Cleanup on component unmount
    return () => swiper.destroy();
  }, []);

  return (
    <div className="projects-container">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {projectData.map((project) => (
            <div className="swiper-slide" key={project.id}>
              <div
                className="project-card"
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                }}>
                <div className="project-content">
                <h2 >{project.title}</h2>
                  <p>{project.description}</p>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Projects;
