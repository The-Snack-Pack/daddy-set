import logo from './logo.svg';
import './App.css';
import Header from './Header';
import TextBlock from './TextBlock';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <TextBlock
        text="Welcome to the Hollywood Daddies Dashboard! Dive into the data behind the 'daddy' persona and discover what makes Hollywood stars iconic."
        imagePath="./transparent-photo-smiling-mouth.png" // Replace with your image file name
      />
      <img src={process.env.PUBLIC_URL + './transparent-photo-smiling-mouth.png'} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;
