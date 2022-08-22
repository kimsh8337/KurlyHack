import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

const AppContainer = ({ children }) => {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
}

export default AppContainer;