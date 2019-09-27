import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { createBasketBook } from '../../utils/createBasketBook';
import { StyledButton } from './BookStyled';

const BookButtonStore = ({ onButtonClick, book, isDisabled, children }) => {
  const onClick = React.useCallback(() => {
    onButtonClick(createBasketBook(book));
    /* eslint react/prop-types:0 */
    toast.success(`Dodano do koszyka: ${book.title}`);
  }, [book, onButtonClick]);

  return isDisabled ? (
    <StyledButton testId="add_to_basket">{children}</StyledButton>
  ) : (
    <StyledButton onClick={onClick} testId="add_to_basket">
      {children}
    </StyledButton>
  );
};

BookButtonStore.propTypes = {
  book: PropTypes.shape({}).isRequired,
  onButtonClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
};

export default BookButtonStore;
