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

  setPageNumber() {
    this.setState({ pageNumber: this.props.page})
  }

  loadCards() {
    const mtg = require('mtgsdk');
    const cardsPerPage = 20;
    const cardType = 'creature';

    mtg.card.where({ 
      types: cardType, 
      name: this.props.nameSearch, 
      orderBy: this.props.sortOrder, 
      pageSize: cardsPerPage, 
      page: this.state.pageNumber
    })
      .then(cards => {
        if(cards) {
          const currentCards = this.state.cards;
          cards.map((card) => {
            currentCards.push(card);
            return currentCards
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
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  render() {
    const loader = <div className="loader" key='loaderKey'>Loading ...</div>;

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
      return cards
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
