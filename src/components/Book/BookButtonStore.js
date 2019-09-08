import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { uniqueId } from 'lodash';

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

const createBasketBook = book => {
  const basketBookId = uniqueId();
  return {
    [basketBookId]: {
      ...book,
    },
  };
};

const BookButton = ({ onButtonClick, book, children }) => {
  const onClick = React.useCallback(
    () => onButtonClick(createBasketBook(book)),
    [book, onButtonClick],
  );

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

BookButton.propTypes = {
  book: PropTypes.shape({}).isRequired,
  onButtonClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default BookButton;
