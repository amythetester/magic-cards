import React, {Component} from 'react';

import './search.css'

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortOrder: 'name'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({sortOrder: event.target.value});
    this.props.updateSortOrderCallback(event.target.value);
  }

  render() {
    return (
      <form>
        <label>
          <select name="sort" id="sort-select" label="Sort" onChange={this.handleChange} defaultValue='name'>
            <option value="artist">Artist</option>
            <option value="name">Creature Name</option>
            <option value="originalType">Original Type</option>
            <option value="setName">Set Name</option>
          </select>
        Sort
        </label>
      </form>
    );
  }
}

export default Sort;
