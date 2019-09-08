import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import Basket from './Basket';
import {
  removeFromBasket,
  orderBasket,
} from '../../modules/basket/basketActions';

const mapStateToProps = state => {
  const basket = get(state, 'basket.data');
  return {
    basket,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeFromBasket,
      orderBasket,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Basket);
