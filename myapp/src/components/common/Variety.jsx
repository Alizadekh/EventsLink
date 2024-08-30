import React from "react";
import "../../assets/styles/Variety.css";
import WorkshopsIcon from "../../assets/svg/workshops.svg";
import ExhibitonsIcon from "../../assets/svg/exhibitions.svg";
import FoodandDrinksIcon from "../../assets/svg/food and drinks.svg";
import HolidaysIcon from "../../assets/svg/holidaysIcon.svg";
import SportsIcon from "../../assets/svg/sports icon.svg";
import ConcertsIcon from "../../assets/svg/concerts.svg";

const varieties = [
  { imgPath: WorkshopsIcon, title: "Workshops" },
  { imgPath: ExhibitonsIcon, title: "Exhibitions" },
  { imgPath: FoodandDrinksIcon, title: "Food & Drinks" },
  { imgPath: HolidaysIcon, title: "Holidays" },
  { imgPath: SportsIcon, title: "Sports" },
  { imgPath: ConcertsIcon, title: "Concerts" },
];

function Variety() {
  return (
    <div className="varieties">
      {varieties.map((variety, index) => (
        <div key={index} className={`variety variety-${index + 1}`}>
          <div>
            <img src={variety.imgPath} alt={variety.title} />
          </div>
          <h3>{variety.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Variety;
