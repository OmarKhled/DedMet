import { FC, useEffect, useState } from "react";
import axios from "axios";

const Price: FC<{ currency: "EGP" | "USD" }> = ({ currency }) => {
  const [productPrice, setProductPrice] = useState<number>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct: () => Promise<number> =
      async function (): Promise<number> {
        const product = await axios.get(
          `/api/product/get/${process.env.NEXT_PUBLIC_DEDMET_PRODUCT_ID}`
        );
        return product.data.price[currency];
      };
    fetchProduct().then((price) => {
      setProductPrice(Number(price.toFixed(2)));
      setLoading(false);
    });
  }, []);

  return <>{loading ? <div className="textLoader"></div> : productPrice}</>;
};

Price.defaultProps = {
  currency: "USD",
};

export default Price;
