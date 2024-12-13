import React from 'react';
import './TextBlock.css';

const TextBlockLeft = ({ title, text, overlayImage }) => {
  return (
    <div className="text-block-wrapper">
      {/* Circle with blush pink background */}
      <div className="overlapping-circle circle-left"></div>

      {/* Image on top of the circle */}
      <img
        src={overlayImage} // Pull image from public folder
        alt="Overlay"
        className="overlay-image circle-left"
      />

      {/* Fixed-height text block */}
      <div className="text-block text-block-left">
        <h2 className="text-block-title">{title}</h2>
        <div className="text-content text-content-left">{text}</div>
      </div>
    </div>
  );
};

export default TextBlockLeft;
