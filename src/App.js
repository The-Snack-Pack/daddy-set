import React from 'react'
import './App.css';
import Header from './Header';
import Body from './Body';
import Logo from './Logo';
import Visualization from './Visualization';

function App() {
  return (
    <div className="App">
      <img
        src="/images/FOjhnYPWYAMdAup.png" // Path to your image in the public folder
        alt="Foreground"
        className="foreground-image"
      />

      <Header />
      <Body />
      <Logo />
      <Visualization />
    </div>
  );
}

export default App;
