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
      <div className="home-perks-container">
        <div className="perk-card">
          <div className="perk-info">
            <h4>Free Shipping</h4>
            <p className="desc-text">Orders over $100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
