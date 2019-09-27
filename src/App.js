import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  createMuiTheme,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Global, css } from '@emotion/core';
import { toast } from 'react-toastify';
import { StylesProvider } from '@material-ui/styles';
import store from './modules/store';
import reset from './styles/reset';
import global from './styles/global';
import MainView from './routes/MainViewContainer';
import { COLORS } from './styles/globalVariables';

toast.configure();

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: COLORS.MAIN,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#FFEE58',
      // dark: will be calculated from palette.secondary.main,
    },
    // error: will use the default color
  },
});

const App = () => {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <Global
          styles={css`
            ${reset}
            ${global}
          `}
        />
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <MainView />
            </BrowserRouter>
          </Provider>
        </MuiThemeProvider>
      </StylesProvider>
    </div>
  );
};

export default App;
