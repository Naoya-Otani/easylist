import "@/styles/globals.css";
import { Gothic_A1, Noto_Sans_JP } from "next/font/google";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/src/components/parts/common/Loading";
import Script from "next/script";
import * as gtag from "@/lib/gtag";
import { useRouter } from "next/router";

// fonts setting
const gothicA1 = Gothic_A1({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});
const notoSansJP = Noto_Sans_JP({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);
  return (
    <>
      <SessionProvider>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_MEASUREMENT_ID}');
            `,
          }}
        />
        {loading ? <Loading /> : <Component {...pageProps} />}
      </SessionProvider>
      <style jsx global>
        {`
          :root {
            --font-gothicA1: ${gothicA1.style.fontFamily};
            --font-notoSansJP: ${notoSansJP.style.fontFamily};
          }
        `}
      </style>
    </>
  );
};

export default App;
