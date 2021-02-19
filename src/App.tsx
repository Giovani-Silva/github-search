import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import store from './store';

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
    <GlobalStyle />
  </>
);

export default App;
