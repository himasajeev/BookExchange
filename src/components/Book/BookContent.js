import React from 'react';
import PropTypes from 'prop-types';
import { StyledCardContent, StyledTopography } from './BookStyled';

function BookContent({ title, author, category, publisher, iSBN }) {
  return (
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
  );
}

BookContent.defaultProps = {
  title: '',
  author: '',
  category: '',
  publisher: '',
  iSBN: '',
};

BookContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  publisher: PropTypes.string,
  iSBN: PropTypes.string,
};

export default BookContent;
