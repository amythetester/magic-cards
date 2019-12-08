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
      <form className="search" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search..." value={this.state.value} onChange={this.handleChange} />
          <button>Search</button>
      </form>
    );
  }
}

export default Search;
