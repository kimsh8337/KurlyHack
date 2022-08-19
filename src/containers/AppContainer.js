import React from 'react';
import Home from "pages/Home.js";
import { GlobalStyles } from 'modules/defines/styles.js';

const AppContainer = () => {
    return (
      <>
        <GlobalStyles />
        <Home/>
      </>
    );
}

export default AppContainer;