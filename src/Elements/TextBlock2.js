import React, { useState } from 'react';
import './TextBlock.css';

const TextBlock = ({ text }) => {
  const [circleZIndex, setCircleZIndex] = useState(1); // Initial z-index for the circle
  const [blockZIndex, setBlockZIndex] = useState(2); // Initial z-index for the text block

  const toggleZIndex = () => {
    // Swap the z-index values
    setCircleZIndex((prev) => (prev === 1 ? 3 : 1));
    setBlockZIndex((prev) => (prev === 2 ? 0 : 2));
  };

  return (
    <div className="text-block-wrapper" onClick={toggleZIndex} style={{
      position: 'absolute',
      zIndex: 1
    }}>
      {/* Circle with blush pink background */}
      <div
        className="overlapping-circle"
        style={{ zIndex: circleZIndex }} // Dynamically set z-index
        style={{
          position: 'absolute',
          zIndex: 2
        }}
      ></div>
      <div
        className="text-block"
        style={{ zIndex: blockZIndex }} // Dynamically set z-index
      >
        {text}
      </div>
    </div>
  );
};

export default TextBlock;
