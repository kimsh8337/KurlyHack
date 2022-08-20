import React from 'react';
import Home from "pages/Home.js";
import Footer from 'components/Footer';
import Header from 'components/Header';

const AppContainer = () => {
    return (
      <>
        <Header />
        <Home/>
        <Footer />
      </>
    );
}

export default AppContainer;