import type { NextPage } from "next";
import { FC, Suspense, useEffect } from "react";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";

const promise = new Promise((r) => {
  setTimeout(() => {
    // r();/
  }, 2000);
});

const Component: FC = () => {
  useEffect(() => {
    //   setTimeout(() => {
    // throw promise;
    //   }, 0);
  }, []);
  // const load = () => {
  if (true) {
    // throw promise;
  }
  // };
  return (
    <>
      <h1 className="pt-5" style={{ textAlign: "center" }}>
        Hello from component
      </h1>
      <Button tag="button">Set Load</Button>
    </>
  );
};

const about: NextPage = () => {
  return (
    <div>
      <main className="__root">
        {/* <Suspense fallback={<LoadingSpinner />}> */}
        <Component />
        {/* </Suspense> */}
      </main>
    </div>
  );
};

export default about;
