import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <section className="card__content">
        {props.image && <img src={props.image} alt="creature card" className="card__content-image"/>}
        {props.name && <div className="card__content-name">Name: {props.name}</div>}
        {props.artist && <div className="card__content-artist">Artist: {props.artist}</div>}
        {props.set && <div className="card__content-set">Set: {props.set}</div>}
        {props.type && <div className="card__content-type">Original Type: {props.type}</div>}
      </section>
    </div>
  );
}

export default Card;
