import Document, { Html, Head, Main, NextScript } from "next/document";

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
              a {
                color: #fff;
              }
              .navbar-fixed-top.scrolled {
                background-color: #fff !important;
                transition: background-color 200ms linear;
              }
            `}
          </style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
