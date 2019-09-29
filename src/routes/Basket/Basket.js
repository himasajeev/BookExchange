import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { isEmpty } from 'lodash';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { TransitionGroup } from 'react-transition-group';

import Paper from '@material-ui/core/Paper';
import Book from '../../components/Book/Book';
import { BOOK_POSITION } from '../../constants/bookPosition';

import { PADDING } from '../../styles/padding';
import { COLORS, FONT_SIZE, MAX_WIDTH } from '../../styles/globalVariables';
import { isBuy, isSell } from '../../utils/phaseToBool';
import Select from '../../components/Select/Select';
import { PAY_SELECT_VALUES } from '../../constants/paySelectValues';

const StyledWrapper = styled.section`
  width: 90%;
  margin: ${PADDING.BASE_LARGER} auto;
  text-align: center;
  display: flex;
  flex-direction: column;
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

export const StyledButton = styled(Button)`
  background: ${COLORS.MAIN};
  color: #fff;
  font-size: 16px;
  align-self: center;

  &:hover,
  &:active {
    background: ${COLORS.MAIN_SECONDARY};
  }
`;

const StyledTransitionGroup = styled(TransitionGroup)`
  display: flex;
  flex-direction: column;
`;

const StyledPaper = styled(Paper)`
  max-width: ${MAX_WIDTH};
  width: 100%;
  margin: ${PADDING.BASE} auto;
  padding: ${PADDING.BASE};
`;

const paySelectOptions = [
  {
    value: PAY_SELECT_VALUES.AT_LOCATION,
    label: PAY_SELECT_VALUES.AT_LOCATION,
  },
  {
    value: PAY_SELECT_VALUES.WIRE_TRANSFER,
    label: PAY_SELECT_VALUES.WIRE_TRANSFER,
  },
];

const Basket = ({
  basket,
  removeFromBasket,
  orderBasket,
  phase,
  token,
  history,
  payAmount,
}) => {
  const [paySelectValue, setPaySelectValue] = React.useState('');
  const onOrderBasket = React.useCallback(() => {
    if (phase) orderBasket(basket, phase, token, history, paySelectValue);
  }, [basket, history, orderBasket, paySelectValue, phase, token]);

  const buttonText = isSell(phase) ? 'Potwierdź sprzedaż' : 'Potwierdź zakup';

  const handlePaySelectChange = (selected, element) => {
    const { action } = element;
    if (action === 'select-option') {
      setPaySelectValue(selected.value);
    }
  };

  if (isEmpty(basket))
    return (
      <StyledWrapper>
        <StyledPlaceholder>Pusty koszyk</StyledPlaceholder>
        <StyledNotice>(Dodaj ksiażki do koszyka)</StyledNotice>
      </StyledWrapper>
    );

  return (
    <StyledWrapper>
      <StyledTransitionGroup>
        {Object.keys(basket).map(basketId => (
          <Book
            key={basketId}
            book={basket[basketId]}
            onButtonClick={removeFromBasket}
            phase={phase}
            type={BOOK_POSITION.BASKET}
            basketId={basketId}
          />
        ))}
      </StyledTransitionGroup>
      <StyledPaper>
        <StyledToPay>
          <span>Ksiażek w koszyku: {Object.keys(basket).length} </span>
          {isBuy(phase) && <span>Do zapłaty: {payAmount} zł</span>}
        </StyledToPay>
        {isBuy(phase) && (
          <Select
            name="payment"
            onChange={handlePaySelectChange}
            options={paySelectOptions}
            placeholder="Wybierz rodzaj płatności"
            label="Rodzaj płatności"
          />
        )}
        <StyledButton onClick={onOrderBasket} testId="order_basket">
          {buttonText}
        </StyledButton>
      </StyledPaper>
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
