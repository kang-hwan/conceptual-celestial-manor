import React, { useState } from "react";

const CardSlider = ({ title, data }) => {
  const [position, setPosition] = useState(0);

  const handleLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const handleRight = () => {
    if (position < 2) {
      setPosition(position + 1);
    }
  };

  const getClassName = () => {
    console.log("Current Position:", position);
    switch (position) {
      case 0:
        return "cardSlider-container";
      case 1:
        return "cardSlider-container center";
      case 2:
        return "cardSlider-container end";
      default:
        return "cardSlider-container";
    }
  };

  return (
    <div className="cardSlider">
      <h1 className="typo-h1">{title}</h1>
      <div className="cardSlider-wrapper">
        <div className="card-controller-left" onClick={handleLeft}></div>
        <div className={getClassName()}>
          {data.map((item) => (
            <div className="card-item">
              <img src={item.img} alt="event & shows" />
              <h4 className="typo-h4">{item.title}</h4>
              <p className="typo-b3">{item.description}</p>
              <a className="typo-link" href="/">
                Discover More
              </a>
            </div>
          ))}
        </div>
        <div className="card-controller-right" onClick={handleRight}></div>
      </div>
    </div>
  );
};

export default CardSlider;
