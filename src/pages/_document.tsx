import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument<{}> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link href="/favicons/favicon.ico" rel="icon" />
          <meta content="#49337D" name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
