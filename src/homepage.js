import React, {Component} from 'react';

import Banner from './components/banner.js'
import Board from './components/board.js';
import Nav from './components/nav.js';
import Search from './components/search.js';
import Sort from './components/sort.js';

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
      nameSearch: newName
    });
  }

  updateSortOrder = (sortBy) => {
    this.setState({
      sortOrder: sortBy
    });
  }
  
  render () {
    return (
      <div id="homepage">
        <Nav />
        <Banner />
        <Search updateNameSearchCallback={this.updateNameSearch}/>
        <Sort updateSortOrderCallback={this.updateSortOrder} />
        <Board
          nameSearch={this.state.nameSearch}
          sortOrder={this.state.sortOrder}
        />
      </div>
    );
  }
}

export default Homepage;
