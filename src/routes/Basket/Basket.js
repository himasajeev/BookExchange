import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { isEmpty } from 'lodash';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import Book from '../../components/Book/Book';
import { BOOK_POSITION } from '../../constants/bookPosition';
import Button from '../../components/Button/Button';
import { PADDING } from '../../styles/padding';
import { FONT_SIZE, COLORS, FONT_COLORS } from '../../styles/globalVariables';
import { isBuy, isSell } from '../../utils/phaseToBool';

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

const StyledToPay = styled.div`
  margin: ${PADDING.BASE} 0;
  > span {
    display: block;
    margin: ${PADDING.SMALL} 0;
  }
`;

const StyledButton = styled(Button)`
  background: ${COLORS.SUCCESS};
  &:hover {
    background: #76ff03;
  }
  padding: ${PADDING.BASE};
  color: ${FONT_COLORS.LIGHT};
`;

const Basket = ({
  basket,
  removeFromBasket,
  orderBasket,
  phase,
  token,
  history,
  payAmount,
}) => {
  const onOrderBasket = React.useCallback(() => {
    if (phase) orderBasket(basket, phase, token, history);
  }, [basket, history, orderBasket, phase, token]);

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
      <StyledToPay>
        <span>Ksiażek w koszyku: {Object.keys(basket).length} </span>
        {isBuy(phase) && <span>Do zapłaty: {payAmount} zł</span>}
      </StyledToPay>
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
  history: ReactRouterPropTypes.history,
  payAmount: PropTypes.number,
};

export default withRouter(Basket);
