import { useEffect, useRef } from "react";
import { NextPage } from "next";
import Button from "../components/Button";
import PersonalDetails from "../components/SubscriptionFrom/PersonalDetails";

// 4111 1111 1111 1111 123
// 5200 0000 0000 0114 977
// 5498 3838 0160 6532 977 3D

const Subscribe: NextPage = () => {
  const form = useRef<HTMLFormElement>();
  console.log(form.current);
  useEffect(() => {
    paylib.inlineForm({
      key: "CDKMQH-NMDT6D-THD6DK-HPHTMR",
      form: document.getElementById("payform"),
      autoSubmit: true,
      callback: function (response: any) {
        console.log(response);
      },
    });
  }, []);
  return (
    <div className="__root">
      <h2 className="text-center">Subscription</h2>
      <PersonalDetails />
      <div className="formContainer mx-auto">
        <div className="head">
          <p>Payment Details</p>
        </div>
        <div className="body">
          <form
            action="/api/trans"
            id="payform"
            className="formGrid"
            method="post"
          >
            <div className="">
              <label>Card Number</label>
              <input type="text" data-paylib="number" />
            </div>
            <div className="">
              <label>Expiry Date (MM)</label>
              <input type="text" data-paylib="expmonth" />
            </div>
            <div className="">
              <label>Expiry Date (YYYY)</label>
              <input type="text" data-paylib="expyear" />
            </div>
            <div className="">
              <label>Security Code</label>
              <input type="text" data-paylib="cvv" />
            </div>
            <Button type="submit" value="Place order" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
