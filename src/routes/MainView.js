import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation/NavigationContainer';
import Store from './Store/StoreContainer';
import Login from './Login/LoginContainer';
import Add from './Add/AddContainer';
import Basket from './Basket/BasketContainer';
import Register from './Register/RegisterContainer';
import PrivateRoute from '../components/PrivateRoute/PrivateRouteContainer';
import Overview from './Overview/OverviewContainer';

const MainView = () => {
  return (
    <div>
      <Navigation />
      <PrivateRoute path="/" exact component={Store} />
      <PrivateRoute path="/add" component={Add} />
      <PrivateRoute path="/basket" component={Basket} />
      <PrivateRoute path="/overview" component={Overview} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
};

export default MainView;
