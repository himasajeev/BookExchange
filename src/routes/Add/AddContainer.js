import { connect } from 'react-redux';

import { get } from 'lodash';
import { bindActionCreators } from 'redux';
import Add from './Add';
import { addToBasket } from '../../modules/basket/basketActions';

const mapStateToProps = state => {
  const categories = get(state, 'categories.data');
  return {
    categories,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addToBasket,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Add);
