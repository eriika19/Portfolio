import React from 'react';
import App from 'next/app';

import Header from '../components/Header';
import OfflineSupport from '../components/OfflineSupport';

class myApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Header />
        <OfflineSupport />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default myApp;
