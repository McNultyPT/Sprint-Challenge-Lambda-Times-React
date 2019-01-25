import React, { Component } from 'react';
import Card from './Card';
// import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(( data, index) => {
        return <Card
          author={data.author}
          headline={data.headline}
          img={data.img}
          tab={data.tab}
          card={data.card}
          key={index}
        />
      })}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
// Cards.propTypes = {
//   cards: propTypes.array,
//   author: propTypes.string,
//   headline: propTypes.string,
//   img: propTypes.string,
//   tab: propTypes.string
// }


export default Cards;