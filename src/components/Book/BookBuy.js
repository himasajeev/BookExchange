import React from 'react';
import PropTypes from 'prop-types';

import BookButtonStoreBuy from './BookButtonStore';
import { findStateVariant } from '../../utils/findStateVariant';

import {
  StyledAuthor,
  StyledBottomSection,
  StyledCollapsedMenu,
  StyledContainer,
  StyledDescription,
  StyledIcon,
  StyledSelect,
  StyledTitle,
  StyledTopContainer,
  StyledUnavailable,
} from './BookStyled';

const getSelectOptions = (prices, quants) => {
  const options = [];
  prices.forEach((price, index) => {
    const priceQuantity = Number(quants[index]);
    if (priceQuantity !== 0)
      options.push({
        value: index,
        label: `${price}zł ${findStateVariant(index)}`,
      });
  });
  return options;
};

const BookBuy = ({ book, ...rest }) => {
  const { iSBN, title, category, author, prices, quants, publisher } = book;

  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [selectedState, setSelectedState] = React.useState(null);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleChange = selected => {
    setSelectedState(selected);
  };

  const options = getSelectOptions(prices, quants);

  return (
    <StyledContainer>
      <StyledTopContainer>
        <div>
          <img src="/images/book-placeholder.jpg" alt="xd" />
        </div>
        <StyledDescription>
          <StyledTitle>{title}</StyledTitle>
          <StyledAuthor>{author}</StyledAuthor>
          {options.length > 0 ? (
            <StyledSelect
              value={selectedState}
              onChange={handleChange}
              options={options}
              className="add_book_select"
              isClearable
            />
          ) : (
            <StyledUnavailable>Niedostępna</StyledUnavailable>
          )}
          <StyledBottomSection>
            <StyledIcon onClick={handleCollapse} />
            <BookButtonStoreBuy
              book={{ ...book, selectedState }}
              isDisabled={selectedState === null}
              {...rest}
            >
              Kup
            </BookButtonStoreBuy>
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

BookBuy.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    iSBN: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf.isRequired,
    quants: PropTypes.arrayOf.isRequired,
    publisher: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookBuy;
