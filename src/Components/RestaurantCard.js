import React from "react";
import { restaurantData } from "../data/restaurantPageData";
import celestialStar from "../Images/celestialStar.svg";

const RestaurantCard = () => {
  return (
    <div className="restaurant-card-container">
      {restaurantData.map((item) => (
        <div className="restaurant-card">
          <img src={item.img} alt="restaurant-menu" />
          <h4 className="typo-h4">{item.name}</h4>
          <div className="tag-container">
            {item.category.map((tag) => (
              <span className="restaurant-tag typo-subheading2">{tag} |</span>
            ))}
          </div>
          <p>{item.description}</p>
          <div className="location-tag">
            <img src={celestialStar} alt="celestial star" />
            <span>{item.location}</span>
          </div>
          <button className="btn-primary">reserve now</button>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCard;
