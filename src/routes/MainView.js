import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Store from './Store/Store';
import Login from './Login/Login';
import Add from './Add/Add';

const MainView = () => {
  return (
    <div>
      <Navigation />
      <Route path="/" exact component={Store} />
      <Route path="/add" component={Add} />
      <Route path="/login" component={Login} />
    </div>
  );
};

export default MainView;
