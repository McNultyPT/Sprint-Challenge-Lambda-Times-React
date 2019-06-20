import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">

      {props.cards.map((data, index) => {
        return <Card
          card={data.card}
          key={index}
          headline={data.headline}
          tab={data.tab}
          img={data.img}
          author={data.author}
        />
      })}

    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array,
  author: PropTypes.string,
  headline: PropTypes.string,
  img: PropTypes.string,
  tab: PropTypes.string
}


export default Cards;

/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/