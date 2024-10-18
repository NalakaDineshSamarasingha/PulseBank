import React from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Campaign.css";

function Campaign({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 card at a time (in a column)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true, // Enable vertical scrolling
    verticalSwiping: true, // Enable vertical swipe for touch devices
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Show 1 card in column on medium screens
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 card on small screens as well
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="campaign-slider">
        <h2 className="slider-title">
          Upcoming <span>Blood</span> Donation Campaign
        </h2>
        <Slider {...settings}>
          {data && data.length > 0 ? (
            data.map((campaign, index) => (
              <div key={index}>
                <Card
                  date={campaign.Date}
                  title="Donate"
                  address={`${campaign.No}, ${campaign.Address}, ${campaign.Town}`}
                />
              </div>
            ))
          ) : (
            <div>No upcoming campaigns</div>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Campaign;
