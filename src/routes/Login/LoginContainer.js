import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import Login from './Login';
import { loginUser } from '../../modules/user/userActions';
import { USER_ERROR_TYPES } from '../../constants/userErrorTypes';

const mapStateToProps = state => {
  const { token, error } = state.user;
  const isError = get(state, 'user.error.type') === USER_ERROR_TYPES.LOGIN;
  const loginError = isError ? error.message : null;
  return {
    loginError,
    token,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loginUser,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
