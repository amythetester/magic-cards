import React from 'react';

import Banner from './components/banner.js'
import Board from './components/board.js';
import Nav from './components/nav.js';

function Homepage() {
  return (
    <div className="Homepage">
      <Nav />
      <Banner />
      <Board />
    </div>
  );
}

export default Homepage;
