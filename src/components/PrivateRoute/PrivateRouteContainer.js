import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = state => {
  const { token } = state.user;

  return {
    token,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
