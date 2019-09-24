import { connect } from 'react-redux';
import { get } from 'lodash';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../../modules/user/userActions';
import Navigation from './Navigation';

const mapStateToProps = state => {
  const basket = get(state, 'basket.data', {});
  const basketCount = Object.keys(basket).length;
  const phase = get(state, 'phase.value');
  return {
    basketCount,
    phase,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      logoutUser,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
