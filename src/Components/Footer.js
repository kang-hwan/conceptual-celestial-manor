import React from "react";
import footerLogoDesktop from "../Images/largeLogo-footer.svg";
import footerLogoMobile from "../Images/footer-logo-mobile.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <img
          src={footerLogoDesktop}
          alt="footer-logo"
          className="footerLogo--desktop"
        />
        <img
          src={footerLogoMobile}
          alt="footer-logo"
          className="footerLogo--mobile"
        />
        <p>
          Conceptual UI/UX Hotel Booking System. For portfolio use only. <br />
          This website/app is not intended for commercial purposes, and the
          content provided is without warranty.
        </p>
      </div>
    </div>
  );
}
