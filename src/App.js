import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import TeamPage from './Pages/TeamPage';
import SourcesPage from './Pages/SourcesPage';
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Team" element={<TeamPage />} />
          <Route path="/TeamPage" element={<TeamPage />} />
          <Route path="/Sources" element={<SourcesPage />} />
          <Route path="/SourcesPage" element={<SourcesPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
