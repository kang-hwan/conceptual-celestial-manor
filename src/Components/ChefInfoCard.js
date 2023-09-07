import React from "react";
import dummyImg from "../Images/dummyImg.png";

const ChefInfoCard = () => {
  return (
    <div className="ChefInfoCardContainer">
      <div className="ChefInfoCard">
        <img src={dummyImg} alt="Classic Range" />
        <h4 className="typo-h4 ">CLASSIC COLLECTION</h4>
        <p>
          The Celestial Classic rooms offer timeless elegance and comfort,
          providing a serene retreat for discerning travelers. Immerse yourself
          in a harmonious blend of luxurious furnishings, soothing color
          palettes, and thoughtfully curated amenities.
        </p>
        <p>
          Experience the perfect balance of refined aesthetics and modern
          conveniences in these well-appointed rooms.
        </p>
        <a className="typo-link" href="https://celestial-manor.netlify.app/">
          Browse Our Celestial Deluxe Collection
        </a>
      </div>
      <div className="ChefInfoCard">
        <img src={dummyImg} alt="Deluxe Range" />
        <h4 className="typo-h4 ">DELUXE COLLECTION</h4>
        <p>
          The Celestial Deluxe rooms elevate your stay to a new level of luxury,
          offering spaciousness and enhanced amenities.
        </p>
        <p>
          Immerse yourself in the sophisticated ambiance of these elegantly
          designed rooms, where every detail has been carefully considered.
        </p>
        <p>
          Indulge in the extra comfort of plush bedding, stylish furnishings,
          and additional features that enhance your overall experience.
        </p>
        <a className="typo-link" href="https://celestial-manor.netlify.app/">
          Browse Our Celestial Deluxe Collection
        </a>
      </div>
      <div className="ChefInfoCard">
        <img src={dummyImg} alt="Suite Range" />
        <h4 className="typo-h4 ">SUITE COLLECTION</h4>
        <p>
          The Celestial Classic rooms offer timeless elegance and comfort,
          providing a serene retreat for discerning travelers. Immerse yourself
          in a harmonious blend of luxurious furnishings, soothing color
          palettes, and thoughtfully curated amenities.
        </p>
        <p>
          Experience the perfect balance of refined aesthetics and modern
          conveniences in these well-appointed rooms.
        </p>
        <a className="typo-link" href="https://celestial-manor.netlify.app/">
          Browse Our Celestial Deluxe Collection
        </a>
      </div>
    </div>
  );
};

export default ChefInfoCard;
