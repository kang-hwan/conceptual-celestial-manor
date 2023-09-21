import React from "react";
import HeroSection from "../Components/HeroSection";
import celestialStar from "../Images/celestialStar.svg";
import AccomInfoCard from "../Components/AccomInfoCard";
import { classicData, classicHighlight } from "../data/classicData";
import Footer from "../Components/Footer";
import HighlightA from "../Components/HighlightA";
import classicHero from "../Images/classicRange/classicHero.png";
import classicNews from "../Images/classicRange/classicHighlightB.png";

const ClassicCollection = () => {
  return (
    <div className="classic-collection-page">
      <div className="classic-collection-container">
        <HeroSection asset={classicHero} />
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
        <div className="classic-news-section">
          <div className="classic-news-section__img">
            <img src={classicNews} alt="classic-news" />
          </div>
          <div className="classic-news-section__body">
            <h1 className="typo-h1">In the News</h1>
            <p className="typo-subheading">Modern Times Australia</p>
            <p className="typo-b3">
              "Modern touches can be found in the thoughtfully curated amenities
              throughout the suite, whether it is the luxurious Frette bedding,
              exquisite Legle porcelain tableware, Bang & Olufsen sound system,
              or even the tailor made Maison 21G scent that permeates the air.
            </p>
            <p className="typo-b3">
              Celestial Manor* takes the premise of "home away from home" very
              seriously, and the same attention to detail carries through to the
              bathroom space, where you can retreat for some pampering and self
              care."
            </p>
            <a className="typo-link" href="/">
              View Article
            </a>
          </div>
        </div>
        <div className="classic-highlightA">
          <HighlightA data={classicHighlight} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClassicCollection;
