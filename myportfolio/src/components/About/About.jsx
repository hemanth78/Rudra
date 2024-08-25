import React from "react";
import "./About.css";
import SkillsTable from "./SkillsTable";
import CourseInfo from "./CourseInfo";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const About = () => {
  const text = "Hemanth Sayimpu About Me Frontend Developer ";
  const repeatedText = text.repeat(4); // Repeat the text to cover the scroll area
  const skills = ["HTML", "CSS/SCSS", "JavaScript", "ReactJs", "NodeJs", "MERN", "Eager to learn and adapt to new technologies."];
  const courses = [
    { name: "The Complete Web Development Bootcamp", provider: "Udemy", year: "2022" },
    { name: "User Experience Design Essentials", provider: "Udemy", year: "2023" },
  ];

  return (
    <div className="about">
      <div className="scroll-container">
        <div className="scroll-line">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={`scroll-text ${index % 2 === 0 ? "odd" : "even"}`}>
              {repeatedText}
            </div>
          ))}
        </div>
      </div>
      <div className="about__content">
        <h4>About</h4>
        <p>
          Experienced Frontend Developer creating high-quality web applications that balance functionality and visual appeal. With a global
          perspective, I'm eager to explore innovative approaches and grow my skills. Feel free to reach out—I'm open for new, exciting opportunities!
        </p>
      </div>
      <SkillsTable items={skills} />
      <div className="about__learning-journey">
        <h2>My Learning Journey</h2>
        <p>
          Additionally, I've earned a few certificates, emphasizing my dedication to continual learning and skill development. I'm always open to new
          learning opportunities, eager to enhance my skills even further.
        </p>
      </div>
      <CourseInfo courses={courses} />
      <Projects/>
      <Contact />
    </div>
  );
};

export default About;
