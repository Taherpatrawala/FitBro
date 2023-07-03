import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import CheckAuth from "../middlewares/checkAuth";

const router = express.Router();

router.post(
  "/signin",
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Email is invalid")
    .bail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({
        errors: errors.array().map((err) => err.msg),
        data: null,
      });
    }
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.json({
        errors: [
          {
            msg: "Email is already in use",
          },
        ],
        data: null,
      });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPass,
    });

    const token = Jwt.sign(
      { email: newUser.email },
      process.env.JWT_SECRET as string
    );

    res.json({
      errors: [],
      data: {
        token: token,
        id: newUser._id,
        email: newUser.email,
      },
    });
  }
);

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.json({
      errors: [
        {
          msg: "Email not found!",
        },
      ],
    });
  }

  const passMatch = await bcrypt.compare(password, user.password);

  if (!passMatch) {
    return res.json({
      errors: [
        {
          msg: "Invalid Password",
        },
      ],
    });
  }

  const token = Jwt.sign(
    { email: user.email },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" } //this indicates that the token will expire in 1 day and the user will have to login again
  );

  res.json({
    errors: [],
    data: { token: token, id: user._id, email: user.email },
  });
});

router.get("/me", CheckAuth, async (req, res, next) => {
  // res.send("This is me route");
  const user = await User.findOne({ email: req.user });
  return res.json({
    errors: [],
    data: {
      user: { id: user?._id, email: user?.email },
    },
  });
});

export default router;
