import type { AppProps } from "next/app";

import "../styles/master.scss";
import "../styles/bootstrap-grid.css";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#441ab9" />

        <meta
          name="description"
          content="A Chrome Extension designed to add timline to Nile University Moodle"
          key={"descripton"}
        />
        <meta property="og:title" content="DedMet" key={"title"} />
        {/* <meta
          property="og:image"
          content="https://i.ibb.co/D1BHjTd/cover.png"
          key={"image"}
        /> */}
        <meta
          property="og:description"
          content="A Chrome Extension designed to add timline to Nile University Moodle"
          key={"ogdescription"}
        />
        <meta name="twitter:card" content="summary_large_image" />

        <title key={"title"}>DedMet</title>
      </Head>
      <span id="top"></span>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
    </>
  );
  // return <Component {...pageProps} />
}

export default MyApp;
