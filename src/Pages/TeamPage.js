import React from 'react';
import './TeamPage.css';

const TeamPage = () => {
  return (
    <div className="team-page">

      <div className="team-grid-container">
        {/* First Column */}
        <div className="text-rectangle">
          <p className="rotated-text">Meet the Team</p>
        </div>

        {/* Second Column */}
        <div className="image-grid">
          <div className="image-box">
            <div className="overlay">
              <img src="/images/Team/delicious-cake.png" alt="Team Member 1" />
            </div>
          </div>
          <div className="image-box">
            <img src="/images/Team/piece-cake-served-with-grapes.png" alt="Team Member 2" />
          </div>
          <div className="image-box">
            <img src="/images/Team/piece-chocolate-cake-with-mint-chocolate-topping-lights-with-blurry-background.png" alt="Team Member 3" />
          </div>
        </div>
      </div>


    </div>
  );
};

export default TeamPage;
