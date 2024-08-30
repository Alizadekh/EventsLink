import React from "react";
import "../../assets/styles/Destinations.css";
import Ibiza from "../../assets/images/Main/Ellipse 1.png";
import Paris from "../../assets/images/Main/Ellipse 2.png";
import Dubai from "../../assets/images/Main/Ellipse 3.png";
import Portofino from "../../assets/images/Main/Ellipse 4.png";

function Destinations() {
  const destinationsData = [
    {
      name: "Ibiza",
      imageSrc: Ibiza,
    },
    {
      name: "Paris",
      imageSrc: Paris,
    },
    {
      name: "Dubai",
      imageSrc: Dubai,
    },
    {
      name: "Portofino",
      imageSrc: Portofino,
    },
  ];

  return (
    <div>
      <div className="content">
        <div className="title">
          <h2>Popular destinations</h2>
        </div>
        <div className="destinations">
          {destinationsData.map((destination, index) => (
            <div className="destination" key={index}>
              <img src={destination.imageSrc} alt={destination.name} />
              <h3>{destination.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
