import { Request, Response } from "express";

const getProduct = (req: Request, res: Response) => {
  res.status(200).json(req.body);
  console.log(req.body);
};

export { getProduct };
