import { connect } from 'react-redux';

import { get } from 'lodash';
import Add from './Add';

const mapStateToProps = state => {
  const categories = get(state, 'categories.data');
  const { token, error } = state.user;
  return {
    categories,
    token,
  };
};

export default connect(mapStateToProps)(Add);
