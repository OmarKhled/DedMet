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
      </main>
    </div>
  );
};

export default Home;
