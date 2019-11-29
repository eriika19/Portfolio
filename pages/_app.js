import App, { Container } from "next/app";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false;

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faEnvelope);

import Header from "../components/Header";
import OfflineSupport from "../components/OfflineSupport";
import Footer from "../components/Footer";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Header />
        <OfflineSupport />
        <Component {...pageProps} />
        <Footer />
        <style global jsx>
          {`
            body {
              font-family: "Quicksand", sans-serif;
              font-weight: 500 !important;
            }
          `}
        </style>
      </div>
    );
  }
}

export default MyApp;
