import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledPaymentContainer,
  StyledSection,
  StyledSectionTitle,
} from './OverviewStyled';
import { nullToZero } from '../../utils/nullToZero';
import { paymentsTranslations } from '../../constants/paymentsTranslations';

const Payments = ({ payments }) => {
  return (
    <StyledSection>
      <StyledSectionTitle>Platności</StyledSectionTitle>
      {payments.length ? (
        payments.map(payment => (
          <StyledPaymentContainer key={payment.added}>
            <span>Data płatności: {payment.added}</span>
            <span>Opis: {payment.description}</span>
            <span>Zapłacono: {`${nullToZero(payment.amount)} zł`}</span>
            <span>
              Rodzaj transakcji: {paymentsTranslations[payment.transType]}
            </span>
          </StyledPaymentContainer>
        ))
      ) : (
        <span>Brak płatności na giełdzie.</span>
      )}
    </StyledSection>
  );
};

Payments.defaultProps = {
  payments: [],
};

Payments.propTypes = {
  payments: PropTypes.arrayOf(
    PropTypes.shape({
      added: PropTypes.string,
      description: PropTypes.string,
      amount: PropTypes.string,
      transType: PropTypes.string,
    }),
  ),
};

export default Payments;
