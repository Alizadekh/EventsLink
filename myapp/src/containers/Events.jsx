import React from "react";
import Hero from "../components/common/Hero";
import Variety from "../components/common/Variety";
import PopularEvents from "../components/common/PopularEvents";
import UpcomingEvents from "../components/common/UpcomingEvents";
import Destinations from "../components/common/Destinations";
import JoinEventsLink from "../components/common/JoinEventsLink";

function Events() {
  return (
    <div>
      <Hero />
      <Variety />
      <PopularEvents />
      <UpcomingEvents />
      <Destinations />
      <JoinEventsLink />
    </div>
  );
}

export default Events;
