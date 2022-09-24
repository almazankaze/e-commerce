import React from "react";

import "./imageCard.css";

function ImageCard({ src, title, desc }) {
  const backgroundImg = {
    backgroundImage: `linear-gradient(
      to bottom,
      rgba(17, 17, 17, 0.75),
      rgba(255, 255, 255, 0)
    ),url(${src})`,
  };

  return (
    <div className="imageCard-container">
      <div className="imageCard-background" style={backgroundImg}>
        <div className="imageCard-content">
          <h3>{title}</h3>
          <p>{desc}</p>
          <button type="button" className="btn">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
