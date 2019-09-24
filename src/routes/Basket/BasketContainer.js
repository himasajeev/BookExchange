import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import Basket from './Basket';
import {
  removeFromBasket,
  orderBasket,
} from '../../modules/basket/basketActions';
import { isBuy } from '../../utils/phaseToBool';

const mapStateToProps = state => {
  const basket = get(state, 'basket.data', {});
  const phase = get(state, 'phase.value');

  const payAmount = isBuy(phase)
    ? Object.keys(basket).reduce((total, basketId) => {
        const book = basket[basketId];
        const selectedStatePosition = book.selectedState.value;
        return total + Number(book.prices[selectedStatePosition]);
      }, 0)
    : null;

  return {
    basket,
    phase,
    payAmount,
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
