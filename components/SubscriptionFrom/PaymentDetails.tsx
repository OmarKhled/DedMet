import { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";

const PaymentDetails: FC = () => {
  const { getValues } = useFormContext();

  useEffect(() => {
    Paddle.Checkout.open({
      method: "inline",
      product: 768379,
      allowQuantity: false,
      disableLogout: true,
      frameTarget: "paymentDetails",
      frameInitialHeight: 416,
      frameStyle:
        "width:100%; min-width:312px; background-color: transparent; border: none;",
    });
    // Paddle.Checkout.open({ product: 768379 });
  }, []);

  return (
    <>
      <div className="formContainer mx-auto mt-5">
        <div className="head">
          <p>Payment Details</p>
        </div>
        <div className="body">
          <div className="paymentDetails"></div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
