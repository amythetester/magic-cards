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
    console.log('amy event', event.target.value)
    this.setState({sortOrder: event.target.value});
    this.props.updateSortOrderCallback(this.state.sortOrder);
  }

  render() {
    console.log('amy sortOrder sort', this.state.sortOrder)
    return (
      <form>
        <label>
          <select name="sort" id="sort-select" label="Sort" onChange={this.handleChange} defaultValue='name'>
            <option value="artist">Artist</option>
            <option value="name">Creature Name</option>
            <option value="set">Set Name</option>
          </select>
        Sort
        </label>
      </form>
    );
  }
}

export default Sort;
