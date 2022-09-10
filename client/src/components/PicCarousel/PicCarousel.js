import React, { useState } from "react";

import banner1 from "../../img/banner-1.jpg";
import banner2 from "../../img/banner-2.jpg";
import banner3 from "../../img/banner-3.jpg";
import "./picCarousel.css";

function PicCarousel() {
  const [activeImg, setActiveImg] = useState(1);

  const nextSlide = () => {
    if (activeImg !== 3) {
      setActiveImg(activeImg + 1);
    } else setActiveImg(1);
  };

  const prevSlide = () => {
    if (activeImg !== 1) {
      setActiveImg(activeImg - 1);
    } else setActiveImg(3);
  };

  const moveDot = (img) => {
    setActiveImg(img);
  };
  return (
    <div className="picCarouselContainer">
      <div className={activeImg === 1 ? "slide active-anim" : "slide"}>
        <img src={banner1} alt="banner of tech" />
      </div>
      <div className={activeImg === 2 ? "slide active-anim" : "slide"}>
        <img src={banner2} alt="banner of tech" />
      </div>
      <div className={activeImg === 3 ? "slide active-anim" : "slide"}>
        <img src={banner3} alt="banner of tech" />
      </div>

      <button type="button" className="btn-slide next" onClick={nextSlide}>
        1
      </button>
      <button type="button" className="btn-slide prev" onClick={prevSlide}>
        2
      </button>

      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            className={
              activeImg === index + 1 ? "sliderDot active-dot" : "sliderDot"
            }
            onClick={() => moveDot(index + 1)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default PicCarousel;
