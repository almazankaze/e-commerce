import React from "react";
import PicCarousel from "../../components/PicCarousel/PicCarousel";
import ImageCard from "../../components/imageCard/ImageCard";

import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="home-banner-container">
        <PicCarousel />
        <ImageCard />
      </div>
    </div>
  );
};

export default Home;
