import React from "react";
import "./Hero.css";
import Hero_img from "../../assets/HeroImage.png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="left">
        <h2 className="welcome">
          Welcome to <span>P</span>ulse<span>B</span>ank
        </h2>
        <p className="about">
          Connecting hospitals and communities through a seamless blood
          management system. Monitor blood availability in real-time, coordinate
          donation events, and ensure lifesaving resources are always within
          reach. Join us in making a difference in emergency care and blood
          donation efforts.
        </p>
        <div className="button-container">
          <button class="group relative inline-block overflow-hidden rounded border-2  border-[#E70606] px-8 py-3 font-medium text-white bg-[#E70606]">
            <span class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            <span class="relative group-hover:text-[#E70606] ">Donate Blood </span>
          </button>
          <button class="group relative inline-block overflow-hidden rounded border-2 border-[#E70606] px-8 py-3 font-medium text-[#E70606]">
            <span class="absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-[#E70606] opacity-90 transition-all duration-300 ease-out group-hover:w-full"></span>
            <span class="relative group-hover:text-white">Find a Hospital</span>
          </button>
        </div>
      </div>
      <div className="right">
        <img src={Hero_img} className="img" />
      </div>
    </div>
  );
}

export default Hero;
