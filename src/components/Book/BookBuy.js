import React from 'react';
import PropTypes from 'prop-types';

import BookButtonStoreBuy from './BookButtonStore';
import { findStateVariant } from '../../utils/findStateVariant';

import {
  StyledCard,
  StyledCardActions,
  StyledCardContent,
  StyledSelect,
  StyledTopography,
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

  const [selectedState, setSelectedState] = React.useState(null);

  const handleChange = selected => {
    setSelectedState(selected);
  };

  const options = getSelectOptions(prices, quants);

  const isUnavailable = options.length <= 0;
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
      <StyledCardActions>
        {isUnavailable ? (
          <StyledUnavailable>Niedostępna</StyledUnavailable>
        ) : (
          <StyledSelect
            value={selectedState}
            onChange={handleChange}
            options={options}
            className="add_book_select"
            label="Stan ksiażki"
            isClearable
          />
        )}

        <BookButtonStoreBuy
          book={{ ...book, selectedState }}
          isSelected={selectedState !== null}
          isUnavailable={isUnavailable}
          {...rest}
        >
          Kup
        </BookButtonStoreBuy>
      </StyledCardActions>
    </StyledCard>
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
