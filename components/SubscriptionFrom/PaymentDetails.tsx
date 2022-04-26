import { FC, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import LoadingSpinner from "../LoadingSpinner";

const PaymentDetails: FC = () => {
  const { getValues } = useFormContext();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const id = Number(process.env.NEXT_PUBLIC_DEDMET_PRODUCT_ID);
    window.Paddle.Checkout.open({
      method: "inline",
      product: id,
      allowQuantity: false,
      disableLogout: true,
      frameTarget: "paymentDetails",
      frameInitialHeight: 416,
      frameStyle: "width:100%; background-color: transparent; border: none;",
      email: getValues("email"),
      country: "EG",
      passthrough: JSON.stringify(getValues()),
      loadCallback: () => {
        setLoading(false);
      },
    });
  }, []);

  return (
    <>
      <div className="formContainer mx-auto mt-5">
        <div className="head">
          <p>Payment Details</p>
        </div>
        <div
          className={`body ${loading ? "d-flex align-items-center" : ""}`}
          style={loading ? { height: "416px" } : {}}
        >
          {loading && <LoadingSpinner className="m-auto d-block" />}
          <div className={`paymentDetails${loading ? " d-none" : ""}`}></div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
