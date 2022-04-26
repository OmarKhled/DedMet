import { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";

const PaymentDetails: FC = () => {
  const { getValues } = useFormContext();

  useEffect(() => {
    const id = Number(process.env.NEXT_PUBLIC_DEDMET_PRODUCT_ID);
    window.Paddle.Checkout.open({
      method: "inline",
      product: id,
      allowQuantity: false,
      disableLogout: true,
      frameTarget: "paymentDetails",
      frameInitialHeight: 416,
      frameStyle:
        "width:100%; min-width:312px; background-color: transparent; border: none;",
      email: getValues("email"),
      country: "EG",
      passthrough: JSON.stringify(getValues()),
    });
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
