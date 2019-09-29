import React from 'react';
import PropTypes from 'prop-types';
import { isSell, isBuy } from '../../utils/phaseToBool';
import { BOOK_POSITION } from '../../constants/bookPosition';
import BookBuy from './BookBuy';
import BookSell from './BookSell';
import BookBasket from './BookBasket';

const Book = ({ phase, type, ...rest }) => {
  switch (true) {
    case type === BOOK_POSITION.BASKET:
      return <BookBasket {...rest} />;
    case isSell(phase):
      return <BookSell phase={phase} {...rest} />;
    case isBuy(phase):
      return <BookBuy phase={phase} {...rest} />;
    default:
      return null;
  }
};

Book.propTypes = {
  phase: PropTypes.number,
  type: PropTypes.number,
};

export default Book;
