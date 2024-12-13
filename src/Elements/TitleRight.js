import React from 'react';
import './Title.css'; // Import the corresponding CSS file

const TitleRight = ({ text, anchor }) => {
  return (
    <div id={anchor}  className="title-banner title-banner-right">
      <h1 className="title-link">
        {text}
      </h1>
    </div>
  );
};

export default TitleRight;
