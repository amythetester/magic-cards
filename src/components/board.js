import React, {Component} from 'react';

import Card from './card.js';

import './board.css'
class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      nextCard: 20
    };
  }

  componentDidMount() {
    this.getInitialCards();
  }

  getInitialCards = () => {
    const mtg = require('mtgsdk')

    mtg.card.where({ types: 'creature', orderBy: 'name', pageSize: 20 })
    .then(cards => {
      this.setState({cards: cards});
    })
  }

  getMoreCards = () => {
    const mtg = require('mtgsdk')

    mtg.card.where({ types: 'creature', orderBy: 'name', pageSize: 50 })
    .then(cards => {
      const newCards = this.state.cards.push(cards);
      const nextCardNeeded = this.state.nextCard + 50
      this.setState({cards: newCards, nextCard: nextCardNeeded});
    })
  }

  renderCards = () => {
    if (this.state.cards) {
      const cards = this.state.cards.map(card => 
        <Card 
          key={card.multiverseid}
          name={card.name} 
          image={card.imageUrl}
          artist={card.artist}
          set={card.setName}
          type={card.originalType}
        />);
      return cards; 
    }
  }

  render() {
    return (
      <div className="board">
          {this.renderCards()}
      </div>
    );
  }
}

export default Board;
