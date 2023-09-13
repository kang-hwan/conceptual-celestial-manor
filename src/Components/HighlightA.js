import React from "react";
import celestialStar from "../Images/celestialStar.svg";

const HighlightA = ({ data }) => {
  return (
    <div className="highlight-typeA">
      <div className="highlight-typeA-body">
        <div className="highlight-typeA-body__featureTag">
          <img src={celestialStar} alt="highlight-typeA" /> {data.tag}
        </div>
        <h4 className="typo-h4">{data.title1}</h4>
        {/* <h4 className="typo-h4">{data.title2}</h4> */}
        <p className="typo-b3">{data.body1}</p>
        <p className="typo-b3">{data.body2}</p>
        <a className="typo-link" href="/">
          {data.link}
        </a>
      </div>
      <div className="highlight-typeA-img">
        <img src={data.image} alt="highlight-img" />
      </div>
    </div>
  );
};

export default HighlightA;
