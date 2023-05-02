import React, { useState } from "react";
import dropdownBackground1 from "../Images/dropdown-background.svg";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";

export default function DropdownSection() {
  const options = [
    "looking for inspiration",
    "looking for perfect date night",
    "looking for time with family",
    "looking for time with friends",
    "looking to spend my holiday",
  ];

  return (
    <div>
      <div className="section-6-wrapper">
        <div className="dropdown-field">
          I am <span></span>
          <a className="cta-btn">TAKE ME THERE</a>
        </div>
      </div>
    </div>
  );
}
