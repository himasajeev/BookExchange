import { connect } from 'react-redux';
import { get } from 'lodash';
import { isBuy } from '../../utils/phaseToBool';
import BasketOverlay from './Overlay';

const mapStateToProps = state => {
  const basket = get(state, 'basket.data', {});
  const phase = get(state, 'phase.value');

  const payAmount = isBuy(phase)
    ? Object.keys(basket).reduce((total, basketId) => {
        const book = basket[basketId];
        const selectedStatePosition = book.selectedState.value;
        return total + Number(book.prices[selectedStatePosition]);
      }, 0)
    : undefined;

  const basketCount = Object.keys(basket).length;

  return {
    basketCount,
    payAmount,
  };
};

export default connect(mapStateToProps)(BasketOverlay);
