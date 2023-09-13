import React from "react";
import { Link } from "react-router-dom";

const AccomInfoCard = ({ data }) => {
  return (
    <div className="info-card-container">
      {data.map((item) => (
        <div className="info-card" key={item.key}>
          <img src={item.image} alt="sample" />
          <h4 className="typo-h4">{item.title}</h4>
          <p className="typo-b3">{item.description1}</p>
          <p className="typo-b3">{item.description2}</p>
          <Link className="typo-link" to={item.path}>
            {item.link}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AccomInfoCard;
