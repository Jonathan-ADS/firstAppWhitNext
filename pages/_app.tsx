import { NextPage } from "next";
import "../styles/globals.css";
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";

type NextPageWithLayaut = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWhitLayout = AppProps & {
  Component: NextPageWithLayaut;
};

export default function App({ Component, pageProps }: AppPropsWhitLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
