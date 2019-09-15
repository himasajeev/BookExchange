import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import Book from '../../components/Book/Book';
import { BOOK_POSITION } from '../../constants/bookPosition';
import { PADDING } from '../../styles/padding';

const StyledWrapper = styled.div`
  margin: ${PADDING.BASE} auto;
  width: 90%;
  & span {
    display: block;
  }
  max-width: 450px;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: ${PADDING.BASE};
`;

const StyledSectionTitle = styled.h2`
  text-align: center;
  font-size: 18px;
  margin: ${PADDING.BASE} 0;
`;

const nullToZero = value => {
  if (value === null) return 0;
  return value;
};

const Overview = ({
  token,
  getOverview,
  getUserInfo,
  userInfo,
  booksToBuy,
  booksToSell,
  sell,
  buy,
}) => {
  React.useEffect(() => {
    getOverview(token);
    getUserInfo(token);
  }, [getOverview, getUserInfo, token]);

  const { toReceive, received, sold, taken } = sell;
  const { ordered, bought, orderedAmount, boughtAmount } = buy;
  const { name, surname, year, email } = userInfo;

  return (
    <StyledWrapper>
      <StyledTitle>Podsumowanie konta</StyledTitle>
      {userInfo && (
        <section>
          <StyledSectionTitle>Dane</StyledSectionTitle>
          <span>Imie: {name}</span>
          <span>Nazwisko: {surname}</span>
          <span>Rok: {year}</span>
          <span>Email: {email}</span>
        </section>
      )}
      <section>
        <StyledSectionTitle>Sprzedaż</StyledSectionTitle>
        <span>Do przyniesienia: {nullToZero(toReceive)}</span>
        <span>Przyniesione: {nullToZero(received)}</span>
        <span>Sprzedane: {nullToZero(sold)}</span>
        <span>Odebrane: {nullToZero(taken)}</span>
      </section>
      <section>
        <StyledSectionTitle>Zakupy</StyledSectionTitle>
        <span>Zamówiono: {`${nullToZero(ordered)} zł`}</span>
        <span>Kupiono: {`${nullToZero(bought)} zł`}</span>
        <span>Ilosc zamówionych: {nullToZero(orderedAmount)}</span>
        <span>Ilosc kupionych: {nullToZero(boughtAmount)}</span>
      </section>
      {booksToBuy.length > 0 && (
        <section>
          <StyledSectionTitle>Ksiażki do kupienia</StyledSectionTitle>
          {booksToBuy.map(book => (
            <Book book={book} key={book.id} type={BOOK_POSITION.STATIC} />
          ))}
        </section>
      )}
      {booksToSell.length > 0 && (
        <section>
          <StyledSectionTitle>Ksiażki do sprzedania</StyledSectionTitle>
          {booksToSell.map(book => (
            <Book book={book} key={book.id} type={BOOK_POSITION.STATIC} />
          ))}
        </section>
      )}
      <div />
    </StyledWrapper>
  );
};

Overview.defaultProps = {
  token: '',
  userInfo: {},
  booksToBuy: [],
  booksToSell: [],
  sell: {},
  buy: {},
};

Overview.propTypes = {
  token: PropTypes.string,
  getOverview: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    email: PropTypes.string.isRequired,
  }),
  booksToBuy: PropTypes.arrayOf({}),
  booksToSell: PropTypes.arrayOf({}),
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

export default Overview;
