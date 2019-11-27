import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false;

import { faAt, faEnvelope, faFileDownload, faFish, faUsers, faAssistiveListeningSystems } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  faAt,
  faEnvelope,
  faFileDownload,
  faFish,
  faUsers,
  faAssistiveListeningSystems
);

import Header from "../components/Header";
import OfflineSupport from "../components/OfflineSupport";
import Footer from "../components/Footer";

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
