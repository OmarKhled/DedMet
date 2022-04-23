import { FC } from "react";
import { FaCreditCard, FaWallet } from "react-icons/fa";

import { useFormContext } from "react-hook-form";

const PaymentMethods: FC = () => {
  const { register } = useFormContext();
  return (
    <div className="mt-3">
      <h5>Payment Method</h5>
      <div className="paymentOptions mt-2">
        <div className="">
          <input
            id="card"
            className="d-none"
            {...register("paymentOption", {
              required: {
                value: true,
                message: "Payment Method is required",
              },
            })}
            value={"card"}
            name="paymentOption"
            type={"radio"}
          />
          <label htmlFor="card" className="paymentOption">
            <FaCreditCard className="paymentIcon" />
            <p>Pay with card</p>
          </label>
        </div>
        <div className="">
          <input
            id="wallet"
            className="d-none"
            {...register("paymentOption", {
              required: {
                value: true,
                message: "Payment Method is required",
              },
            })}
            value={"wallet"}
            type={"radio"}
          />
          <label htmlFor="wallet" className="paymentOption">
            <FaWallet className="paymentIcon" />
            <p>Pay with mobile wallet</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
