import React from "react";
import largeLogo from "../Images/largeLogo-footer.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <img src={largeLogo} />
        <p>
          Conceptual UI/UX Hotel Booking System. For portfolio use only. <br />
          This website/app is not intended for commercial purposes, and the
          content provided is without warranty.
        </p>
      </div>
    </div>
  );
}
