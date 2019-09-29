import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection, StyledSectionTitle } from './OverviewStyled';
import { nullToZero } from '../../utils/nullToZero';

const OrderOverview = ({ sell, buy }) => {
  const { toReceive, received, sold, taken } = sell;
  const { ordered, bought, orderedAmount, boughtAmount } = buy;
  return (
    <React.Fragment>
      <StyledSection>
        <StyledSectionTitle>Sprzedaż</StyledSectionTitle>
        <span>Do przyniesienia: {nullToZero(toReceive)}</span>
        <span>Przyniesione: {nullToZero(received)}</span>
        <span>Sprzedane: {nullToZero(sold)}</span>
        <span>Odebrane: {nullToZero(taken)}</span>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>Zakupy</StyledSectionTitle>
        <span>Ilosc zamówionych: {nullToZero(ordered)}</span>
        <span>Do zapłacenia: {`${nullToZero(orderedAmount)} zł`}</span>
        <span>Kupiono: {`${nullToZero(bought)}`}</span>
        <span>Zaplacono: {`${nullToZero(boughtAmount)} zł`}</span>
      </StyledSection>
    </React.Fragment>
  );
};

OrderOverview.defaultProps = {
  sell: {},
  buy: {},
};

OrderOverview.propTypes = {
  sell: PropTypes.shape({
    toReceive: PropTypes.string,
    received: PropTypes.string,
    sold: PropTypes.string,
    taken: PropTypes.string,
  }),
  buy: PropTypes.shape({
    ordered: PropTypes.string,
    bought: PropTypes.string,
    orderedAmount: PropTypes.string,
    boughtAmount: PropTypes.string,
  }),
};
export default OrderOverview;
