import React from 'react';
import './HomePage.css'
import TextBlockLeft from '../Elements/TextBlockLeft';
import TextBlockRight from'../Elements/TextBlockRight';

import Visualization_Daddy from '../Visualizations/Visualization_Daddy';
import Visualization_Age from '../Visualizations/Visualization_Age';
import Visualization_Family from '../Visualizations/Visualization_Family';

const HomePage = () => {
  return (
    <div className="home-page">

      <div className="home-grid-container">

        <div className="viz-grid-container">

          <div className="daddy-grid">
            <div className="text-container">
              <h1 className="title-text">What makes an actor “Daddy”?</h1>
              <p className="descript-text">We want to show how being a “daddy” can totally change an actor’s public image and the roles they get offered. The men in the data were already once mentioned as being a “daddy”... so let’s compare the actor’s Ranker (best male actors) rating to the IMDb average of the ratings from their top 4 movies they are known for. By comparing a public ranking of best male actors to their average rating of movies they were known for. We can visualize a trend in popularity and film ratings.</p>
            </div>
            <Visualization_Daddy />

          </div>

          <div className="age-grid">
            <div className="text-container">
              <h1 className="title-text">It’s the Vibe, Not the Years</h1>
              <p className="descript-text">How old is too old, or is “daddy” all about the vibe?</p>
            </div>

            <Visualization_Age />

          </div>

          <div className="family-grid">
            <div className="text-container">
              <h1 className="title-text">Fam Life vs. Fame</h1>
              <p className="descript-text">Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic.</p>
            </div>

            <Visualization_Family />

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;