import React from "react";

const HeroSection = ({ asset }) => {
  return (
    <div className="hero-section">
      <img src={asset} alt="hero-section" />
    </div>
  );
};

export default HeroSection;
