import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

  componentDidUpdate(oldProps) {
    const newProps = this.props
    if(oldProps.nameSearch !== newProps.nameSearch || oldProps.sortOrder !==newProps.sortOrder) {
      this.setState({ cards: [], hasMoreCards: true, pageNumber: 1 })
    }
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
        if(cards.length > 0) {
          const currentCards = this.state.cards;
          cards.forEach((card) => {
            currentCards.push(card);
          });
          this.setState({
            cards: currentCards,
            pageNumber: this.state.pageNumber + 1
          });
        } else {
          this.setState({
            hasMoreCards: false
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const cards = [];
    this.state.cards.forEach((card, i) => {
      let cardImage = ''
      if (card.imageUrl) {
        cardImage = card.imageUrl
      } else {
        cardImage = "https://img.icons8.com/ios/100/000000/image-not-avialable.png"
      }

      cards.push(
        <Card 
          key={i}
          name={card.name} 
          image={cardImage}
          artist={card.artist}
          set={card.setName}
          type={card.originalType}
        />
      );
      return cards
    });

    return (
      <div className="background">
        <InfiniteScroll
          className="board"
          pageStart={0}
          loadMore={this.loadCards.bind(this)}
          hasMore={this.state.hasMoreCards}
          loader={<h3 className="loader" key='loaderKey'>Loading ...</h3>}>

          {cards}

        </InfiniteScroll>
      </div>
    );
  }
}

Board.propTypes = {
  nameSearch: PropTypes.string,
  sortOrder: PropTypes.string
};

export default Board;
