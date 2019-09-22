import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { isEmpty } from 'lodash';
import Book from '../../components/Book/Book';
import { BOOK_POSITION } from '../../constants/bookPosition';
import Button from '../../components/Button/Button';
import { PADDING } from '../../styles/padding';
import { FONT_SIZE, COLORS, FONT_COLORS } from '../../styles/globalVariables';
import { isSell, isBuy } from '../../utils/phaseToBool';

const StyledWrapper = styled.section`
  width: 90%;
  margin: ${PADDING.BASE} auto;
  text-align: center;
`;

const StyledPlaceholder = styled.h1`
  font-size: ${FONT_SIZE.TITLE};
`;
const StyledNotice = styled.span`
  font-size: ${FONT_SIZE.SMALL};
`;

const StyledButton = styled(Button)`
  background: ${COLORS.SUCCESS};
  &:hover {
    background: #76ff03;
  }
  padding: ${PADDING.BASE};
  color: ${FONT_COLORS.LIGHT};
`;

const Basket = ({ basket, removeFromBasket, orderBasket, phase, token }) => {
  const onOrderBasket = React.useCallback(() => {
    if (phase) orderBasket(basket, phase, token);
  }, [basket, orderBasket, phase, token]);

  const buttonText = isSell(phase) ? 'Potwierdź sprzedaż' : 'Potwierdź zakup';

  if (isEmpty(basket))
    return (
      <StyledWrapper>
        <StyledPlaceholder>Pusty koszyk</StyledPlaceholder>
        <StyledNotice>(Dodaj ksiażki do koszyka)</StyledNotice>
      </StyledWrapper>
    );
  return (
    <StyledWrapper>
      {Object.keys(basket).map(basketId => (
        <Book
          book={basket[basketId]}
          onButtonClick={removeFromBasket}
          key={basketId}
          phase={phase}
          type={BOOK_POSITION.BASKET}
          basketId={basketId}
        />
      ))}
      <StyledButton onClick={onOrderBasket} testId="order_basket">
        {buttonText}
      </StyledButton>
    </StyledWrapper>
  );
};

Basket.defaultProps = {
  basket: {},
  phase: 0,
};

Basket.propTypes = {
  basket: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({}),
  }),
  removeFromBasket: PropTypes.func.isRequired,
  orderBasket: PropTypes.func.isRequired,
  phase: PropTypes.number,
  token: PropTypes.string.isRequired,
};

export default Basket;
