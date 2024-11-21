import React from 'react';
import './TextBlock.css';

const TextBlockRight = ({ title, text, overlayImage }) => {
  return (
    <div className="text-block-wrapper">
      {/* Circle with blush pink background */}
      <div className="overlapping-circle circle-right"></div>

      {/* Image on top of the circle */}
      <img
        src={process.env.PUBLIC_URL + overlayImage} // Pull image from public folder
        alt="Overlay"
        className="overlay-image circle-right"
      />

      {/* Fixed-height text block */}
      <div className="text-block text-block-right">
        <h2 className="text-block-title">{title}</h2>
        <div className="text-content text-content-right">{text}</div>
      </div>
    </div>
  );
};

export default TextBlockRight;