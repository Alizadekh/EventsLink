import React, { useRef } from "react";
import Slider from "react-slick";
import "../../assets/styles/PopularEvents.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Calendar from "../../assets/svg/calendar.svg";
import Check from "../../assets/svg/check-circle.svg";
import Ticket from "../../assets/svg/ticket.svg";
import ArtImg from "../../assets/images/Main/image-1.png";
import MusicImg from "../../assets/images/Main/image-2.png";
import FoodImg from "../../assets/images/Main/image-3.png";
import DreamImg from "../../assets/images/Main/image-4.png";
import Arrow from "../../assets/svg/arrow.svg";
import Heart from "../../assets/svg/heart.svg";

function PopularEvents() {
  const sliderRef = useRef(null);

  const eventsData = [
    {
      title: "Art & Wine",
      date: "MON, JUL 21 ● 4:00 PM",
      attendees: "18 going",
      price: 15,
      imageSrc: `${ArtImg}`,
    },
    {
      title: "Outdoor Yoga Session",
      date: "MON, JUL 21 ● 4:00 PM",
      attendees: "18 going",
      price: 15,
      imageSrc: `${MusicImg}`,
    },
    {
      title: "Food Truck Festival",
      date: "MON, JUL 21 ● 4:00 PM",
      attendees: "18 going",
      price: 15,
      imageSrc: `${FoodImg}`,
    },
    {
      title: "Dream Fest",
      date: "MON, JUL 21 ● 4:00 PM",
      attendees: "18 going",
      price: 15,
      imageSrc: `${DreamImg}`,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="popular_events_container">
      <div className="leftArrow">
        <img
          src={Arrow}
          alt="Left Arrow"
          onClick={() => sliderRef.current.slickPrev()}
        />
      </div>
      <div className="slider_wrapper">
        <div className="popular_events_title">
          <h3>Popular events near you</h3>
          <span>See all</span>
        </div>
        <Slider className="events" ref={sliderRef} {...settings}>
          {eventsData.map((event, index) => (
            <div className="event" key={index}>
              <img src={event.imageSrc} alt={`${event.title} image`} />
              <div className="like">
                <img src={Heart} alt="" />
              </div>
              <div className="info">
                <h3>{event.title}</h3>
                <p>
                  <img src={Calendar} alt="Calendar Icon" />
                  {event.date}
                </p>
                <p>
                  <img src={Check} alt="Check Icon" />
                  {event.attendees}
                </p>
                <p>
                  <img src={Ticket} alt="Ticket Icon" />$
                  <span>{event.price}</span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="rightArrow">
        <img
          src={Arrow}
          alt="Right Arrow"
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>
    </div>
  );
}

export default PopularEvents;
