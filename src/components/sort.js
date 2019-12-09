import React, {Component} from 'react';

import './sort.css'

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
      <div className="sort">
        <h5 className="label">Sort By:</h5>
        <select name="sort" id="sort-select" className="btn btn-light btn-lg" label="Sort" onChange={this.handleChange} defaultValue='name'>
          <option value="artist">Artist</option>
          <option value="name">Creature Name</option>
          <option value="originalType">Original Type</option>
          <option value="setName">Set Name</option>
        </select>
      </div>
    );
  }
}

export default Sort;
