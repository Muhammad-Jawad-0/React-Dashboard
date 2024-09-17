import React from "react";
import ProfileHeader from "./ProfileHeader";
import "../styles/profile.css";
import userImg from "../assets/cv-image.jpeg";
import { BiBook } from "react-icons/bi";

const courses = [
  {
    title: "HTML / CSS",
    duration: "2 Hours",
    icon: <BiBook />,
  },
  {
    title: "Javascript",
    duration: "2 Hours",
    icon: <BiBook />,
  },
  {
    title: "React.js",
    duration: "2 Hours",
    icon: <BiBook />,
  },
];

function Profile() {
  return (
    <div className="profile">
      <ProfileHeader />

      <div className="user-profile">
        <div className="user-detail">
          <img src={userImg} alt="" />
          <h3 className="username">Muhammad Jawad</h3>
          <span className="profession">Teaching</span>
        </div>

        <div className="user-courses">
          {courses.map((v, i) => (
            <div className="course">
              <div className="course-detail">
                <div className="course-cover">{v.icon}</div>
                <div className="course-name">
                  <h5 className="title">{v.title}</h5>
                  <span className="duration">
                    {v.duration}
                  </span>
                </div>
              </div>
              <div className="action">:</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
