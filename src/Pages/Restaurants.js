import React from "react";
import HeroSection from "../Components/HeroSection";
import restaurantHeroImg from "../Images/restaurantPage/restaurantHeroImg.png";
import celestialStar from "../Images/celestialStar.svg";
import RestaurantCard from "../Components/RestaurantCard";
import Footer from "../Components/Footer";

const Restaurants = () => {
  return (
    <div className="restaurants-page">
      <div className="restaurants-page-container">
        <HeroSection asset={restaurantHeroImg} />
        <div className="restaurant-introA-section">
          <img
            src={celestialStar}
            alt="celestialStar"
            className="celestial-star"
          />
          <h1 className="typo-h1">Restaurants at Celestial Manor*</h1>
          <p className="typo-b1 paragraph">
            Wander into a world of wonder. Where new perspectives, creative
            inspiration and multisensorial experiences collide ― from
            interactive exhibitions to world-class shows and events. Plan your
            trip to make the most of our year-long calendar of thoughtfully
            curated festivals.
          </p>
        </div>
        <div className="card-section">
          <RestaurantCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Restaurants;
