import React from "react";
import HeroSection from "../Components/HeroSection";
import celestialStar from "../Images/celestialStar.svg";
import { deluxeData, deluxeHighlight } from "../data/deluxeData";
import AccomInfoCard from "../Components/AccomInfoCard";
import Footer from "../Components/Footer";
import HighlightA from "../Components/HighlightA";

const DeluxeCollection = () => {
  return (
    <div className="deluxe-collection-page">
      <div className="deluxe-collection-container">
        <HeroSection />
        <div className="deluxe-introA-section">
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
        <div className="deluxe-range-section">
          <h1 className="typo-h1">The Deluxe Series</h1>
          <AccomInfoCard data={deluxeData} />
        </div>
        <div className="deluxe-carouselA-section">Carousel Type A Section</div>
        <div className="deluxe-carouselB-section">Carousel Type B Section</div>
        <div className="deluxe-highlightA">
          <HighlightA data={deluxeHighlight} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeluxeCollection;
