import React from 'react';
import './Header.css'; // Optional for styling
import { LuSparkles } from "react-icons/lu";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title"><LuSparkles />Hollywood Daddies</h1>
        <nav className="header-nav">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#visualization">Visualizations</a></li>
            <li><a href="#team">Meet the Team</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
