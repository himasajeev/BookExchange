import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation/NavigationContainer';
import Store from './Store/StoreContainer';
import Login from './Login/Login';
import Add from './Add/Add';
import Basket from './Basket/BasketContainer';

const MainView = () => {
  return (
    <div>
      <Navigation />
      <Route path="/" exact component={Store} />
      <Route path="/add" component={Add} />
      <Route path="/login" component={Login} />
      <Route path="/basket" component={Basket} />
    </div>
  );
};

export default MainView;
