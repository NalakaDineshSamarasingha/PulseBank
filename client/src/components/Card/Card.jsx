import React from 'react'
import './Card.css'
import Card_Image from '../../assets/card.jpg'

function Card() {
  return (
    <div className="card-container">
    <div className="card-header">
      <p className="Date">JUNE14</p>
      <p className="card-title">Donate <br/> <span>Blood</span> </p>
      <div>
        <button className="btn-on-card">Register Now</button>
      </div>
      <div className='location'>
        <address>No 14,<br/> Katubadda Road, <br/> Moratuwa</address>
      </div>
    </div>
    <img src={Card_Image} alt="Header Image" className="w-screen" />
  </div>
  )
}

export default Card