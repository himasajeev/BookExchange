import React from 'react';
import { Global, css } from '@emotion/core';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './modules/store';

import reset from './styles/reset';

import MainView from './routes/MainViewContainer';

const App = () => {
  return (
    <div className="App">
      <Global
        styles={css`
          ${reset}
        `}
      />
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <MainView />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
