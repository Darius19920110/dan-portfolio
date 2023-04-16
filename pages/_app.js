import HeadMeta from "../src/HeadMeta";
import State from "../src/context/state";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <State>
      <HeadMeta title="Daniel - CV / Resume / Portfolio" />
      <PreLoader />
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </State>
  );
}

export default MyApp;
