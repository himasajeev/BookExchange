import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import { getOverview } from '../../modules/overview/overviewActions';
import { getUserInfo } from '../../modules/user/userActions';
import Overview from './Overview';

const mapStateToProps = state => {
  const { userInfo } = state.user;
  const isLoading = get(state, 'overview.isLoading');
  const booksToBuy = get(state, 'overview.booksToBuy');
  const booksToSell = get(state, 'overview.booksToSell');
  const sell = get(state, 'overview.sell');
  const buy = get(state, 'overview.buy');
  const payments = get(state, 'overview.payments');

  return {
    userInfo,
    isLoading,
    booksToBuy,
    booksToSell,
    sell,
    buy,
    payments,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getOverview,
      getUserInfo,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Overview);
