import React, {Component} from 'react';

import Banner from './components/banner.js'
import Board from './components/board.js';
import Nav from './components/nav.js';
import Search from './components/search.js'

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardType: 'creature',
      nameSearch: '',
      page: 1,
      cardsPerPage: 20,
      sortOrder: 'name'
    }
  }
  
  render () {
    return (
      <div className="Homepage">
        <Nav />
        <Banner />
        <Search />
        <Board 
          cardType={this.state.cardType}
          nameSearch={this.state.nameSearch}
          page={this.state.page}
          cardsPerPage={this.state.cardsPerPage}
          sortOrder={this.state.sortOrder}
        />
      </div>
    );
  }
}

export default Homepage;
