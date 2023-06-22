import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";

const CheckAuth = async (req: Request, res: Response, next: NextFunction) => {
  console.log("I am in middleware");
  const token = req.header("authorization");
  if (!token) {
    return res.status(403).json({
      errors: [
        {
          msg: "User is unauthorized",
        },
      ],
    });
  }
  try {
    const user = (await Jwt.verify(
      token,
      process.env.JWT_SECRET as string
    )) as { email: string };

    req.user = user.email;
  } catch (error) {
    console.log(error);
  }

  res.send(token);
};
export default CheckAuth;
