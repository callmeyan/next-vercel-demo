import type { NextApiRequest, NextApiResponse } from "next";
type PageModel = {
  total: number;
  size: number;
  index: number;
};
type ResponseData = {
  data: any[];
  page: PageModel;
  time: number;
};
export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  res.status(200).json({
    data: [],
    time: Date.now(),
    page: {
      total: 20,
      size: 4,
      index: 1,
    },
  });
};
