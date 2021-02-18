import React from 'react';
import Header from './pages/components/Header';
import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Header />
    <Dashboard />
    <GlobalStyle />
  </>
);

export default App;
