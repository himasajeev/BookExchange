import React from 'react';
import PropTypes from 'prop-types';

import CardActions from '@material-ui/core/CardActions';
import BookButtonBasket from './BookButtonBasket';
import {
  StyledSelectedState,
  StyledCard,
  StyledTopography,
  StyledCardContent,
} from './BookStyled';

const BookBasket = ({ book, ...rest }) => {
  const { iSBN, title, category, author, selectedState, publisher } = book;

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledTopography variant="h5" component="h2">
          {title}
        </StyledTopography>
        <StyledTopography color="textSecondary" gutterBottom>
          {author}
        </StyledTopography>
        <StyledTopography isFirst variant="body2" component="p">
          {category}
        </StyledTopography>
        <StyledTopography variant="body2" component="p">
          {publisher}
        </StyledTopography>
        <StyledTopography variant="body2" component="p">
          {iSBN}
        </StyledTopography>
      </StyledCardContent>
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
      label: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
    publisher: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookBasket;
