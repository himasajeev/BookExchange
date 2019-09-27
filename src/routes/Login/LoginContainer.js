import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login';
import { loginUser, setUserToken } from '../../modules/user/userActions';

const mapStateToProps = state => {
  const { token } = state.user;
  return {
    token,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loginUser,
      setUserToken,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
