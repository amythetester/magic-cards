import React, {Component} from 'react';

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
      <div>
        <form className="search" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search by card name..." value={this.state.value} onChange={this.handleChange} />
            <button id="search-button" className="btn btn-outline-light btn-lg">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
