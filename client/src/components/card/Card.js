import React from "react";
import Review from "../other/Review";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import "./card.css";

function Card({ name, desc, dprice, oprice, percent, rating, inStock, img }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt="product-img" />
        <div className="card-percent">{percent}% OFF</div>
        <div className="card-corner-btns">
          <div className="card-btn">
            <FavoriteBorderIcon />
          </div>
          <div className="card-btn">
            <VisibilityOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="card-details">
        <div className="card-bonus-details">
          <Review />
          <div className={inStock ? "card-stock" : "card-stock card-soldout"}>
            {inStock ? "INSTOCK" : "SOLDOUT"}
          </div>
        </div>
        <h5 className="overflow-text mb-small">{name}</h5>
        <p className="card-desc overflow-text-2 mb-small">{desc}</p>
        <div className="card-sizes mb-small">
          <h4>Size: </h4>
          <p>S</p>
          <p>M</p>
          <p>L</p>
          <p>XL</p>
        </div>
        <div className="card-colors mb-small">
          <div className="card-color c-red"></div>
          <div className="card-color c-blue"></div>
          <div className="card-color c-green"></div>
          <div className="card-color"></div>
        </div>
        <div className="card-price mb-small">
          <h3>${dprice ? dprice : oprice}</h3>
          {dprice ? <p className="original-price">${oprice}</p> : ""}
        </div>
        <button className="btn full-btn">View Details</button>
      </div>
    </div>
  );
}

export default Card;
