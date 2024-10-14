import React from "react";
import "./AboutCompo.css";
import volunteer from "../../assets/volunteerTeam.jpg"

function AboutCompo() {
  return (
    <div>
      <div className="image-container">
        <div className="about-header">
          <p className="about-title">About Us</p>
          <p className="about-description">
            We are team blood true
          </p>
        </div>
        <img src={volunteer} alt="Header Image" className="w-screen" />
      </div>
    </div>
  );
}

export default AboutCompo;
