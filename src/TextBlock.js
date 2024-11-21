import React from 'react';
import './TextBlock.css';

const TextBlock = ({ text, imagePath }) => {
  return (
    <div className="text-block-wrapper">
      <img
        src={process.env.PUBLIC_URL + imagePath}
        alt="Decorative"
        className="overlapping-image"
      />
      <div className="text-block">
        {text}
      </div>
    </div>
  );
};

export default TextBlock;
