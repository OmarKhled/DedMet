import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Button from "../components/Button";
import PaddleInitializer from "../components/PaddleInitializer";

import ProgressBar from "../components/SubscriptionFrom/ProgressBar";
import CheckoutDetails from "../components/SubscriptionFrom/CheckoutDetails";
import PersonalDetails from "../components/SubscriptionFrom/PersonalDetails";
import PaymentDetails from "../components/SubscriptionFrom/PaymentDetails";

import { FormDataInterface } from "../data/personalData";

const Subscribe: NextPage = () => {
  const router = useRouter();
  const { query } = router;

  const methods = useForm({ mode: "onChange" });
  const { handleSubmit } = methods;

  const [stage, setStage] = useState<number>(1);

  const submitAction = async (data: FormDataInterface) => {
    setStage(2);
    window.onbeforeunload = null;
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
    setStage(query.stage ? Number(query.stage) : 1);
  }, [query]);

  useEffect(() => {
    // console.log(
    //   Number(process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID),
    //   Boolean(process.env.NEXT_PUBLIC_PADDLE_SANDBOX)
    // );
  }, []);

  return (
    <div className="__root">
      <PaddleInitializer />
      <div className="checkoutGrid">
        <div className="process">
          <h2 className="text-center">Subscription</h2>
          <ProgressBar stage={stage} />
          <CheckoutDetails size="sm" />
          <FormProvider {...methods}>
            {stage == 1 ? (
              <form
                onSubmit={handleSubmit(submitAction)}
                className="p-relative"
              >
                {/* {loading && (
                  <div className="overlay">
                    <LoadingSpinner />
                  </div>
                )} */}
                <PersonalDetails />
                <Button
                  type={"submit"}
                  value={`Next`}
                  className="ms-auto mt-4 d-block"
                />
              </form>
            ) : (
              <div id="checkout">
                <PaymentDetails />
                <Button
                  onClick={() => setStage(1)}
                  tag="button"
                  className="mx-auto mt-4 d-block"
                >
                  Previous
                </Button>
              </div>
            )}
          </FormProvider>
        </div>
        <CheckoutDetails size="lg" />
      </div>
    </div>
  );
};

export default Subscribe;
