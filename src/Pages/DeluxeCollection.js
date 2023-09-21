import React from "react";
// ! Component
import HeroSection from "../Components/HeroSection";
import AccomInfoCard from "../Components/AccomInfoCard";
import HighlightA from "../Components/HighlightA";
import Footer from "../Components/Footer";
import CarouselA from "../Components/CarouselA";

// ! Data
import {
  deluxeCarousel,
  deluxeData,
  deluxeHighlight,
} from "../data/deluxeData";
import { AccomCarouselAImgs } from "../data/roomsData";

// ! Images
import celestialStar from "../Images/celestialStar.svg";
import deluxeHero from "../Images/deluxeRange/deluxeHero.png";
import CarouselC from "../Components/CarouselC";

const DeluxeCollection = () => {
  return (
    <div className="deluxe-collection-page">
      <div className="deluxe-collection-container">
        <HeroSection asset={deluxeHero} />
        <div className="deluxe-introA-section">
          <img
            src={celestialStar}
            alt="celestialStar"
            className="celestial-star"
          />
          <h1 className="typo-h1">Celestial's Deluxe Collection*</h1>
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
        <div className="deluxe-carouselA-section">
          <CarouselA
            data={AccomCarouselAImgs}
            title={"A New Level of Luxury"}
          />
        </div>
        <div className="deluxe-carouselB-section">
          <CarouselC title={"See & Do"} data={deluxeCarousel} />
        </div>
        <div className="deluxe-highlightA">
          <HighlightA data={deluxeHighlight} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeluxeCollection;
