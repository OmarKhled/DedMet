// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const handler: (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => void = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method == "POST") {
    console.log(req.body);
    const data = {
      profile_id: "92204",
      tran_type: "sale",
      tran_class: "ecom",
      cart_id: "4244b9fd-c7e9-4f16-8d3c-4fe7bf6c48ca",
      cart_description: "Dummy Order 35925502061445345",
      cart_currency: "EGP",
      cart_amount: 1,
      // "callback": "https://localhost:3000/",
      return: "https://localhost:3000/",
    };
    const response = await fetch(
      "https://secure-egypt.paytabs.com/payment/request",
      {
        method: "POST",
        headers: {
          authorization: "SRJN2RDDND-JDGHDJDKRM-GWG6NDGH62",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const content = await response.json();
    console.log(content);
    res.redirect(content.redirect_url);
    // res.status(200).send({ ...response });
    return;
  }
};

export default handler;
