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
          <style jsx global>
            {`
              body {
                font-family: 'Quicksand', sans-serif;
                font-weight: 500 !important;
              }
              a {
                color: #fff;
              }
            `}
          </style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
