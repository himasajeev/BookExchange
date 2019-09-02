import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

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

const StyledButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 5px;
  background: red;
  color: white;
  align-self: flex-end;
  margin-top: auto;
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

const Book = ({
  id,
  isbn,
  title,
  categories,
  author,
  price,
  publisher,
  image,
}) => {
  const AddBook = React.useCallback(() => {
    console.log(id);
  }, [id]);

  return (
    <Wrapper>
      <Image src={image} alt={title} />
      <RightPanel>
        <StyledTitle>{title}</StyledTitle>
        <StyledAuthor>{author}</StyledAuthor>
        <StyledCategories>{categories.map(cat => `${cat} `)}</StyledCategories>
        <StyledPublisher>Wydawnictwo: {publisher}</StyledPublisher>
        <StyledIsbn>ISBN: {isbn}</StyledIsbn>
        <BookBottom>
          <StyledPrice>{price} zł</StyledPrice>
          <StyledButton>Do koszyka</StyledButton>
        </BookBottom>
      </RightPanel>
    </Wrapper>
  );
};

Book.defaultProps = {
  categories: [],
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  isbn: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Book;
