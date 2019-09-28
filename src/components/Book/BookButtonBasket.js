import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { StyledButton } from './BookStyled';

const BookButtonBasket = ({
  onButtonClick,
  basketId,
  children,
  bookTitle,
  isFloatingRight,
}) => {
  const onClick = React.useCallback(() => {
    onButtonClick(basketId);
    toast.info(`Usunięto "${bookTitle}" z koszyka`);
  }, [onButtonClick, basketId, bookTitle]);

  return (
    <StyledButton onClick={onClick} isFloatingRight={isFloatingRight}>
      {children}
    </StyledButton>
  );
};

BookButtonBasket.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  basketId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bookTitle: PropTypes.string.isRequired,
  isFloatingRight: PropTypes.bool,
};

export default BookButtonBasket;
