import { FC } from "react";
import Script from "next/script";

const PaddleInitializer: FC = () => {
  const updatePrices = (data: any) => {
    const priceLabels = document.querySelectorAll(".totalPrice");

    const newPrice = data.eventData.checkout.prices.customer.total;
    for (var i = 0; i < priceLabels.length; i++) {
      priceLabels[i].innerHTML = newPrice + " USD";
    }
  };
  return (
    <Script
      defer
      src="https://cdn.paddle.com/paddle/paddle.js"
      onLoad={() => {
        if (process.env.NODE_ENV == "development") {
          window.Paddle.Environment.set("sandbox");
        }
        window.Paddle.Setup({
          vendor: Number(process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID),
          eventCallback: function (data: SetupEventCallbackData) {
            updatePrices(data);
          },
        });
      }}
    />
  );
};

export default PaddleInitializer;
