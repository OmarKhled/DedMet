import paddle from "./paddle.d.ts";
export as namespace JSX;

export interface IntrinsicElements {
  "lottie-player": any;
  "dotlottie-player": any;
}

declare global {
  interface Customer {
    total: number;
    total_tax: number;
    currency: string;
  }

  type PaddleEvent =
    | "Checkout.Loaded"
    | "Checkout.Close"
    | "Checkout.Complete"
    | "Checkout.User.Subscribed"
    | "Checkout.Quantity.Change"
    | "Checkout.Login"
    | "Checkout.Logout"
    | "Checkout.PaymentMethodSelected"
    | "Checkout.Coupon.Add"
    | "Checkout.Coupon.Submit"
    | "Checkout.Coupon.Cancel"
    | "Checkout.Coupon.Applied"
    | "Checkout.Coupon.Remove"
    | "Checkout.Error"
    | "Checkout.Location.Submit"
    | "Checkout.Language.Change"
    | "Checkout.Vat.Add"
    | "Checkout.Vat.Cancel"
    | "Checkout.Vat.Submit"
    | "Checkout.Vat.Applied"
    | "Checkout.Vat.Remove"
    | "Checkout.WireTransfer.Complete"
    | "Checkout.PaymentComplete"
    | "Checkout.PaymentMethodChange"
    | "Checkout.WireTransfer.PaymentMethodChange";

  interface Window {
    Paddle: paddle;
    CanvasRenderer: any;
  }
}
