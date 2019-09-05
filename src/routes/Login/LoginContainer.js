import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login';
import { loginUser } from '../../modules/user/userActions';

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loginUser,
    },
    dispatch,
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
