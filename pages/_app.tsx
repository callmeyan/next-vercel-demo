import type { AppProps /*, AppContext */ } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import {useRouter} from "next/router";
import "./../styles/global.scss";
import Vercel from "../components/vercel";
import SiteHeader from "../components/SiteHeader";

const IS_DEV = process.env.NODE_ENV !== "production"
function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return <>
    <SiteHeader />
    <section className="app-main-container"><Component {...pageProps} /></section>
    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Powered by</span>
        <Vercel className="power-logo" />
      </a>

    </footer>
    {!IS_DEV && <Analytics />}
  </>;
}
export default App;
