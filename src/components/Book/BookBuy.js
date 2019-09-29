import React from 'react';
import PropTypes from 'prop-types';

import BookButtonStoreBuy from './BookButtonStore';
import { findStateVariant } from '../../utils/findStateVariant';

import {
  StyledCard,
  StyledCardActions,
  StyledSelect,
  StyledUnavailable,
} from './BookStyled';
import BookContent from './BookContent';

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

const BookBuy = ({ book, phase, ...rest }) => {
  const { prices, quants } = book;

  const [selectedState, setSelectedState] = React.useState(null);

  const handleChange = selected => {
    setSelectedState(selected);
  };

  const options = getSelectOptions(prices, quants);

  const isUnavailable = options.length <= 0;
  return (
    <StyledCard>
      <BookContent {...book} />
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
          phase={phase}
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
  phase: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BookBuy;
