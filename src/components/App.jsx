import React from 'react';
import '../App.scss';
import { Navigation } from './Navigation';
import { Carousel } from './Carousel';

function App() {
  return (
    <div>
      <header className="header">
        <Navigation />
      </header>
      <main className="main">
        <Carousel />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;