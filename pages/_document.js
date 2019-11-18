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
          <script>
            
            </script>

          <style jsx global>
            {`
              body {
                font-family: 'Quicksand', sans-serif;
                font-weight: 500 !important;
              }
              a {
                color: #fff;
              }
              .navbar-fixed-top.scrolled {
                color: 
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
