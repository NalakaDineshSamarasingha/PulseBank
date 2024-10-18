import React from 'react';
import Slider from 'react-slick';
import Card from '../Card/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Campaign.css'; 

function Campaign({data}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='slider-container'>
      <div className="campaign-slider">
      <h2 className='slider-title'>Upcomming <span>Blood</span>  Donation Campaign</h2>
        <Slider {...settings}>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Campaign;
