import type { AppProps /*, AppContext */ } from "next/app";
import "./../styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default App;
