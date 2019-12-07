import React, {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Card from './card.js';

import './board.css'
class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      hasMoreCards: true,
      pageNumber: 1
    };
  }

  loadCards(page) {
    const mtg = require('mtgsdk');
    const numberOfCards = 20;
    const type = 'creature';
    let sortOrder = 'name';

    mtg.card.where({ types: type, orderBy: sortOrder, pageSize: numberOfCards, page: this.state.pageNumber })
      .then(cards => {
        if(cards) {
          const currentCards = this.state.cards;
          cards.map((card) => {
            currentCards.push(card);
          });
          this.setState({
            cards: currentCards,
            pageNumber: this.state.pageNumber + 1
          });
        } else {
          this.setState({
            hasMoreItems: false
          });
        }
      });
  }

  render() {
    const loader = <div className="loader">Loading ...</div>;

    const cards = [];
    this.state.cards.map((card, i) => {
        cards.push(
          <Card 
            key={i}
            name={card.name} 
            image={card.imageUrl}
            artist={card.artist}
            set={card.setName}
            type={card.originalType}
          />
        );
    });

    return (
      <div className="background">
        <div className="barrier"> </div>
        <InfiniteScroll
          className="board"
          pageStart={0}
          loadMore={this.loadCards.bind(this)}
          hasMore={this.state.hasMoreCards}
          loader={loader}>

          {cards}

        </InfiniteScroll>
      </div>
    );
  }
}

export default Board;
