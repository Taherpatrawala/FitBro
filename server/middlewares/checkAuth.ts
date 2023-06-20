import { Request, Response, NextFunction } from "express";

const CheckAuth = (req: Request, res: Response, next: NextFunction) => {
  console.log("I am in middleware");
  return res.send("Not authenticated");
};
export default CheckAuth;
