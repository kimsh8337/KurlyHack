import React from 'react';
import { GlobalStyles } from 'modules/defines/styles.js';
import AppContainer from "containers/AppContainer.js";
import { HashRouter } from 'react-router-dom';
import Routes from 'Router';

const App = () => {
  
  return (
    <HashRouter>
      <GlobalStyles />
      <AppContainer>
        <Routes />
      </AppContainer>
    </HashRouter>
  );
}

export default App;