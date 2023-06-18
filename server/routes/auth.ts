import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import { Jwt } from "jsonwebtoken";

const router = express.Router();

router.post(
  "/login",
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

    res.json(user);
  }
);

export default router;
