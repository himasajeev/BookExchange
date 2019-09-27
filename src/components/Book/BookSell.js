import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BookButtonStore from './BookButtonStore';
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

const BookSell = ({ book, ...rest }) => {
  const { iSBN, title, category, author, publisher } = book;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {author}
        </Typography>
        <Typography color="textSecondary">{category}</Typography>
        <Typography variant="body2" component="p">
          {publisher}
        </Typography>
        <Typography variant="body2" component="p">
          {iSBN}
        </Typography>
      </CardContent>
      <CardActions>
        <BookButtonStore book={book} {...rest}>
          Sprzedaj
        </BookButtonStore>
      </CardActions>
    </Card>
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
