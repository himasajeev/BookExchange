import React from 'react';
import PropTypes from 'prop-types';

import CardActions from '@material-ui/core/CardActions';
import BookButtonStore from './BookButtonStore';
import { StyledCard } from './BookStyled';
import BookContent from './BookContent';

const BookSell = ({ phase, book, ...rest }) => {
  return (
    <StyledCard>
      <BookContent {...book} />
      <CardActions>
        <BookButtonStore
          phase={phase}
          isFloatingRight
          isSelected
          book={book}
          {...rest}
        >
          Sprzedaj
        </BookButtonStore>
      </CardActions>
    </StyledCard>
  );
};

BookSell.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iSBN: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
  }).isRequired,
  phase: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BookSell;
