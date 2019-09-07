import { connect } from 'react-redux';
import { get } from 'lodash';
import Navigation from './Navigation';

const mapStateToProps = state => {
  const basket = get(state, 'basket.data', {});
  const basketCount = Object.keys(basket).length;
  return {
    basketCount,
  };
};

export default connect(mapStateToProps)(Navigation);
