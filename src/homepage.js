import React from 'react';

import Board from './components/board.js';
import Nav from './components/nav.js';

import './homepage.css'

function Homepage() {
  return (
    <div className="Homepage">
      <Nav />
      <section className="hero">
        <div className="transparent">
          <h1>Magical Beasts and Where to Find Them</h1>
          <h3>Scroll to find more.</h3>
        </div>
      </section>
      <Board />
    </div>
  );
}

export default Homepage;
