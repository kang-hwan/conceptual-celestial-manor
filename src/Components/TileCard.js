import React from "react";

const TileCard = ({ title, body1, body2, color, link }) => {
  return (
    <div className="tileCard" style={{ backgroundColor: color }}>
      <div className="tileCard-header">
        <div className="typo-b4">CM</div>
        <div className="typo-b4">ACCOMMODATION</div>
        <div className="typo-b4">*</div>
      </div>
      <div className="tileCard-body">
        <h1 className="typo-h1">{title}</h1>
        <div className="tileCard-body__details">
          <p className="typo-b3">
            The Celestial Classic rooms offer timeless elegance and comfort,
            providing a serene retreat for discerning travelers. Immerse
            yourself in a harmonious blend of luxurious furnishings, soothing
            color palettes, and thoughtfully curated amenities.
          </p>
          <p className="typo-b3">
            Experience the perfect balance of refined aesthetics and modern
            conveniences in these well-appointed rooms.
          </p>
          <a className="typo-link" href={link}>
            Browse Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default TileCard;
