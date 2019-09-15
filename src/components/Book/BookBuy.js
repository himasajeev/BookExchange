import React from 'react';
import PropTypes from 'prop-types';

import BookButtonStoreBuy from './BookButtonStore';
import BookButtonBasket from './BookButtonBasket';
import { BOOK_POSITION } from '../../constants/bookPosition';
import { getImageUrl } from '../../utils/getImageUrl';
import { findStateVariant } from '../../utils/findStateVariant';

import {
  StyledAuthor,
  StyledBottomSection,
  StyledCollapsedMenu,
  StyledContainer,
  StyledDescription,
  StyledIcon,
  StyledTitle,
  StyledSelect,
  StyledTopContainer,
  StyledUnavailable,
} from './BookStyled';

const getSelectOptions = (prices, quants) => {
  const list = prices.map((price, index) => {
    const priceQuantity = Number(quants[index]);
    // if (priceQuantity !== 0)
    return {
      value: index,
      label: `${price}zł ${findStateVariant(index)}`,
    };
    // return null;
  });

  return list;
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
              isClearable
            />
          ) : (
            <StyledUnavailable>Niedostępna</StyledUnavailable>
          )}
          <StyledBottomSection>
            <StyledIcon onClick={handleCollapse} />
            <BookButtonStoreBuy book={{ ...book, selectedState }} {...rest}>
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
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookBuy;