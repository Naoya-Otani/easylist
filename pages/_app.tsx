import "@/styles/globals.css";
import { Gothic_A1, Noto_Sans_JP } from "next/font/google";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import Loading from "@/components/parts/common/Loading";

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
  return (
    <>
      <SessionProvider>
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
