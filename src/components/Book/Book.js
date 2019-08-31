import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  background: red;
`;

const Book = ({ id, isbn, author, price, publisher }) => {
  return (
    <Wrapper>
      <div>{id}</div>
      <div>{isbn}</div>
      <div>{author}</div>
      <div>{price}</div>
      <div>{publisher}</div>
    </Wrapper>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  isbn: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
};

export default Book;
