import React from "react";

const HeroSection = ({ asset }) => {
  return (
    <div className="hero-section">
      <img src={asset} />
    </div>
  );
};

export default HeroSection;
