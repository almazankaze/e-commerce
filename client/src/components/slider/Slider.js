import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./slider.css";

import { data } from "../../data/offers.js";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  const swiper = useSwiper();

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="mySwiper"
    >
      {data.map((card) => (
        <SwiperSlide key={card.id}>Slide 1</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
