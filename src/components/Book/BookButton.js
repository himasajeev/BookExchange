import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Button from '../Button/Button';
import { BOOK_POSITION } from '../../constants/bookPosition';

const StyledButton = styled(Button)`
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 5px;
  background: red;
  color: white;
  align-self: flex-end;
  margin-top: auto;
`;

const buttonText = {
  [BOOK_POSITION.STORE]: 'Do koszyka',
  [BOOK_POSITION.BASKET]: 'Usuń z koszyka',
};

const BookButton = ({ type, onClick }) => {
  return <StyledButton onClick={onClick}>{buttonText[type]}</StyledButton>;
};

BookButton.propTypes = {
  type: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BookButton;
