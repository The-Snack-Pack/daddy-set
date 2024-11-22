import React from 'react';
import './Footer.css'; // Optional for styling
import { FaBowlFood } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">
        <h1 className="footer-title">
          <FaBowlFood />
          <br />
          The Snack Pack
        </h1>
      </div>



    </footer>
  );
};

export default Footer;
