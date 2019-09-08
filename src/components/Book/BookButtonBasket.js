import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Button from '../Button/Button';

const StyledButton = styled(Button)`
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 5px;
  background: red;
  color: white;
  align-self: flex-end;
  margin-top: auto;
`;

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
