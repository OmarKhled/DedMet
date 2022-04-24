import { NextPage } from "next";
import { useState } from "react";
import axios from "axios";

import PersonalDetails from "../components/SubscriptionFrom/PersonalDetails";
import { FormData } from "../data/personalData";

import Button from "../components/Button";
import { FormProvider, useForm } from "react-hook-form";
import PaymentMethods from "../components/SubscriptionFrom/PaymentMethods";

const Subscribe: NextPage = () => {
  const methods = useForm({ mode: "onChange" });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const [stage, setStage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  const submitAction = async (data: FormData) => {
    const {
      data: { token: paymentToken },
    } = (await axios.post("/api/transactions", {
      type: data.paymentOption,
      data,
    })) as { data: { token: string } };
    setToken(paymentToken);
    setStage(2);
  };

  return (
    <div className="__root">
      <h2 className="text-center">Subscription</h2>
      <FormProvider {...methods}>
        {stage == 1 ? (
          <form onSubmit={handleSubmit(submitAction)}>
            <PersonalDetails />
            <PaymentMethods />
            <Button
              type={"submit"}
              value="Next"
              className="ms-auto mt-4 d-block"
            >
              Next {loading && loading}
            </Button>
          </form>
        ) : (
          <>
            <iframe
              style={{ width: "100%", border: "none" }}
              height="900px"
              src={`https://accept.paymobsolutions.com/api/acceptance/iframes/368161?payment_token=${token}`}
              className="mt-3"
            />
          </>
        )}
      </FormProvider>
    </div>
  );
};

export default Subscribe;
