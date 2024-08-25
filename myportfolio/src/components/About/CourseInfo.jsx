import React from "react";
import "./CourseInfo.css"; // Import your CSS file

const CourseInfo = ({ courses }) => {
  return (
    <div className="course-info">
      <h1>Courses & Certifications</h1>
      {courses.map((course, index) => (
        <div key={index} className="course-info__item">
          <div className="course-info__name">{course.name}</div>
          <div className="course-info__details">
            <div className="course-info__provider">{course.provider}</div>
            <div className="course-info__year">{course.year}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseInfo;
