import React from 'react'
import './DonateHeader.css'
import DonateImage from '../../assets/Donation.jpg'

function DonateHeader() {
  return (
    <div className="help-banner-container">
      <div className="help-banner-content">
        <div className="text-section">
          <p className="highlight-text">You Can Make a Difference</p>
          <h1 className="main-heading">Help people Who need help.</h1>
        </div>
        <div className="image-section">
          <img
            src={DonateImage}
            alt="Donor volunteer"
            className="volunteer-image"
          />
        </div>
      </div>
    </div>
  )
}

export default DonateHeader