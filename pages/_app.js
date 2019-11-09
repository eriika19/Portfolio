//import 'bulma-carousel/dist/css/bulma-carousel.min.css';

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
