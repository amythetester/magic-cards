import React from 'react';

import Board from './components/board.js';
import Nav from './components/nav.js';

function Homepage() {
  return (
    <div className="Homepage">
      <nav>
        <Nav />
      </nav>
      <Board />
    </div>
  );
}

export default Homepage;
