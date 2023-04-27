import React from "react";
import "../scss/App.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
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
    </header>
  );
}
