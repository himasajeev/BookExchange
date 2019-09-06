import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Book from '../../components/Book/Book';
import { BOOK_POSITION } from '../../constants/bookPosition';
import Button from '../../components/Button/Button';

const Basket = ({ basket, removeFromBasket, orderBasket }) => {
  const onOrderBasket = React.useCallback(() => {
    orderBasket(basket);
  }, [basket, orderBasket]);

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
      <Button onClick={onOrderBasket}>Potwierdź zakup</Button>
    </div>
  );
};

Basket.propTypes = {
  basket: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({}),
  }).isRequired,
  removeFromBasket: PropTypes.func.isRequired,
  orderBasket: PropTypes.func.isRequired,
};

export default Basket;
