import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledAuthor,
  StyledBottomSection,
  StyledCollapsedMenu,
  StyledContainer,
  StyledDescription,
  StyledIcon,
  StyledTitle,
  StyledTopContainer,
  StyledSelectedState,
} from './BookStyled';

import BookButtonStore from './BookButtonStore';

const BookSell = ({ book, ...rest }) => {
  const { iSBN, title, category, author, publisher } = book;

  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledContainer>
      <StyledTopContainer>
        <div>
          <img src="/images/book-placeholder.jpg" alt="xd" />
        </div>
        <StyledDescription>
          <StyledTitle>{title}</StyledTitle>
          <StyledAuthor>{author}</StyledAuthor>
          <StyledSelectedState />
          <StyledBottomSection>
            <StyledIcon onClick={handleCollapse} />
            <BookButtonStore book={book} {...rest}>
              Sprzedaj
            </BookButtonStore>
          </StyledBottomSection>
        </StyledDescription>
      </StyledTopContainer>
      <StyledCollapsedMenu isCollapsed={isCollapsed}>
        <span>ISBN: {iSBN}</span>
        <span>Kategoria: {category}</span>
        <span>Wydawnictwo: {publisher}</span>
      </StyledCollapsedMenu>
    </StyledContainer>
  );
};

BookSell.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iSBN: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,

    publisher: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookSell;
