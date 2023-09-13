import React from "react";
import HeroSection from "../Components/HeroSection";
import celestialStar from "../Images/celestialStar.svg";
import AccomInfoCard from "../Components/AccomInfoCard";
import { classicData, classicHighlight } from "../data/classicData";
import Footer from "../Components/Footer";
import HighlightA from "../Components/HighlightA";

const ClassicCollection = () => {
  return (
    <div className="classic-collection-page">
      <div className="classic-collection-container">
        <HeroSection />
        <div className="classic-introA-section">
          <img
            src={celestialStar}
            alt="celestialStar"
            className="celestial-star"
          />
          <h1 className="typo-h1">Celestial's Classic Collection*</h1>
          <p className="typo-b1 paragraph">
            At Celestial Manor, our promise extends beyond exceptional service.
            We're dedicated to creating lasting memories, forging genuine bonds,
            and ensuring that every guest feels like a part of our
            constellation.
          </p>
          <p className="typo-b1 paragraph">
            This commitment is intertwined with our responsibility to the Earth.
            By integrating eco-friendly practices and supporting local
            communities, we aim to offer an experience where indulgence meets
            sustainability. As you revel in our luxurious offerings, you can
            take solace in the fact that the footprint you leave behind is
            minimal. In this celestial abode, we honor both our guests and our
            planet with equal reverence.
          </p>
          <button className="btn-primary">reserve now</button>
        </div>
        <div className="classic-range-section">
          <h1 className="typo-h1">The Classic Series</h1>
          <AccomInfoCard data={classicData} />
        </div>
        <div className="classic-carousel-section">Carousel Section</div>
        <div className="classic-highlightA">
          <HighlightA data={classicHighlight} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClassicCollection;
