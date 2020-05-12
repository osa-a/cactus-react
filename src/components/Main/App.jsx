import React from 'react';
import './App.scss';
import { Navigation } from '../Navigation/Navigation';
import { Carousel } from '../Carousel/Carousel';
import { AboutUs } from '../About/AboutUs';

function App() {
  return (
    <div>
      <header className="header">
        <Navigation />
      </header>
      <main className="main">
        <Carousel />
        <AboutUs />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;