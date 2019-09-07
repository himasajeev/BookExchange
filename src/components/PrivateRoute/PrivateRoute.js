/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !token ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  token: PropTypes.string,
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
