import React from 'react';

function Card(props) {
  return (
    <div className="Card">
      {props.image}
      {props.name}
      {props.artist}
      {props.set}
      {props.type}

    </div>
  );
}

export default Card;
