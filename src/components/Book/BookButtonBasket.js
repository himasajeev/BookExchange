import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './BookStyled';

const BookButtonBasket = ({ onButtonClick, basketId, children }) => {
  const onClick = React.useCallback(() => onButtonClick(basketId), [
    onButtonClick,
    basketId,
  ]);

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

BookButtonBasket.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  basketId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BookButtonBasket;
