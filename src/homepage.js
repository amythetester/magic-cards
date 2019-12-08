import React, {Component} from 'react';

import Banner from './components/banner.js'
import Board from './components/board.js';
import Nav from './components/nav.js';
import Search from './components/search.js'

import './homepage.css'
class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameSearch: '',
      sortOrder: 'name'
    }
  }

  updateNameSearch = (newName) => {
    this.setState({ 
      nameSearch: newName,
    });
  }
  
  render () {
    return (
      <div className="Homepage">
        <Nav />
        <Banner />
        <Search updateNameSearchCallback={this.updateNameSearch}/>
        <Board
          className="background" 
          nameSearch={this.state.nameSearch}
          sortOrder={this.state.sortOrder}
        />
      </div>
    );
  }
}

export default Homepage;
