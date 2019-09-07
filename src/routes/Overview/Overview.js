import React from 'react';
import PropTypes from 'prop-types';

import User from '../../components/User/User';
import Book from '../../components/Book/Book';
import { BOOK_POSITION } from '../../constants/bookPosition';

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
  const { ordered, bought, orderedAmount, boughtAmmount } = buy;
  return (
    <div>
      {userInfo && <User {...userInfo} />}
      <div>
        <span>Sprzedaz</span>
        {toReceive && <span>Do otrzymania {toReceive}</span>}
        {received && <span>Otrzymano {received}</span>}
        {sold && <span>Sprzedano {sold}</span>}
        {taken && <span>Zabrano {taken}</span>}
      </div>
      <div>
        <span>Zakupy</span>
        {ordered && <span>Zamówiono {ordered}</span>}
        {bought && <span>Kupiono {bought}</span>}
        {orderedAmount && <span>Ilosc zamówionych {orderedAmount}</span>}
        {boughtAmmount && <span>Ilosc kupionych {boughtAmmount}</span>}
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
    </div>
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
};

export default Overview;
