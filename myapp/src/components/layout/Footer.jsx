import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Footer.css";
import Envelope from "../../assets/svg/envelope.svg";

function Footer() {
  return (
    <div className="footer">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Events</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link>Sign in</Link>
            </li>
          </ul>
        </nav>
        <div className="contactInfo">
          <h2>Eventslink</h2>
          <div className="mail">
            <img src={Envelope} alt="" />
            <p>eventslink@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
