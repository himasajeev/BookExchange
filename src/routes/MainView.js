import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from './Navigation/NavigationContainer';
import Store from './Store/StoreContainer';
import Login from './Login/LoginContainer';
import Add from './Add/AddContainer';
import Basket from './Basket/BasketContainer';
import Register from './Register/RegisterContainer';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Overview from './Overview/OverviewContainer';

const MainView = ({ token, stateToken, setUserToken }) => {
  React.useEffect(() => {
    if (!stateToken) {
      const windowToken = window.localStorage.getItem('token');
      setUserToken(windowToken);
    }
  });

  return (
    <div>
      {token && <Navigation token={token} />}
      <PrivateRoute path="/" token={token} exact component={Store} />
      <PrivateRoute path="/add" token={token} component={Add} />
      <PrivateRoute path="/basket" token={token} component={Basket} />
      <PrivateRoute path="/overview" token={token} component={Overview} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
};

MainView.defaultProps = {
  token: '',
  stateToken: '',
};

MainView.propTypes = {
  token: PropTypes.string,
  setUserToken: PropTypes.func.isRequired,
  stateToken: PropTypes.string,
};

export default MainView;
