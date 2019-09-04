import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Book from '../../components/Book/Book';
import { BOOK_POSITION } from '../../constants/bookPosition';

const Basket = ({ basket, removeFromBasket }) => {
  return (
    <div>
      {Object.keys(basket).map(book => (
        <Book
          {...basket[book]}
          onButtonClick={removeFromBasket}
          key={book}
          type={BOOK_POSITION.BASKET}
          basketId={book}
        />
      ))}
    </div>
  );
};

Basket.propTypes = {
  basket: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({}),
  }).isRequired,
  removeFromBasket: PropTypes.func.isRequired,
};

export default Basket;
