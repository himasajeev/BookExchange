import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from './Register';
import { registerUser } from '../../modules/user/userActions';

const mapStateToProps = state => {
  const { token } = state.user;

  return {
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
