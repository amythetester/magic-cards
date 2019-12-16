import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './card.css'


class Card extends Component {
  constructor(props) {
    super(props);
      this.state = {
      isFlipped: false
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  
  render() {
    return (
      <div className="cardContainer cardFadeIn" onClick={this.handleClick}>
        <section className={`card ${this.state.isFlipped ? 'is-flipped' : ''}`}>
          <div className="card__face card__face--front">
            {this.props.image && <img src={this.props.image} alt="creature card" className="card-image"/>}
            {this.props.name && <div className="card-text">Name: {this.props.name}</div>}
          </div>
          <div className="card__face card__face--back">
            {this.props.name && <div className="card-text">Name: {this.props.name}</div>}
            {this.props.artist && <div className="card-text">Artist: {this.props.artist}</div>}
            {this.props.set && <div className="card-text">Set: {this.props.set}</div>}
            {this.props.type && <div className="card-text">Original Type: {this.props.type}</div>}
          </div>
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  artist: PropTypes.string,
  set: PropTypes.string,
  type: PropTypes.string
};

export default Card;
