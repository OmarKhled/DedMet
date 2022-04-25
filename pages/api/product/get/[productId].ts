import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface ProductsResponse {
  success: boolean;
  response: {
    total: number;
    count: number;
    products: {
      id: number;
      name: string;
      description: string;
      base_price: number;
      sale_price: string | null;
      currency: "USD";
      screenshots: string[];
      icon: string;
    }[];
  };
}

const handler: (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => void = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method == "GET") {
    const query = req.query;
    const productId = Number(query.productId);
    try {
      const { data }: { data: ProductsResponse } = await axios.post(
        `${
          process.env.PRODUCT_API_END_POINT
            ? process.env.PRODUCT_API_END_POINT
            : "https://vendors.paddle.com/api/"
        }2.0/product/get_products`,
        {
          vendor_id: process.env.PADDLE_VENDOR_ID,
          vendor_auth_code: process.env.PADDLE_VENDOR_AUTH,
        }
      );
      const {
        data: { conversion_rates },
      } = await axios.get(
        `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_API_AUTH}/latest/USD`
      );
      const product = data.response.products.find(
        (product) => product.id == productId
      );
      if (product) {
        res.send({
          product,
          price: {
            USD: product.base_price,
            EGP: product.base_price * conversion_rates.EGP,
          },
        });
      } else {
        res.status(404).send({ msg: "Product not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "Server Error", error });
    }
    return;
  }
};

export default handler;
