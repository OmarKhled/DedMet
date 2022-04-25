import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC, Suspense, useEffect, useState } from "react";

import PersonalDetails from "../components/SubscriptionFrom/PersonalDetails";
import { FormData } from "../data/personalData";

import Button from "../components/Button";
import { FormProvider, useForm } from "react-hook-form";
import LoadingSpinner from "../components/LoadingSpinner";
import PaymentDetails from "../components/SubscriptionFrom/PaymentDetails";

const ProgressBar: FC<{ stage: number }> = ({ stage }) => {
  return (
    <div className="progressBar">
      <div className="bar"></div>
      <div className={`stage stage1${stage == 1 ? " active" : ""}`}>1</div>
      <div className={`stage stage2${stage == 2 ? " active" : ""}`}>2</div>
    </div>
  );
};

const Subscribe: NextPage = () => {
  const router = useRouter();
  const { query } = router;

  const methods = useForm({ mode: "onChange" });
  const { handleSubmit } = methods;

  const [stage, setStage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

  const submitAction = async (data: FormData) => {
    setLoading(true);
    // const {
    //   data: { token: paymentToken },
    // } = (await axios.post("/api/transactions", {
    //   type: data.paymentOption,
    //   data,
    // })) as { data: { token: string } };
    // setToken(paymentToken);
    setLoading(false);
    setStage(2);
    window.onbeforeunload = null;
    document.querySelector(".paymentIframe")?.ownerDocument.body.style.color;
  };

  useEffect(() => {
    var url = new URL(window.location.href);
    router.push(
      {
        pathname: "/subscribe",
        query: {
          ...Object.fromEntries(new URLSearchParams(url.search.slice(1))),
          stage,
        },
      },
      undefined,
      { shallow: true }
    );
  }, [stage]);

  useEffect(() => {
    console.log(query);
    if (query.msg) {
      setMsg(query.msg as string);
      setTimeout(() => {
        setMsg("");
      }, 4000);
    }
    setStage(query.stage ? Number(query.stage) : 1);
  }, [query]);

  useEffect(() => {
    Paddle.Setup({
      vendor: 146371,
      eventCallback: (e: any) => {
        console.log(e);
      },
    });
  }, []);
  return (
    <div className="__root">
      <div className="checkoutGrid">
        <div className="process">
          <h2 className="text-center">Subscription</h2>
          <ProgressBar stage={stage} />
          <div className="paymentDetails-sm">
            <h5 className="bold">DedMet Semester Lisence</h5>
            <p>
              Get the timeline back to moodle! This license will enable you to
              enjoy the extension for a semester from now.
            </p>
            <hr />
            <small className="medium">Total: 1.18 USD</small>
          </div>
          <FormProvider {...methods}>
            {stage == 1 ? (
              <form
                onSubmit={handleSubmit(submitAction)}
                className="p-relative"
              >
                {msg && (
                  <div className="errors mt-4 mb--1">
                    <small>{msg}</small>
                  </div>
                )}
                {loading && (
                  <div className="overlay">
                    <LoadingSpinner />
                  </div>
                )}
                <PersonalDetails />
                {/* <PaymentMethods /> */}
                <Button
                  type={"submit"}
                  value={`Next`}
                  className="ms-auto mt-4 d-block"
                />
              </form>
            ) : (
              <div id="checkout">
                <Suspense fallback={<LoadingSpinner />}>
                  <PaymentDetails />
                  <Button
                    onClick={() => setStage(1)}
                    tag="button"
                    className="mx-auto mt-4 d-block"
                  >
                    Previous
                  </Button>
                </Suspense>
              </div>
            )}
          </FormProvider>
        </div>
        <div className="paymentDetails-lg">
          <h5 className="bold">DedMet Semester Lisence</h5>
          <p>
            Get the timeline back to moodle! This license will enable you to
            enjoy the extension for a semester from now.
          </p>
          <hr />
          <small className="medium">Total: 1.18 USD</small>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
