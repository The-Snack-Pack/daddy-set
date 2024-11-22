import React from 'react'
import './App.css';
import Header from './Header';
import TitleRight from './TitleRight';
import TitleLeft from './TitleLeft';
import Logo from './Logo';
import Visualization from './Visualization';
import TextBlockLeft from './TextBlockLeft';
import TextBlockRight from './TextBlockRight';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Header />

      <div className="Body">
        <TitleRight text="About" anchor={"about"}/>
        <TextBlockLeft
          title="Hollywood Daddies"
          text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
          overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png"
        />
        <TextBlockRight
          title="Hollywood Daddies"
          text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
          overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png"
        />
        <TextBlockLeft
          title="Hollywood Daddies"
          text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
          overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png"
        />
        <TextBlockRight
          title="Hollywood Daddies"
          text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
          overlayImage="/images/Cartier-Tank-Photo-by-Michael-J-Fox-768x955.png"
        />
      </div>

      <div className="Body">
        <TitleLeft text={"Visualizations"} anchor={"visualization"} />
        <Visualization />
      </div>

      <div className="Body">
        <TitleRight text="Data Girls" anchor={"team"}/>
        <Logo />
      </div>

    </div>
  );
}

export default App;
