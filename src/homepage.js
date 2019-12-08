import React, {Component} from 'react';

import Banner from './components/banner.js'
import Board from './components/board.js';
import Nav from './components/nav.js';
import Search from './components/search.js'

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameSearch: '',
      page: 1,
      sortOrder: 'name'
    }
  }

  updateNameSearch = (newName) => {
    this.setState({ 
      name: newName,
      page: 1
    });
    console.log('AMY nameSearch', this.state.nameSearch)
  }
  
  render () {
    return (
      <div className="Homepage">
        <Nav />
        <Banner />
        <Search updateNameSearchCallback={this.updateNameSearch}/>
        <Board 
          nameSearch={this.state.nameSearch}
          page={this.state.page}
          sortOrder={this.state.sortOrder}
        />
      </div>
    );
  }
}

export default Homepage;
