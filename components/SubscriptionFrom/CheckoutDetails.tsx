import { FC } from "react";

const CheckoutDetails: FC<{ size: "sm" | "lg" }> = ({ size }) => {
  return (
    <div className={`paymentDetails-${size}`}>
      <h5 className="bold">DedMet Semester Lisence</h5>
      <p>
        Get the timeline back to moodle! This license will enable you to enjoy
        the extension for a semester from now.
      </p>
      <hr />
      <small className="medium">
        Total: <span className="totalPrice"> 1.18 USD</span>
      </small>
    </div>
  );
};

CheckoutDetails.defaultProps = {
  size: "sm",
};

export default CheckoutDetails;
