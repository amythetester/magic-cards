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

  componentDidUpdate(oldProps) {
    const newProps = this.props
    if(oldProps !== newProps) {
      this.setState({ cards: [], pageNumber: 1 })
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
        if(cards) {
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
            hasMoreItems: false
          });
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  render() {
    const loader = <h3 className="loader" key='loaderKey'>Loading ...</h3>;

    const cards = [];
    this.state.cards.forEach((card, i) => {
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
