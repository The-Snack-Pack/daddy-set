import React from 'react'
import './Body.css'; // Optional for styling
import TextBlockLeft from './TextBlockLeft';
import TextBlockRight from './TextBlockRight';

function Body() {
  return (
    <div className="Body">
      <TextBlockLeft
        title="Hollywood Daddies"
        text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
        overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png" // Replace with the actual image path
      />
      <TextBlockRight
        title="Hollywood Daddies"
        text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
        overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png" // Replace with the actual image path
      />
      <TextBlockLeft
        title="Hollywood Daddies"
        text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
        overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png" // Replace with the actual image path
      />
      <TextBlockRight
        title="Hollywood Daddies"
        text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
        overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png" // Replace with the actual image path
      />
    </div>
  );
}

export default Body;
