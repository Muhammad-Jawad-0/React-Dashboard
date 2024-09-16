import React from "react";
import "../styles/teacherList.css";
import Image1 from "../assets/cv-image.jpeg";

const teacher = [
  {
    image: Image1,
    name: "Muhammad Jawad",
    duration: "20 hours lession",
    cost: "100",
  },
  {
    image: Image1,
    name: "Muhammad Jawad",
    duration: "20 hours lession",
    cost: "100",
  },
  {
    image: Image1,
    name: "Muhammad Jawad",
    duration: "20 hours lession",
    cost: "100",
  },
];

function TeacherList() {
  return (
    <div className="teacher-list">
      <div className="list-header">
        <h2>Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <div className="list-container">
        {teacher.map((v, i) => (
          <div className="list" key={i}>
            <div className="teacher-detail">
              <img src={v.image} alt={v.name} />
              <h2>{v.name}</h2>
            </div>
            <span>{v.duration}</span>
            <span>${v.cost}/hr.</span>
            <span className="teacher-todo">:</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherList;
