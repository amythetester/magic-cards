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
    };
  }

  loadCards(page) {
    const mtg = require('mtgsdk');
    const numberOfCards = 20;
    const type = 'creature';
    let pageNumber = 1;
    let sortOrder = 'name';

    mtg.card.where({ types: type, orderBy: sortOrder, pageSize: numberOfCards, page: pageNumber })
      .then(cards => {
        if(cards) {
          const currentCards = this.state.cards;
          cards.map((card) => {
            currentCards.push(card);
          });

          if(cards) {
            this.setState({
              cards: currentCards,
            });
          } else {
            this.setState({
              hasMoreItems: false
            });
          }
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
        <section className="board">
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadCards.bind(this)}
            hasMore={this.state.hasMoreCards}
            loader={loader}>

            <div className="tracks">
                {cards}
            </div>
          </InfiniteScroll>
        </section>
      </div>
    );
  }
}

export default Board;
