import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './TeamPage.css'
import './Sources.css';
import Header from './Header';
import TitleRight from './TitleRight';
import TitleLeft from './TitleLeft';
import Visualization from './Visualization';
import TextBlockLeft from './TextBlockLeft';
import TextBlockRight from './TextBlockRight';
import Footer from './Footer';

function Home() {
  return (
    <div className="Body">
      <TitleRight text="About" anchor="about" />
      <TextBlockLeft
        title="What makes an actor “Daddy”?"
        text="We want to show how being a “daddy” can totally change an actor’s public image and the roles they get offered. The men in the data were already once mentioned as being a “daddy”... so let’s compare the actor’s Ranker (best male actors) rating to the IMDb average of the ratings from their top 4 movies they are known for. By comparing a public ranking of best male actors to their average rating of movies they were known for. We can visualize a trend in popularity and film ratings."
        overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png"
      />
      <TextBlockRight
        title=" It’s the Vibe, Not the Years"
        text="How old is too old, or is “daddy” all about the vibe?"
        overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png"
      />
      <TextBlockLeft
        title=" Fam Life vs. Fame"
        text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
        overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png"
      />
      <TextBlockRight
        title="What makes an actor “Daddy”?"
        text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
        overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png"
      />

      <TitleLeft text="Visualizations" anchor="visualization" />
      <Visualization />

    </div>
  );
}
function TeamPage() {
  return (
    <div className="body">

      <div className="team-page-title">
        <h1 className="title-link">
          The Data Girls
        </h1>
      </div>

      <div className="team-page">
        <div className="square-frame">

          {/* Square 1 */}
          <div className="square">
            <img src="/images/Team/delicious-cake.png" alt="Team Member 1" />
            <div className="banner">
              <h3>Bibiana Garcia</h3>
              <p>University of Hawai'i Undergraduate Student, Computer Science major</p>
            </div>
          </div>

          {/* Square 2 */}
          <div className="square">
            <img src="/images/Team/piece-cake-served-with-grapes.png" alt="Team Member 2" />
            <div className="banner">
              <h3>Sierra Jansons-Dizon</h3>
              <p>University of Hawai'i Undergraduate Student, Computer Science major</p>
            </div>
          </div>

          {/* Square 3 */}
          <div className="square">
            <img src="/images/Team/piece-chocolate-cake-with-mint-chocolate-topping-lights-with-blurry-background.png" alt="Team Member 3" />
            <div className="banner">
              <h3>Yu Fang Ma</h3>
              <p>University of Hawai'i Undergraduate Student, Computer Science major</p>
            </div>
          </div>

          {/* Square 4 */}
          <div className="square">
            <img src="/images/Team/snack-pack-team.png" alt="Team Member 4" />
            <div className="team-banner">
              <h3>The Snack Pack</h3>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

function Sources() {
  return (
    <div className="source-body">
      <div className="source-title">
        <h1>Putting Together the Daddy Persona</h1>
      </div>

      <div className="source-body">
        <p>
          The 'Daddy' persona was developed by synthesizing information from various online sources. Drawing inspiration from Pedro Pascal's widely recognized 'daddy energy,' the persona spectrum was crafted to embody this archetype, offering a framework to explore and address our research questions.
        </p>

        <h2>Articles</h2>
        <ul className="citation-list">
          <li>
            Hustle Magazine, “Is daddy really just a state of mind?” Hustle Magazine, <a href="https://hustlemagazine.co/is-daddy-really-just-a-state-of-mind/">https://hustlemagazine.co/is-daddy-really-just-a-state-of-mind/</a>
          </li>
          <li>
            Ovenden, Olivia. “Pedro Pascal is the internet daddy for the end of the world.” GQ, 13 February 2023, <a href="https://www.gq-magazine.co.uk/culture/article/pedro-pascal-the-last-us-daddy">https://www.gq-magazine.co.uk/culture/article/pedro-pascal-the-last-us-daddy</a>
          </li>
          <li>
            Di Placido, Dani. “We’ve Hit Peak Pedro Pascal.” Forbes, 27 February, 2023, <a href="https://www.forbes.com/sites/danidiplacido/2023/02/27/weve-hit-peak-pedro-pascal/">https://www.forbes.com/sites/danidiplacido/2023/02/27/weve-hit-peak-pedro-pascal/</a>
          </li>
          <li>
            Crawford, Ian Carlos. “How Pedro Pascal Became a Symbol of Modern Masculinity.” Men’s Health, 16 March, 2023, <a href="https://www.menshealth.com/entertainment/a43315760/pedro-pascal-modern-masculinity/">https://www.menshealth.com/entertainment/a43315760/pedro-pascal-modern-masculinity/</a>
          </li>
          <li>
            Monella. “Pedro Pascal – The Internet Daddy We All Love.” Celeb Mix, 6 June, 2023, <a href="https://celebmix.com/pedro-pascal-the-internet-daddy-we-all-love/#google_vignette">https://celebmix.com/pedro-pascal-the-internet-daddy-we-all-love/#google_vignette</a>
          </li>
          <li>
            Abad-Santos, Alex. “Pedro Pascal and the unbearable horniness of ‘daddy.’” Vox, 10 February, 2023, <a href="https://www.vox.com/culture/23594371/last-of-us-pedro-pascal-daddy">https://www.vox.com/culture/23594371/last-of-us-pedro-pascal-daddy</a>
          </li>
        </ul>

        <h2>Dataset Sources</h2>
        <p>
          To create the 'daddies' dataset, we identified actors by searching through online sources that had previously described them as embodying the 'daddy' vibe we were seeking. Additional attributes were also gathered from various online sources to build comparisons for visualizations, helping uncover predictive insights and gain a deeper understanding of the power that the 'daddy' persona wields.
        </p>
        <ul className="citation-list">
          <li>
            Witteman, Carly. “20 Of Hollywood’s Hottest Daddies.” CR Fashion, 18 June, 2023, <a href="https://crfashionbook.com/20-of-hollywoods-hottest-daddies-to-celebrate-fathers-day/">https://crfashionbook.com/20-of-hollywoods-hottest-daddies-to-celebrate-fathers-day/</a>
          </li>
          <li>
            idekwhatislife, “The Real Daddies.” IMDb, 2015, <a href="https://m.imdb.com/list/ls072842385/">https://m.imdb.com/list/ls072842385/</a>
          </li>
          <li>
            dakbayrak, “The Ultimate Daddy List.” IMDb, 2022, <a href="https://www.imdb.com/list/ls048385523/">https://www.imdb.com/list/ls048385523/</a>
          </li>
          <li>
            Sim, Bernardo. “The Internet Voted for the Hottest Celeb Daddies of 2023.” Out, Yahoo, 7 November, 2023, <a href="https://www.yahoo.com/lifestyle/internet-voted-hottest-celeb-daddies-114020572.html?guccounter=1">https://www.yahoo.com/lifestyle/internet-voted-hottest-celeb-daddies-114020572.html?guccounter=1</a>
          </li>
          <li>
            Ranker Community, “The Hottest Male Celebrities of All Time, Ranked.” Ranker, 2 November, 2024, <a href="https://www.ranker.com/crowdranked-list/hottest-male-celebrities">https://www.ranker.com/crowdranked-list/hottest-male-celebrities</a>
          </li>
          <li>
            Clemmons, Vaughan. “10 Celebrities that prove you can be a zaddy and a daddy.” Metro, 10 November, 2017, <a href="https://www.metro.us/10-celebrities-that-prove-you-can-be-a-zaddy-and-a-daddy/">https://www.metro.us/10-celebrities-that-prove-you-can-be-a-zaddy-and-a-daddy/</a>
          </li>
          <li>
            Chung, Gabrielle. “Zaddies Who Are Also IRL Daddies.” E! News, 17 June, 2023, <a href="https://www.eonline.com/news/1374699/christopher-meloni-oscar-isaac-jeff-goldblum-and-more-internet-zaddies-who-are-also-irl-daddies">https://www.eonline.com/news/1374699/christopher-meloni-oscar-isaac-jeff-goldblum-and-more-internet-zaddies-who-are-also-irl-daddies</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/source" element={<Sources />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
