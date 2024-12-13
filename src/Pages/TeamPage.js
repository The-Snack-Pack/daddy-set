import React from 'react';
import './TeamPage.css';
import { LuSparkles } from 'react-icons/lu';

const TeamPage = () => {
  return (
    <div className="team-page">

      <div className="team-grid-container">
        {/* First Column */}
        <div className="color-rectangle">
          <a href="https://github.com/The-Snack-Pack/daddy-set" target="_blank" className="text-title-link text-rotated">Daddy's Girls</a>
        </div>

        {/* Second Column */}
        <div className="image-grid">
          <div className="image-box">
            <img src="/images/Team/delicious-cake.png" alt="Team Member 1" />
            <div className="overlay">
              <h2 className="text-title">Bibiana Garcia</h2>
              <p className= "text-para">University of Hawai'i<br/> Computer Science Undergraduate </p>
            </div>
          </div>
          <div className="image-box">
            <img src="/images/Team/piece-cake-served-with-grapes.png" alt="Team Member 2" />
            <div className="overlay">
              <h1 className="text-title">Sierra Jansons-Dizon</h1>
              <p className= "text-para">University of Hawai'i<br/> Computer Science Undergraduate </p>
            </div>
          </div>
          <div className="image-box">
            <img src="/images/Team/piece-chocolate-cake-with-mint-chocolate-topping-lights-with-blurry-background.png" alt="Team Member 3" />
            <div className="overlay">
              <h1 className="text-title">Yu Fang Ma</h1>
              <p className= "text-para">University of Hawai'i<br/> Computer Science Undergraduate </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default TeamPage;
