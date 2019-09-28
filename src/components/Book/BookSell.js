import React from 'react';
import PropTypes from 'prop-types';

import CardActions from '@material-ui/core/CardActions';
import BookButtonStore from './BookButtonStore';
import { StyledCard, StyledCardContent, StyledTopography } from './BookStyled';

const BookSell = ({ book, ...rest }) => {
  const { iSBN, title, category, author, publisher } = book;

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledTopography variant="h5" component="h2">
          {title}
        </StyledTopography>
        <StyledTopography color="textSecondary" gutterBottom>
          {author}
        </StyledTopography>
        <StyledTopography isFirst variant="body2" component="p">
          {category}
        </StyledTopography>
        <StyledTopography variant="body2" component="p">
          {publisher}
        </StyledTopography>
        <StyledTopography variant="body2" component="p">
          {iSBN}
        </StyledTopography>
      </StyledCardContent>
      <CardActions>
        <BookButtonStore isFloatingRight isSelected book={book} {...rest}>
          Sprzedaj
        </BookButtonStore>
      </CardActions>
    </StyledCard>
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
  }).isRequired,
};

export default BookSell;

// {/*<StyledContainer>*/}
// {/*  <StyledTopContainer>*/}
// {/*    <div>*/}
// {/*      <img src="/images/book-placeholder.jpg" alt="xd" />*/}
// {/*    </div>*/}
// {/*    <StyledDescription>*/}
// {/*      <StyledTitle>{title}</StyledTitle>*/}
// {/*      <StyledAuthor>{author}</StyledAuthor>*/}
// {/*      <StyledSelectedState />*/}
// {/*      <StyledBottomSection>*/}
// {/*        <StyledIcon onClick={handleCollapse} />*/}
// {/*        <BookButtonStore book={book} {...rest}>*/}
// {/*          Sprzedaj*/}
// {/*        </BookButtonStore>*/}
// {/*      </StyledBottomSection>*/}
// {/*    </StyledDescription>*/}
// {/*  </StyledTopContainer>*/}
// {/*  <StyledCollapsedMenu isCollapsed={isCollapsed}>*/}
// {/*    <span>ISBN: {iSBN}</span>*/}
// {/*    <span>Kategoria: {category}</span>*/}
// {/*    <span>Wydawnictwo: {publisher}</span>*/}
// {/*  </StyledCollapsedMenu>*/}
// {/*</StyledContainer>*/}
