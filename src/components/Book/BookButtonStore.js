import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { createBasketBook } from '../../utils/createBasketBook';
import { StyledButton } from './BookStyled';

const BookButtonStore = ({
  onButtonClick,
  book,
  isSelected,
  children,
  isFloatingRight,
  isUnavailable,
}) => {
  const onClick = React.useCallback(() => {
    onButtonClick(createBasketBook(book));
    toast.success(`Dodano do koszyka "${book.title}".`);
  }, [book, onButtonClick]);

  const displayError = () => {
    toast.error('Wybierz stan książki');
  };

  if (isUnavailable) return null;

  if (isSelected)
    return (
      <StyledButton
        onClick={onClick}
        isFloatingRight={isFloatingRight}
        data-testid="add_to_basket"
      >
        {children}
      </StyledButton>
    );

  return (
    <StyledButton
      isFloatingRight={isFloatingRight}
      data-testid="add_to_basket"
      onClick={displayError}
    >
      {children}
    </StyledButton>
  );
};

BookButtonStore.propTypes = {
  book: PropTypes.shape({ title: PropTypes.string }).isRequired,
  onButtonClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool,
  title: PropTypes.string.isRequired,
  isFloatingRight: PropTypes.bool,
  isUnavailable: PropTypes.bool,
};

export default BookButtonStore;
