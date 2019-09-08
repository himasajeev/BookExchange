import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import User from '../../components/User/User';
import Book from '../../components/Book/Book';
import { BOOK_POSITION } from '../../constants/bookPosition';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  & span {
    display: block;
  }
`;

const Overview = ({
  token,
  getOverview,
  getUserInfo,
  userInfo,
  booksToBuy,
  booksToSell,
  sell,
  buy,
  phase,
}) => {
  React.useEffect(() => {
    getOverview(token);
    getUserInfo(token);
  }, [getOverview, getUserInfo, token]);

  const { toReceive, received, sold, taken } = sell;
  const { ordered, bought, orderedAmount, boughtAmmount } = buy;
  return (
    <Wrapper>
      <span>Faza: {phase}</span>
      {userInfo && <User {...userInfo} />}
      <div>
        <span>Sprzedaz</span>
        <span>Do otrzymania {toReceive}</span>
        <span>Otrzymano {received}</span>
        <span>Sprzedano {sold}</span>
        <span>Zabrano {taken}</span>
      </div>
      <div>
        <span>Zakupy</span>
        <span>Zamówiono {ordered}</span>
        <span>Kupiono {bought}</span>
        <span>Ilosc zamówionych {orderedAmount}</span>
        <span>Ilosc kupionych {boughtAmmount}</span>
      </div>
      <div>
        <span>Ksiażki do kupienia</span>
        {booksToBuy.map(book => (
          <Book book={book} key={book.id} type={BOOK_POSITION.STATIC} />
        ))}
      </div>
      <div>
        <span>Ksiażki do sprzedania</span>
        {booksToSell.map(book => (
          <Book book={book} key={book.id} type={BOOK_POSITION.STATIC} />
        ))}
      </div>
      <div />
    </Wrapper>
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
  userInfo: PropTypes.shape({}),
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
    boughtAmmount: PropTypes.string,
  }),
  phase: PropTypes.string.isRequired,
};

export default Overview;
