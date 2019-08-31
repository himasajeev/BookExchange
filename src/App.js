import React from 'react';
import { Global, css } from '@emotion/core';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './modules/store';

import reset from './styles/reset';

import Main from './routes/Main';

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
          <Main />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
