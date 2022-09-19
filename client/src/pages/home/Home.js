import React from "react";
import PicCarousel from "../../components/PicCarousel/PicCarousel";
import ImageCard from "../../components/imageCard/ImageCard";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import "./home.css";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div className="container">
      <div className="home-banner-container">
        <PicCarousel />
        <ImageCard />
      </div>
      <div className="home-perks-container">
        <div className="perk-card">
          <div className="perk-icon">
            <LocalShippingOutlinedIcon />
          </div>
          <div className="perk-info">
            <h4>Free Shipping</h4>
            <p className="desc-text">Orders over $100</p>
          </div>
        </div>
        <div className="perk-card">
          <div className="perk-icon">
            <AccountBalanceWalletOutlinedIcon />
          </div>
          <div className="perk-info">
            <h4>Free Shipping</h4>
            <p className="desc-text">Orders over $100</p>
          </div>
        </div>
        <div className="perk-card">
          <div className="perk-icon">
            <GppGoodOutlinedIcon />
          </div>
          <div className="perk-info">
            <h4>Free Shipping</h4>
            <p className="desc-text">Orders over $100</p>
          </div>
        </div>
        <div className="perk-card">
          <div className="perk-icon">
            <HeadsetMicOutlinedIcon />
          </div>
          <div className="perk-info">
            <h4>Free Shipping</h4>
            <p className="desc-text">Orders over $100</p>
          </div>
        </div>
      </div>

      <section className="home-section">
        <Slider />
      </section>
    </div>
  );
};

export default Home;
