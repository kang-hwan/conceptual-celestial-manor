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

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // desktop--Navbar animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header>
      <div className="header-wrapper--desktop">
        <div className="header-logo">
          <img src={headerLogoDesktop} alt="main-logo" />
        </div>
        <div className={isCollapsed ? "header-menu" : "header-menu show"}>
          <div className="menu-container">
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
                <Link to="/seeAndDo">See & Do</Link>
              </li>
              <li>
                <Link to="/">Our Story</Link>
              </li>
            </ul>
            <a
              className="menu-reserve"
              href="https://celestialmanor-booking.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              RESERVE NOW
            </a>
          </div>
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
