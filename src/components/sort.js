import React, {Component} from 'react';
import {Collapse} from 'react-collapse';
import PropTypes from 'prop-types';

import './sort.css'

class Sort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      sortOrder: 'name'
    };
  }

  handleChange = (event) => {
    this.setState({sortOrder: event.target.value});
    this.props.updateSortOrderCallback(event.target.value);
  }

  isOpen = () => {
    this.setState({ isOpened: !this.state.isOpened})
  }

  render() {
    return (
      <div className="sort">
        <button className="btn btn-info btn-lg" id="sort-collapse" onClick={this.isOpen}>Sort</button>
        <Collapse isOpened={this.state.isOpened}>
          <h5 className="label">Sort By:</h5>
          <select name="sort" id="sort-select" className="btn btn-light btn-lg" label="Sort" onChange={this.handleChange} defaultValue='name'>
            <option value="artist">Artist</option>
            <option value="name">Creature Name</option>
            <option value="originalType">Original Type</option>
            <option value="setName">Set Name</option>
          </select>
        </Collapse>
        <h5 className="last-sort">Current Sort: {this.state.sortOrder}</h5>
      </div>
    );
  }
}

Sort.propTypes = {
  undateSortOrderCallback: PropTypes.func,
};

export default Sort;
