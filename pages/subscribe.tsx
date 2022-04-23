import { NextPage } from "next";

import PersonalDetails from "../components/SubscriptionFrom/PersonalDetails";

import Button from "../components/Button";
import { FormProvider, useForm } from "react-hook-form";
import PaymentMethods from "../components/SubscriptionFrom/PaymentMethods";

const Subscribe: NextPage = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const submitAction = (data: any) => console.log(data);

  return (
    <div className="__root">
      <h2 className="text-center">Subscription</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitAction)}>
          <PersonalDetails />
          <PaymentMethods />
          <Button type="submit" value="Next" className="mx-auto mt-4 d-block" />
        </form>
      </FormProvider>
    </div>
  );
};

export default Subscribe;
