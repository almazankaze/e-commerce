import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../card/Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./slider.css";

import { data } from "../../data/offers.js";

// import required modules
import { Autoplay, Navigation } from "swiper";

const Slider = () => {
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
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Autoplay, Navigation]}
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

      <div className="btn-slide swiper-button-next"></div>
      <div className="btn-slide swiper-button-prev"></div>
    </Swiper>
  );
};

export default Slider;