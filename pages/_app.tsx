import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import Head from "next/head";

import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { theme } from "../theme";

import "../styles/globals.scss";
import "macro-css"
const katex = require('katex');
import 'katex/dist/katex.min.css';

//TODO: перенести в types
declare global {
    interface Window { katex: any; Quill: any;}
}

import { Header } from "../Components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
    if (process.browser){
        window.katex = katex;
    }
  return (
    <>
      <Head>
        <title>Labs Creator</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
