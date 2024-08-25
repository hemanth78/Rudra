import React from "react";
import "./SkillsTable.css"; // Import your CSS file

const SkillsTable = ({ items }) => {
  return (
    <div className="skills-table">
      <table className="skills-table__table">
        <thead>
          <tr>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className={item === "Eager to learn and adapt to new technologies." ? "highlighted-skill" : ""}>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsTable;
