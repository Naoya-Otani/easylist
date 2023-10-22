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
  const startLoading = () => {
    setLoading(true);
  };
  const stopLoading = () => {
    setLoading(false);
  };
  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);

  const router = useRouter();

  // ページ遷移が完了したときにGoogle Analyticsのページビューを送信する関数
  const handleRouterChange = (url: string) => {
    gtag.pageview(url);
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouterChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

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
