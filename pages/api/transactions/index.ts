import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { FormData } from "../../../data/personalData";

// API Key ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TVRZMk9UTTRMQ0p1WVcxbElqb2lNVFkxTURjMk1UYzNPUzQ1TVRJNU15SjkuLWxKR2lwRmVJeEhfUWYzQUhwSXZ0SU1odVA2cnNVb3A0RDlPMU1XMUk5ZmNkLWQ5VGhCRTRnRDF1bi1ZTXhlQko2NEx6bjJjam1aWHVmSjM3WlE1d0E=

const API_KEY: string =
  "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TVRZMk9UTTRMQ0p1WVcxbElqb2lNVFkxTURjMk1UYzNPUzQ1TVRJNU15SjkuLWxKR2lwRmVJeEhfUWYzQUhwSXZ0SU1odVA2cnNVb3A0RDlPMU1XMUk5ZmNkLWQ5VGhCRTRnRDF1bi1ZTXhlQko2NEx6bjJjam1aWHVmSjM3WlE1d0E=";

interface BodyData {
  type: "card" | "wallet";
  data: FormData;
}

interface TokenResponse {
  data: { token: string };
}
interface OrderResponse {
  data: { id: number };
}

const handler: (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => void = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method == "POST") {
    const { type, data } = req.body as BodyData;
    console.log(type, data);

    // Getting Token
    try {
      const {
        data: { token },
      } = (await axios.post("https://accept.paymob.com/api/auth/tokens", {
        auth: API_KEY,
        password: "Lava@1362",
        username: "01068405513",
      })) as TokenResponse;

      console.log(token);
      const {
        data: { id },
      } = (await axios.post("https://accept.paymob.com/api/ecommerce/orders", {
        auth_token: token,
        delivery_needed: false,
        amount_cents: 118,
        currency: "EGP",
        items: [
          {
            name: "DedMet Subscription",
            amount_cents: "118",
            description: "DedMet Subscription",
            quantity: "1",
          },
        ],
      })) as OrderResponse;

      console.log(id);
      // if (type == "card") {
      const {
        data: { token: paymentToken },
      } = (await axios.post(
        "https://accept.paymob.com/api/acceptance/payment_keys",
        {
          auth_token: token,
          amount_cents: 118,
          expiration: 3600,
          currency: "EGP",
          order_id: id,
          billing_data: {
            first_name: data.name,
            last_name: data.name,
            email: data.email,
            phone_number: data.phone,
            street: "NA",
            floor: "NA",
            building: "NA",
            apartment: "NA",
            city: "NA",
            country: "NA",
          },
          lock_order_when_paid: true,
          integration_id: 1974358,
        }
      )) as TokenResponse;
      res.status(200).send({ token: paymentToken });
      // } else if (type == "wallet") {
      // }
    } catch (error) {
      console.log(error);
    }

    return;
  } else {
    res.status(201).send({ msg: "Invalid Request" });
  }
};

export default handler;
