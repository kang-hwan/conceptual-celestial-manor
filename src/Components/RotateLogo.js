import React, { useState, useRef } from "react";
import heroStar from "../Images/home-star.png";

const RotateLogo = () => {
  const [angle, setAngle] = useState(0);
  const elementRef = useRef(null);

  const handleMouseMove = (event) => {
    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
    setAngle(angle);
  };

  return (
    <div
      ref={elementRef}
      onMouseMove={handleMouseMove}
      className="rotatingStarContainer"
    >
      <div
        className="rotatingStar"
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      >
        <img src={heroStar} />
      </div>
    </div>
  );
};

export default RotateLogo;
