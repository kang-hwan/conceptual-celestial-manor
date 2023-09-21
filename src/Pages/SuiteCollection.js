import React from "react";
// ! component
import HeroSection from "../Components/HeroSection";
import AccomInfoCard from "../Components/AccomInfoCard";
import HighlightA from "../Components/HighlightA";
import Footer from "../Components/Footer";

// ! data
import { suiteData, suiteHighlight } from "../data/suiteData";
import { AccomCarouselAImgs } from "../data/roomsData";

// ! images
import celestialStar from "../Images/celestialStar.svg";
import suiteHero from "../Images/suiteRange/suiteHero.png";
import suiteBanner from "../Images/suiteRange/suiteBanner.png";
import CarouselA from "../Components/CarouselA";

const SuiteCollection = () => {
  return (
    <div className="suite-collection-page">
      <div className="suite-collection-container">
        <HeroSection asset={suiteHero} />
        <div className="suite-introA-section">
          <img
            src={celestialStar}
            alt="celestialStar"
            className="celestial-star"
          />
          <h1 className="typo-h1">Celestial's Suite Collection*</h1>
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
        <div className="suite-range-section">
          <h1 className="typo-h1">The Deluxe Series</h1>
          <AccomInfoCard data={suiteData} />
        </div>
        <div className="suite-introB-section">
          <div className="suite-introB-section-image">
            <img src={suiteBanner} alt="suite-banner" />
          </div>
          <div className="suite-introB-section-body">
            <h1 className="typo-h1">Retreat into your Private Santuary</h1>
            <p className="typo-b1 paragraph">
              Here, every moment of your stay is a thoughtfully curated
              experience. Our three collections each offer a unique selection of
              rooms and suites, meticulously designed and tailored to your
              individual needs and desires. Wake up to spectacular views of your
              choice ― Gardens by the Bay, the idyllic sea or the city skyline.
              Enjoy privileged access to our world-famous rooftop infinity pool.
              Indulge in a world of dining, shopping and entertainment options
              available right at your doorstep.
            </p>
          </div>
        </div>
        <div className="suite-carousel-section">
          <CarouselA
            title={"Epitome of Indulgence"}
            data={AccomCarouselAImgs}
          />
        </div>
        <div className="suite-highlightA">
          <HighlightA data={suiteHighlight} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuiteCollection;
