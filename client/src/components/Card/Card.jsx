import React from 'react';
import './Card.css';
import Card_Image from '../../assets/card.jpg';

function Card({ date, title, address,district }) {
  const formatDate = (inputDate) => {
    const dateObj = new Date(inputDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    const [month, day] = formattedDate.split(' ');
    return `${month.toUpperCase()} ${day}`;
  };

  return (
    <div className="card-container">
      <div className="card-header">
        <p className="Date">{formatDate(date)}</p>
        <p className="card-title">{title} <br/><span>Blood</span></p>
        <div>
          <button className="btn-on-card">Register Now</button>
        </div>
        <div className="location">
          <address>{address} <br/> {district}</address>
        </div>
      </div>
      <img src={Card_Image} alt="Header Image" className="w-screen" />
    </div>
  );
}

export default Card;
