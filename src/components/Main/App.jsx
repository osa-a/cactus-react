import React from 'react';
import './App.scss';
import { Navigation } from '../Navigation/Navigation';
import { Carousel } from '../Carousel/Carousel';
import { AboutUs } from '../About/AboutUs';
import {Parallax} from '../Parallax/Parallax';

function App() {
  return (
    <div>
      <header className="header">
        <Navigation />
      </header>
      <main className="main">
        <Carousel />
        <AboutUs />
        <Parallax />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;