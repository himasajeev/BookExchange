import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { uniqueId } from 'lodash';
import BookButton from './BookButton';
import { BOOK_POSITION } from '../../constants/bookPosition';
import { getImageUrl } from '../../utils/getImageUrl';

const margin = '5px 0';

const Wrapper = styled.div`
  height: 200px;
  display: flex;
`;

const RightPanel = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
  margin-right: 10px;
`;

const StyledAuthor = styled.span`
  margin: ${margin};
`;

const StyledTitle = styled.span`
  color: #1d70b7;
  font-size: 20px;
`;

const BookBottom = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-evenly;
`;

const StyledPrice = styled.span`
  font-size: 20px;
  color: red;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCategories = styled.span``;

const StyledPublisher = styled.span`
  margin: ${margin};
`;

const StyledIsbn = styled.span`
  margin: ${margin};
`;

const createBasketBook = book => {
  const basketBookId = uniqueId();
  return {
    [basketBookId]: {
      ...book,
    },
  };
};

const getOnClick = (type, book, basketId) => {
  switch (type) {
    case BOOK_POSITION.STORE:
      return createBasketBook(book);
    case BOOK_POSITION.BASKET:
      return basketId;
    default:
      return null;
  }
};

const Book = ({ book, onButtonClick, type, basketId }) => {
  const onClick = React.useCallback(
    () => onButtonClick(getOnClick(type, book, basketId)),
    [basketId, book, onButtonClick, type],
  );

  const { id, iSBN, title, category, author, price, publisher } = book;

  return (
    <Wrapper>
      <Image src={getImageUrl(id)} alt={title} />
      <RightPanel>
        <StyledTitle>{title}</StyledTitle>
        <StyledAuthor>{author}</StyledAuthor>
        <StyledCategories>{category}</StyledCategories>
        <StyledPublisher>Wydawnictwo: {publisher}</StyledPublisher>
        <StyledIsbn>ISBN: {iSBN}</StyledIsbn>
        <BookBottom>
          <StyledPrice>{price} zł</StyledPrice>
          <BookButton type={type} onClick={onClick} />
        </BookBottom>
      </RightPanel>
    </Wrapper>
  );
};

Book.defaultProps = {
  basketId: '',
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iSBN: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  basketId: PropTypes.string,
};

export default Book;
