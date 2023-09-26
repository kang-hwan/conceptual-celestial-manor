import React from "react";

const CardSlider = ({ title, data }) => {
  return (
    <div className="cardSlider">
      <h1 className="typo-h1">{title}</h1>
      <div className="cardSlider-container">
        {data.map((item) => (
          <div className="card-item">
            <img src={item.img} />
            <h4 className="typo-h4">{item.title}</h4>
            <p className="typo-b3">{item.description}</p>
            <a className="typo-link">Discover More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
