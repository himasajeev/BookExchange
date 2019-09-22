import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
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
  margin: ${PADDING.BASE} 0 ${PADDING.SMALL};
`;

const StyledTable = styled.table`
  width: 100%;
  text-align: center;
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
        <section data-testid="books_to_buy">
          <StyledSectionTitle>Ksiażki do kupienia</StyledSectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <th>ID ksiażki</th>
                <th>Tytuł</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {booksToBuy.map(book => (
                <tr key={book.bookProt}>
                  <td>{book.bookProt}</td>
                  <td>{book.title}</td>
                  <td>{book.state}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </section>
      )}
      {booksToSell.length > 0 && (
        <section data-testid="books_to_sell">
          <StyledSectionTitle>Ksiażki do sprzedania</StyledSectionTitle>
          <StyledTable>
            <thead>
              <tr>
                <th>ID ksiażki</th>
                <th>Tytuł</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {booksToSell.map(book => (
                <tr key={book.bookProt}>
                  <td>{book.bookProt}</td>
                  <td>{book.title}</td>
                  <td>{book.state}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
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
    name: PropTypes.string,
    surname: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    email: PropTypes.string,
  }),
  booksToBuy: PropTypes.arrayOf(PropTypes.shape({})),
  booksToSell: PropTypes.arrayOf(PropTypes.shape({})),
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
