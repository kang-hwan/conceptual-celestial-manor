import React, { useState, useEffect } from "react";
import "../scss/App.css";
import { Link } from "react-router-dom";
import headerLogoMobile from "../Images/header-logo-mobile.svg";
import headerLogoDesktop from "../Images/celestialManorLogo.svg";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  function isActive() {
    setToggle(!toggle);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.onscroll) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="header-wrapper--desktop">
        <div className="header-logo">
          <img src={headerLogoDesktop} alt="main-logo" />
        </div>
        <div className={isScrolled ? "header-menu" : "header-menu show"}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/accommodation">Accommodation</Link>
            </li>
            <li>
              <Link to="/eatAndDrink">Eat & drink</Link>
            </li>
            <li>
              <Link to="/">See & Do</Link>
            </li>
            <li>
              <Link to="/">Our Story</Link>
            </li>
          </ul>
        </div>
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
                <Link to="/">Accommodation</Link>
              </li>
              <li>
                <Link to="/">Eat & drink</Link>
              </li>
              <li>
                <Link to="/">See & Do</Link>
              </li>
              <li>
                <Link to="/">Our Story</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
