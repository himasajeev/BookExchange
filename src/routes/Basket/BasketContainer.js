import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Basket from './Basket';
import {
  removeFromBasket,
  orderBasket,
} from '../../modules/basket/basketActions';

const mapStateToProps = state => {
  const { basket } = state;
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
