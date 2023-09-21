import React, { useEffect, useState } from "react";
import paginationActive from "../Images/pagination-active.png";
import paginationDeactivate from "../Images/pagination-deactive.png";

const CarouselA = ({ data, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length); // modulus operator
    }, 4000);

    return () => clearInterval(interval); // Clear the interval when the component is unmounted
  }, [data]);

  return (
    <div className="carouselA">
      {data.map((item, i) => (
        <div
          key={i}
          className={
            currentSlide === i ? "carouselA__img current" : "carouselA__img"
          }
        >
          <img src={item.img} />
        </div>
      ))}
      <h1 className="typo-h1">{title}</h1>
      <div className="carouselA__pagination">
        {data.map((_, i) => (
          <span key={i}>
            <img
              src={currentSlide === i ? paginationActive : paginationDeactivate}
              alt="pagination"
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default CarouselA;
