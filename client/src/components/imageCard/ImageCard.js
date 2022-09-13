import React from "react";

import "./imageCard.css";

function ImageCard() {
  return (
    <div className="imageCard-container">
      <div className="imageCard-background">
        <div className="imageCard-content">
          <h3>Armed Pc Gamer</h3>
          <p>Choose your pc and play!</p>
          <button type="button" className="btn">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
