import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
          {/* <script src=".bulma-carousel/dist/js/bulma-carousel.min.js"></script> */}

        </body>

        </Html>
    );
  }
}

export default MyDocument;
