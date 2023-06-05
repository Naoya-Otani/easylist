import "@/styles/globals.css";
import { Gothic_A1, Noto_Sans_JP } from "next/font/google";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

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
  return (
    <>
      <SessionProvider>
        <Component {...pageProps} />
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
