import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import HeadMeta from "../src/HeadMeta";
import State from "../src/context/state";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-CBTMJ4L7L7"
      ></Script>
          
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CBTMJ4L7L7', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <State>
        <HeadMeta title="Daniel - CV / Resume / Portfolio" />
        <PreLoader />
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </State>
    </>
  );
}

export default MyApp;
