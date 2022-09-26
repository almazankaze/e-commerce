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
import note from "../../img/notebooks/notebooks.jpg";
import phone from "../../img/phones/smartphones.jpg";

import "./home.css";
import Slider from "../../components/slider/Slider";

import { data } from "../../data/offers.js";
import { notebooks } from "../../data/notebooks.js";
import { phones } from "../../data/phones.js";

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
        <Slider slides={4} resSlides={3} data={data} />
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
        <div className="img-slider-container">
          <ImageCard
            src={note}
            title="Notebooks"
            desc="Choose your laptop now!"
          />
          <Slider slides={3} resSlides={3} data={notebooks} />
        </div>
      </section>

      <section className="home-section">
        <h1>Smartphones</h1>
        <hr></hr>

        <div className="img-slider-container">
          <ImageCard
            src={phone}
            title="Smartphones"
            desc="Choose your smartphone now!"
          />
          <Slider slides={3} resSlides={3} data={phones} />
        </div>
      </section>

      <section className="home-section">
        <h1>Categories</h1>
        <hr></hr>
      </section>
    </div>
  );
};

export default Home;
