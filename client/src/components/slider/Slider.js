import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Card from "../card/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./slider.css";

import { data } from "../../data/offers.js";

// import required modules
import { Autoplay } from "swiper";

const Slider = () => {
  const swiper = useSwiper();

  return (
    <Swiper
      spaceBetween={20}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="mySwiper"
    >
      {data.map((card) => (
        <SwiperSlide key={card.id}>
          <Card
            name={card.name}
            desc={card.desc}
            dprice={card.dprice}
            oprice={card.oprice}
            percent={card.percentOff}
            rating={card.rating}
            inStock={card.inStock}
            img={card.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
