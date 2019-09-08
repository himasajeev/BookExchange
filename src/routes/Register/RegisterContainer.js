import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import Register from './Register';
import { registerUser } from '../../modules/user/userActions';
import { USER_ERROR_TYPES } from '../../constants/userErrorTypes';

const mapStateToProps = state => {
  const { token, error } = state.user;
  const isError = get(state, 'user.error.type') === USER_ERROR_TYPES.REGISTER;
  const registerError = isError ? error.message : null;
  return {
    registerError,
    token,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      registerUser,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
