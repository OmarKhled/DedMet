import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title key={"title"}>DedMet</title>
      </Head>
      <main className="__root home">
        <section className="hero">
          <div className="details gap-v-1">
            <h1>Bring the timeline back!</h1>
            <p>
              DedMet Brings the timeline back to Moodle so you never miss a
              deadline again!
            </p>
            <Button>Install Now</Button>
          </div>
          <div className="lottie">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_zzlx0xpr.json"
              background="transparent"
              speed="1"
              class="lottie-frame"
              loop
              autoplay
            ></lottie-player>
          </div>
        </section>
        <section className="browsers">
          <p className="main-title light">
            Compatible with most of the <span className="medium">major</span>{" "}
            browsers
          </p>
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-sm-6 col-lg-4 mt-5">
              <img
                src="/images/browsers/firefox.webp"
                height={60}
                className="mx-auto browser"
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mt-5">
              <img
                src="/images/browsers/chrome.webp"
                height={60}
                className="mx-auto browser"
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mt-5">
              <img
                src="/images/browsers/edge.webp"
                height={75}
                className="mx-auto browser"
              />
            </div>
          </div>
        </section>
        <section className="plugin">
          <div className="mockup">
            <img src="/images/mockup.webp" />
          </div>
          <div className="details">
            <h3>It's Just a simple Extension!</h3>
            <p>
              A simple Browser Extension can recover you the timeline widget in
              Moodle
            </p>
            <div className="d-flex align-items-center gap-h-1 mt-3 moodle">
              <img src="/images/moodle.svg" height={30} />
              <h2>+</h2>
              <img src="/logo.svg" height={30} />
            </div>
          </div>
        </section>
        <section>
          <h2 className="light main-title">Affordable and Simple</h2>
          <div className="main-title mt-4">
            <h3 className="bold d-inline">21.99 EGP</h3>{" "}
            <small className="light">per semester</small>
          </div>
          <Button className="mx-auto d-block mt-3">Subscribe</Button>
        </section>
      </main>
    </div>
  );
};

export default Home;
