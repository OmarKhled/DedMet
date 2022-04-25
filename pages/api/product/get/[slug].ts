import type { NextApiRequest, NextApiResponse } from "next";

const handler: (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => void = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method == "GET") {
    const { slug } = req.query;
    res.send({ query: slug });
    return;
  }
};

export default handler;
