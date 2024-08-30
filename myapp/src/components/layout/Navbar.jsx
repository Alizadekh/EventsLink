import React from "react";
import "../../assets/styles/Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import SearchIcon from "../../assets/svg/SearchIcon";
import AccountIcon from "../../assets/svg/AccountIcon";
import BasketIcon from "../../assets/svg/BasketIcon";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  return (
    <>
      <div className="navigationBar">
        <div className="navigationBarContent">
          <div>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
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
              </ul>
            </nav>
          </div>
          <div>
            <div>
              <select name="" id="">
                <option value="EN">EN</option>
                <option value="AZ">AZ</option>
                <option value="RU">RU</option>
              </select>
            </div>
            <div className="actions">
              <button>
                <SearchIcon />
              </button>
              <button>
                <AccountIcon />
              </button>
              <button>
                <BasketIcon />
              </button>
            </div>
            <div>
              <IoMdMenu className="menuIcon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
