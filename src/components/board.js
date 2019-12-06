import React, {Component} from 'react';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.getInitialCards();
  }

  getInitialCards = () => {
    const mtg = require('mtgsdk')

    mtg.card.where({ types: 'creature'})
    .then(cards => {
      this.setState = ({cards: cards})
      console.log(cards) 
    })
  }

  render() {
    return (
      <div className="Board">
        Magical Beasts and Where to Find Them
      </div>
    );
  }
}

export default Board;
