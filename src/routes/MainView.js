import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation/NavigationContainer';
import Store from './Store/StoreContainer';
import Login from './Login/LoginContainer';
import Add from './Add/Add';
import Basket from './Basket/BasketContainer';
import Register from './Register/RegisterContainer';

const MainView = () => {
  return (
    <div>
      <Navigation />
      <Route path="/" exact component={Store} />
      <Route path="/add" component={Add} />
      <Route path="/login" component={Login} />
      <Route path="/basket" component={Basket} />
      <Route path="/register" component={Register} />
    </div>
  );
};

export default MainView;
