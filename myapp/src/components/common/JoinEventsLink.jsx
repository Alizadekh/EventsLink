import React from "react";
import "../../assets/styles/Join.css";
import Group from "../../assets/images/Main/Group.svg";

function JoinEventsLink() {
  return (
    <div className="signInfo">
      <div>
        <h3>Join Eventslink</h3>
        <p>
          People use Eventslink to meet new people, learn new things, find
          support, get out of their comfort zones, and pursue their passions,
          together. Membership is free.
        </p>
        <button>Sign up</button>
      </div>
      <img src={Group} alt="Group" />
    </div>
  );
}

export default JoinEventsLink;
