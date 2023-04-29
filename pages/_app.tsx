import type { AppProps /*, AppContext */ } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import "./../styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <Analytics />
  </>;
}
export default App;
