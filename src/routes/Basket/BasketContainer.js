import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Basket from './Basket';
import { removeFromBasket } from '../../modules/basket/basketActions';

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
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Basket);
