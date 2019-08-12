import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import store from './store';
import RouteMap from './routes';
import './index.scss';
import env from './environments';


import theme from './assets/style/theme';

window.addEventListener('error', (event) => {
  const { error: { stack } } = event;
  axios.post(env.errorHandler, { stack });
});

const Root = (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <RouteMap />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
