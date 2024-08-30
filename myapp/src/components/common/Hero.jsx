import React from "react";
import "../../assets/styles/Hero.css";

function Hero() {
  return (
    <div className="HeroSection">
      <div className="HeroContent">
        <div className="info">
          <h2>Enjoy your city to the fullest</h2>
          <p>
            Find events that match your interests and book your tickets
            effortlessly. From theater shows to sports events, we have it all!
          </p>
        </div>
        <div className="HeroAction">
          <button>Find events</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
