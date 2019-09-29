import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import Recommended from './Recommended';
import { getRecommended } from '../../../modules/recommended/recommendedActions';

const mapStateToProps = state => {
  const recommendedBooks = get(state, 'recommended.data', []).filter(
    book => book,
  );
  const isLoading =
    recommendedBooks.length > 0 ? get(state, 'recommended.isLoading') : false;

  const basket = get(state, 'basket.data', {});
  const basketCount = Object.keys(basket).length;
  return {
    recommendedBooks,
    basketCount,
    isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getRecommended,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recommended);
