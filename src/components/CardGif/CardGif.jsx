import React from 'react';
import './CardGif.css';

const CardGif = ({ gif }) => {
  return (
    <div key={gif.id}>
      <h3>{gif.title}</h3>
      <img src={gif.url} alt={gif.title} />
    </div>
  );
};

export default CardGif;
