import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from './Register';
import { registerUser } from '../../modules/user/userActions';

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      registerUser,
    },
    dispatch,
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(Register);
