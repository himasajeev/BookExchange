import React from 'react';
import PropTypes from 'prop-types';
import { createBasketBook } from '../../utils/createBasketBook';
import { StyledButton } from './BookStyled';

const BookButtonStore = ({ onButtonClick, book, isDisabled, children }) => {
  const onClick = React.useCallback(
    () => onButtonClick(createBasketBook(book)),
    [book, onButtonClick],
  );

  return isDisabled ? (
    <StyledButton>{children}</StyledButton>
  ) : (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
};

BookButtonStore.propTypes = {
  book: PropTypes.shape({}).isRequired,
  onButtonClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/require-default-props
  isDisabled: PropTypes.bool,
};

export default BookButtonStore;
