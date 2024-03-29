import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './search.css'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.updateNameSearchCallback(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="search">
        <h5 className="label">Search By Name:</h5>
        <form onSubmit={this.handleSubmit}>
            <input id="search-input" type="text" placeholder="Card name..." value={this.state.value} onChange={this.handleChange} />
            <button id="search-button" className="btn btn-light">Search</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  undateNameSearchCallback: PropTypes.func,
};

export default Search;
