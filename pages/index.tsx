import { FC } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Button from "../components/Button";

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="details gap-v-1">
        <h1>Bring the timeline back!</h1>
        <p>
          DedMet Brings the timeline back to Moodle so you never miss a deadline
          again!
        </p>
        <Button>Install Now</Button>
      </div>
      <div className="lottie">
        <dotlottie-player
          autoplay
          loop
          mode="normal"
          data-bm-renderer="svg"
          src="/lottie.lottie"
        ></dotlottie-player>
      </div>
    </section>
  );
};

const BrowserSupport: FC = () => {
  interface browser {
    src: string;
    alt: string;
  }

  const browsers: browser[] = [
    {
      src: "/images/browsers/firefox.webp",
      alt: "firefox",
    },
    {
      src: "/images/browsers/chrome.webp",
      alt: "chrome",
    },
    {
      src: "/images/browsers/edge.webp",
      alt: "microsoft edge",
    },
  ];
  return (
    <section className="browsers">
      <p className="main-title light">
        Compatible with most of the <span className="medium">major</span>{" "}
        browsers
      </p>
      <div className="row justify-content-center align-items-center">
        {browsers.map((item) => (
          <div key={item.alt} className="col-12 col-sm-6 col-lg-4 mt-5">
            <img {...item} height={60} className="mx-auto browser" />
          </div>
        ))}
      </div>
    </section>
  );
};

const Plugin: FC = () => {
  return (
    <section className="plugin">
      <div className="mockup">
        <img src="/images/mockup.webp" alt="NU moodle photo" />
      </div>
      <div className="details">
        <h3>It&apos;s Just a simple Extension!</h3>
        <p>
          A simple Browser Extension can recover you the timeline widget in
          Moodle
        </p>
        <div className="d-flex align-items-center gap-h-1 mt-3 moodle">
          <img src="/images/moodle.webp" height={30} alt="moodle" />
          <h2>+</h2>
          <img src="/logo.svg" height={30} alt="DedMet logo" />
        </div>
      </div>
    </section>
  );
};

const Pricing: FC = () => {
  return (
    <section>
      <h2 className="light main-title">Affordable and Simple</h2>
      <div className="main-title mt-4">
        <h3 className="bold d-inline">21.99 EGP</h3>{" "}
        <small className="light">per semester</small>
      </div>
      <Button className="mx-auto d-block mt-3">Subscribe</Button>
    </section>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title key={"title"}>DedMet</title>
      </Head>
      <main className="__root home">
        <Hero />
        <BrowserSupport />
        <Plugin />
        <Pricing />
      </main>
    </div>
  );
};

export default Home;
