import React from 'react';
import './Logo.css'; // Optional for styling

const Logo = () => {
  return (
    <img src={process.env.PUBLIC_URL + './Pictures/transparent-photo-smiling-mouth.png'} className="App-logo" alt="logo" />
  );
};

export default Logo;
