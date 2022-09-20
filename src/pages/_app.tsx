import type { AppProps } from "next/app";
import "modern-css-reset";
import "../features/styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
