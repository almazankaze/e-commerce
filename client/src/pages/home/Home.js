import React from "react";
import PicCarousel from "../../components/PicCarousel/PicCarousel";
import ImageCard from "../../components/imageCard/ImageCard";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import topImg from "../../img/sec-desktop-g.jpg";
import secDesk from "../../img/sec-desktops.jpg";
import secNote from "../../img/sec-notebooks.jpg";

import "./home.css";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div className="container">
      <div className="home-banner-container">
        <PicCarousel />
        <ImageCard
          src={topImg}
          title="Armed pc gamer"
          desc="Choose your PC and play!"
        />
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
        <h1>Offers</h1>
        <hr></hr>
        <Slider />
      </section>

      <section className="home-section">
        <div className="two-img-container">
          <ImageCard
            src={secDesk}
            title="Notebooks"
            desc="Choose the ideal laptop for you!"
          />
          <ImageCard
            src={secNote}
            title="Desktops"
            desc="Build your PC at the best price!"
          />
        </div>
      </section>

      <section className="home-section">
        <h1>Notebooks</h1>
        <hr></hr>
      </section>

      <section className="home-section">
        <h1>Smartphones</h1>
        <hr></hr>
      </section>
    </div>
  );
};

export default Home;
