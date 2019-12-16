import React, {Component} from 'react';
import {Collapse} from 'react-collapse';
import PropTypes from 'prop-types';

import './search.css'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      mostRecent: 'Search not being used',
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  
  handleSubmit = (event) => {
    this.props.updateNameSearchCallback(this.state.value);
    event.preventDefault();

    if (this.state.value === '') {
      this.setState({ mostRecent: 'Search not being used' });
    } else {
      this.setState({ mostRecent: this.state.value });
    }
  }

  isOpen = () => {
    this.setState({ isOpened: !this.state.isOpened})
  }

  render() {
    return (
      <div className="search">
        <button className="btn btn-info btn-lg" id="search-collapse" onClick={this.isOpen}>Search</button>
        <Collapse isOpened={this.state.isOpened}>
          <h5 className="label">Search By Name:</h5>
          <form onSubmit={this.handleSubmit}>
              <input id="search-input" type="text" placeholder="Card name..." value={this.state.value} onChange={this.handleChange} />
              <button id="search-button" className="btn btn-light">Search</button>
          </form>
          <h5 className="last-search">Current Search: {this.state.mostRecent}</h5>
        </Collapse>
      </div>
    );
  }
}

Search.propTypes = {
  undateNameSearchCallback: PropTypes.func,
};

export default Search;
