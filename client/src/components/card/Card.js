import React from "react";

import "./card.css";

function Card({
  name,
  desc,
  dprice,
  oprice,
  percentOff,
  rating,
  inStock,
  img,
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt="product-img" />
      </div>
      <div className="card-details">
        <h5 className="overflow-text">{name}</h5>
        <p className="overflow-text-2">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
