import React, { useState } from "react";
import "../scss/App.css";
import { Link } from "react-router-dom";
import headerLogoMobile from "../Images/header-logo-mobile.svg";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  function isActive() {
    setToggle(!toggle);
    console.log(toggle);
  }

  return (
    <header>
      <div className="header-wrapper--desktop">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Accomodation</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Our Story</Link>
          </li>
          <li>
            <Link to="/">Eat & drink</Link>
          </li>
          <li>
            <Link to="/">See & Do</Link>
          </li>
        </ul>
        <a href="/" className="nav-booking">
          BOOK NOW
        </a>
      </div>
      <div className="header-wrapper--mobile">
        <div className="header-wrapper__">
          <img src={headerLogoMobile} alt="header-logo-mobile" />
        </div>
        <div className="header-wrapper--mobile__navMenu">
          <a href="https://github.com/kang-hwan">BOOK NOW</a>
          <div className="hamburgerContainer" onClick={isActive}>
            <div className="hamburger">
              <span className="hamburger__Bar"></span>
              <span className="hamburger__Bar"></span>
            </div>
          </div>
          <div className={toggle ? "mobileMenu--active" : "mobileMenu"}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Accomodation</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Our Story</Link>
              </li>
              <li>
                <Link to="/">Eat & drink</Link>
              </li>
              <li>
                <Link to="/">See & Do</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
