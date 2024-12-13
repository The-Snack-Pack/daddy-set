import React from 'react';

function Home() {
  return (
    <div className="Body">
      <TitleRight text="About" anchor="about" />
      <TextBlockLeft
        title="What makes an actor “Daddy”?"
        text="We want to show how being a “daddy” can totally change an actor’s public image and the roles they get offered. The men in the data were already once mentioned as being a “daddy”... so let’s compare the actor’s Ranker (best male actors) rating to the IMDb average of the ratings from their top 4 movies they are known for. By comparing a public ranking of best male actors to their average rating of movies they were known for. We can visualize a trend in popularity and film ratings."
        overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png"
      />
      <Visualization_Scatter />
      <TextBlockRight
        title=" It’s the Vibe, Not the Years"
        text="How old is too old, or is “daddy” all about the vibe?"
        overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png"
      />
      <Visualization_Age />
      <TextBlockLeft
        title=" Fam Life vs. Fame"
        text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
        overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png"
      />
      <Visualization_Bubble />
      <TextBlockRight
        title="What makes an actor “Daddy”?"
        text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
        overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png"
      />

      <TitleLeft text="Visualizations" anchor="visualization" />

    </div>
  );
}