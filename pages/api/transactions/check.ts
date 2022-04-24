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
  if (req.method == "GET") {
    const body = req.query;

    if (body.success == "true") {
      res.redirect(`/success/${body.order}`);
    } else if (body.success == "false") {
      res.redirect(
        `/subscribe?msg=Purchase couldn't be completed, please try again`
      );
    }

    return;
  } else {
    res.status(201).send({ msg: "Invalid Request", req: req.method });
  }
};

export default handler;
