import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading/Loading';
import { StyledPaper, StyledTitle, StyledWrapper } from './OverviewStyled';
import AccountData from './AccountData';
import OrderHistory from './OrderHistory';
import Payments from './Payments';
import OrderOverview from './OrderOverview';

const Overview = ({
  token,
  getOverview,
  getUserInfo,
  userInfo,
  booksToBuy,
  booksToSell,
  sell,
  buy,
  payments,
  isLoading,
}) => {
  React.useEffect(() => {
    getOverview(token);
    getUserInfo(token);
  }, [getOverview, getUserInfo, token]);

  return (
    <StyledWrapper>
      <Loading isLoading={isLoading}>
        <StyledPaper>
          <StyledTitle>Podsumowanie konta</StyledTitle>
          <AccountData userInfo={userInfo} />
          <OrderOverview sell={sell} buy={buy} />
          <Payments payments={payments} />
          <OrderHistory bookData={booksToBuy} title="Książki do kupienia" />
          <OrderHistory bookData={booksToSell} title="Książki do sprzedania" />
        </StyledPaper>
      </Loading>
    </StyledWrapper>
  );
};

Overview.defaultProps = {
  token: '',
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
  payments: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool,
};

export default Overview;
