import React, { useState, useEffect } from "react";
import './Header.css'; // Optional for styling
import { LuSparkles } from "react-icons/lu";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHidden(true); // Hide on scroll down
      } else {
        setIsHidden(false); // Show on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isHidden ? "hidden" : ""}`}>
      <div className="header-container">
        <a href="https://github.com/The-Snack-Pack/daddy-set" target="_blank" className="header-title"><LuSparkles />Hollywood Daddies</a>
        <nav className="header-nav">
          <ul className="nav-links">
            <li><a href={"#about"}>About</a></li>
            <li><a href={"#visualization"}>Visualizations</a></li>
            <li><a href={"#team"}>Meet the Data Girls</a></li>
          </ul>
        </nav>

        <img
          className={"peek-a-boo-pascal"}
          src="/images/GLADIATOR-II-Pedro-Pascal-Paul-Mescal-101624-08-d9ee60826e9a4de18a8268ec61fd33bb.png"
          alt="Peek-a-Boo Pascal"
        />

      </div>

      <img
        className={`cavil-corner ${isHidden ? "hide-cavil" : ""}`}
        src="/images/FOjhnYPWYAMdAup.png" // Path to your image in the public folder
        alt="cavil"
      />
    </header>


  );
};

export default Header;
