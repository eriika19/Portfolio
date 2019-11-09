//import React from 'react';
//import App from 'next/app';

import Header from '../components/Header';
import OfflineSupport from '../components/OfflineSupport';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <OfflineSupport />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
