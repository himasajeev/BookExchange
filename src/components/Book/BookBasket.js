import React from 'react';
import PropTypes from 'prop-types';

import CardActions from '@material-ui/core/CardActions';
import AnimateHeight from 'react-animate-height';
import BookButtonBasket from './BookButtonBasket';
import { StyledSelectedState, StyledCard } from './BookStyled';
import BookContent from './BookContent';

const animationDuration = 500;

const BookBasket = ({ book, ...rest }) => {
  const { title, selectedState } = book;
  const height = rest.in ? 'auto' : 0;
  return (
    <AnimateHeight duration={animationDuration} height={height} animateOpacity>
      <StyledCard>
        <BookContent {...book} />
        <CardActions>
          {selectedState ? (
            <StyledSelectedState>{selectedState.label}</StyledSelectedState>
          ) : (
            <StyledSelectedState />
          )}
          <BookButtonBasket bookTitle={title} isFloatingRight {...rest}>
            Usuń
          </BookButtonBasket>
        </CardActions>
      </StyledCard>
    </AnimateHeight>
  );
};

BookBasket.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iSBN: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    selectedState: PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
    publisher: PropTypes.string.isRequired,
  }).isRequired,
  in: PropTypes.bool,
};

export default BookBasket;
