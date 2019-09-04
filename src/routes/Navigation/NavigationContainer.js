import { connect } from 'react-redux';
import Navigation from './Navigation';

const mapStateToProps = state => {
  const { basket } = state;
  const basketCount = Object.keys(basket).length;
  return {
    basketCount,
  };
};

export default connect(mapStateToProps)(Navigation);
