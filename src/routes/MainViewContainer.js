import { connect } from 'react-redux';
import { get } from 'lodash';
import { bindActionCreators } from 'redux';
import MainView from './MainView';
import { setUserToken } from '../modules/user/userActions';

const mapStateToProps = state => {
  const stateToken = get(state, 'user.token');
  const token = stateToken || window.localStorage.getItem('token');
  return {
    stateToken,
    token,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setUserToken,
    },
    dispatch,
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainView);
