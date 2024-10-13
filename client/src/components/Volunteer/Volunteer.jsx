import React from "react";
import './Volunteer.css'
import volunteer from '../../assets/volunteer.jpeg'

function Volunteer() {
  return (
    <div className="image-container">
      <div className="header">
        <p className="title">Become a volunteer</p>
        <p className="description">As a Blood Donor volunteer, you will organize blood donor campaign and engage donors by greeting, registering, answering questions, providing information, and supporting them through the recovery process at the refreshments table.</p>
        <div>
          <button className="btn-on-image">Join as a Volunteer</button>
        </div>
      </div>
      <img src={volunteer} alt="Header Image" className="w-screen" />
    </div>
  );
}

export default Volunteer;
